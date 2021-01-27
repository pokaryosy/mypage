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
                    <body className={`${utilStyles.artistphoto}`}>
                        <p>musician l performer l model | software engineer</p>
                        <p>Tp. + F.Hr. + DJ + Vo</p>
                        <img
                            src="/images/profile.jpg"
                            className={`${utilStyles.artistphoto}`}
                            alt={name}
                        />
                    </body>
                </section>
                <main>{children}</main>
            </div>
        </Layout>

    )
}
