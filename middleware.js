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

export function middleware(req) {
  const user = process.env.PRIVATE_USER;
  const pass = process.env.PRIVATE_PASS;

  // Fail closed to avoid accidental exposure.
  if (!user || !pass) return unauthorized();

  const auth = req.headers.get("authorization");
  if (!auth) return unauthorized();

  const [type, encoded] = auth.split(" ");
  if (type !== "Basic" || !encoded) return unauthorized();

  let decoded = "";
  try {
    decoded = atob(encoded);
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

