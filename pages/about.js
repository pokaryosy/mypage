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
                    <title>about.</title>
                </Head>
                <header>

                </header>
                <section className={utilStyles.headingMd}>
                    <Link href="/about">
                        <a className={utilStyles.colorInherit}>about.</a>
                    </Link>&emsp;
                <a href="https://www.instagram.com/pokaryosy/">instagram.</a>&emsp;
            </section>
                <section>
                    <body>
                        <p>musician | performer | model | software engineer
                        Tp. + F.Hr. + DJ + Vo
                        <img
                            src="/images/profile.jpg"
                            className={`${utilStyles.artistphoto}`}
                            alt={name}
                            align="right"
                        /></p>
                    </body>
                </section>
                <main>{children}</main>
            </div>
        </Layout>

    )
}
