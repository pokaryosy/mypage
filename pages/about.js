import Head from 'next/head'
import Link from 'next/link'
import styles from '../components/layout.module.css'
import utilStyles from '../styles/utils.module.css'


const name = 'YOSY POKARI'

export default function Page({ children, home }) {
    return (
        <div>
            <Head>

            </Head>
            <header>
                {home ? (
                    <>

                        <h3 className={utilStyles.heading2Xl}>{name}</h3>
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
            <main>{children}</main>
        </div>
    )
}