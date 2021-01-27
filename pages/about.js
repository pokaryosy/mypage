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
               
                <main>{children}</main>
            </div>
        </Layout>
    )
}