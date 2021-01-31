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

const name = 'YOSY POKARI'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <Link href="/about">
          <a className={utilStyles.colorInherit}>about.</a>
        </Link>&emsp;
          <a href="https://www.instagram.com/pokaryosy/">instagram.</a>&emsp;
          <a href="https://twitter.com/pokaryosy">twitter.</a>&emsp;

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
          <p>© 2021 YOSY POKARI</p>
        </footer>
      </section>


    </Layout>
  )
}

/*
from 26
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
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