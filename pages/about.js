import Head from 'next/head'
import Link from 'next/link'

const name = 'YOSY POKARI'

export default function Page() {
    return (
        <div className={styles.container}>
            <Head>

            </Head>
            <header className={styles.header}>
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

        </div>
    )
}