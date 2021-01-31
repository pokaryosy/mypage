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
                <a href="https://twitter.com/pokaryosy">twitter.</a>&emsp;

            </section>
                <section>
                    <body>
                        <br />
                        <p>
                            <img
                                src="/images/profile.jpg"
                                className={`${utilStyles.artistphoto}`}
                                alt={name}
                                align="right"
                            />
                        musician <br />
                        filmmaker <br />
                        model <br />
                        software engineer <br />
                            <br />
                        Tp. + F.Hr. + DJ + Vo
                        </p>

                        <p className={utilStyles.clearcase}>
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            more details.
                            <br />
                            <br />
                            <br />
                            Growing up in London, Hong Kong, Tokyo and Okinawa.
                            <br />
                            <br />
                            <br />
                                        Skills
                                        <br />
                                        Programming Languages / Environments:  JavaScript, HTML, CSS, SQL(No, My), Java, C#, C++, Python, Ruby on Rails, Processing, Max/MSP, Pure Data, MATLAB, Arduino, R, vvvv <br />
                                        Software / Hardware:  Ableton Live, Final Cut Pro, Adobe XD / Illustrator, openFrameworks, Unity, Sibelius, Serato DJ Pro, synapseWear, MobMuPlat, OpenBCI, Wekinator, Pix4Dcapture <br />
                                        Languages:  Japanese - native;  English - fluent;  Spanish - basic <br />
                            <br />
                            <br />
                                        Education <br />
                                        Keio University - B.A. (Environment and Information Studies) &emsp;2017 - <br />
                                        Major: Computing and Music <br />
                                        Research Theme: New Music Therapy, New Performance with AI <br />
                            <br />
                                        Goldsmiths, University of London - Study Abroad &emsp;2019 - 2020 <br />
                                        Major: Computing and Music (Jazz performance and composition) <br />
                                        TOBITATE! Young Ambassador Program (Japanese public-private Scholarship) <br />


                        </p>

                    </body>
                </section>
                <main>{children}</main>
            </div>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <footer className={utilStyles.footer}>
                <p>© 2021 YOSY POKARI</p>
            </footer>

        </Layout>

    )
}

/*
<a href="https://soundcloud.com/pokaryosy">soundcloud.</a>&emsp;
*/