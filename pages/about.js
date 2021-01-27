import Head from 'next/head'
import Link from 'next/link'
import styles from '../components/layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Layout, { siteTitle } from '../components/layout'


const name = 'YOSY POKARI'

export default function Page({ children, home }) {
    return (
        <Layout home>
        <div>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <header>
                {home ? (
                    <>

                        <h1 className={utilStyles.heading2Xl}>{name}</h1>
                    </>
                ) : (
                        <>

                            <h2 className={utilStyles.headingLg}>
                                <Link href="/">
                                    <a className={utilStyles.colorInherit}>{name}</a>
                                </Link>
                            </h2>
                        </>
                    )}
            </header>
            <section className={utilStyles.headingMd}>
                <Link href="/about">
                    <a className={utilStyles.colorInherit}>about.</a>
                </Link>&emsp;
                <a href="https://www.instagram.com/pokaryosy/">instagram.</a>&emsp;
            </section>
            <main>{children}</main>
        </div>
        </Layout>
    )
}