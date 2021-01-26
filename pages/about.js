import Head from 'next/head'
import Link from 'next/link'


const name = 'YOSY POKARI'

export default function Page({home}) {
    return (
        <div>
            <Head>

            </Head>
            <header>
                {home ? (
                    <>

                        <h1>{name}</h1>
                    </>
                ) : (
                        <>

                            <h2>
                                <Link href="/">
                                    <a>{name}</a>
                                </Link>
                            </h2>
                        </>
                    )}
            </header>

        </div>
    )
}