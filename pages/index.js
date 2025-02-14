import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'


export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

const name = 'YOSY'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"></meta>
      </Head>
      <section className={utilStyles.headingMd}>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"></meta>
        <Link href="/about" className={utilStyles.colorInherit}>
          about.
        </Link>&emsp;
        <Link href="https://linkco.re/0CsC8Z6T?lang=ja" className={utilStyles.colorInherit}>
          music.
        </Link>&emsp;
        <Link href="https://www.instagram.com/pokaryosy/" className={utilStyles.colorInherit}>
          instagram.
        </Link>&emsp;
        <br className="sp" />
        <Link href="https://twitter.com/pokaryosy" className={utilStyles.colorInherit}>
          twitter.
        </Link>&emsp;
        {/* <a href="https://suzuri.jp/YOSY">items.</a>&emsp; */}
        <Link href="mailto:pokaryosy@gmail.com" className={utilStyles.colorInherit}>
          contact.
        </Link>&emsp;
        {/* <a href="https://github.com/pokaryosy">github.</a>&emsp; */}

      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <br />
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title, postphoto }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <img
                  src={postphoto}
                  className={`${utilStyles.postphoto}`}
                  alt={name}
                />
              </Link>
              <br />

            </li>
          ))}
        </ul>

        <br />
        <footer className={utilStyles.footer}>
          <p>© 2024 YOSY</p>
        </footer>
      </section>


    </Layout>
  )
}

/*
from 26
        <p>
          (This is a sample website - you'll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>

from 32
        <h2 className={utilStyles.headingLg}>Blog</h2>



        <a href="https://soundcloud.com/pokaryosy">soundcloud.</a>&emsp;


              <a>{title}</a>
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>


*/