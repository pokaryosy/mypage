import fs from "fs";
import path from "path";
import Head from "next/head";

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "private", "yoshi_jazz.html");

  let html = "";
  try {
    html = fs.readFileSync(filePath, "utf8");
  } catch {
    html = "<!doctype html><html><body><h1>Not found</h1><p>private/yoshi_jazz.html が見つかりません。</p></body></html>";
  }

  return {
    props: { html },
  };
}

export default function YoshiJazzPrivatePage({ html }) {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex,nofollow,noarchive" />
        <title>Private</title>
      </Head>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}

