import { NextResponse } from "next/server";

export const config = {
  matcher: ["/private/:path*"],
};

function unauthorized() {
  return new NextResponse("Authentication required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Private"',
      "X-Robots-Tag": "noindex, nofollow, noarchive",
    },
  });
}

function authNotConfigured() {
  return new NextResponse("Auth not configured", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Private"',
      "X-Robots-Tag": "noindex, nofollow, noarchive",
    },
  });
}

function decodeBasic(encoded) {
  const binary = atob(encoded);
  const bytes = Uint8Array.from(binary, ch => ch.charCodeAt(0));
  // Browsers typically send UTF-8 these days, but not guaranteed.
  try {
    return new TextDecoder("utf-8", { fatal: true }).decode(bytes);
  } catch {
    return binary;
  }
}

export function middleware(req) {
  const user = process.env.PRIVATE_USER;
  const pass = process.env.PRIVATE_PASS;

  // Fail closed to avoid accidental exposure.
  if (!user || !pass) return authNotConfigured();

  const auth = req.headers.get("authorization");
  if (!auth) return unauthorized();

  const [type, encoded] = auth.split(" ");
  if (type !== "Basic" || !encoded) return unauthorized();

  let decoded = "";
  try {
    decoded = decodeBasic(encoded);
  } catch {
    return unauthorized();
  }

  const sepIndex = decoded.indexOf(":");
  const u = sepIndex >= 0 ? decoded.slice(0, sepIndex) : "";
  const p = sepIndex >= 0 ? decoded.slice(sepIndex + 1) : "";

  if (u !== user || p !== pass) return unauthorized();

  const res = NextResponse.next();
  res.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive");
  return res;
}

