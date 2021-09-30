import Head from 'next/head'
import Link from 'next/link'
import styles from '../components/layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Layout, { siteTitle } from '../components/layout'


const name = 'YOSY'

export default function Page({ children, home }) {
    return (
        <Layout home>
            <div>
                <Head>
                    <title>about.</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"></meta>
                </Head>
                <header>

                </header>
                <section className={utilStyles.headingMd}>
                    <Link href="/about">
                        <a className={utilStyles.colorInherit}>about.</a>
                    </Link>&emsp;
                <a href="https://linkco.re/0CsC8Z6T?lang=ja">music.</a>&emsp;
                <a href="https://www.instagram.com/pokaryosy/">instagram.</a>&emsp;
                {/* <br class="sp" /> */}
                <a href="https://twitter.com/pokaryosy">twitter.</a>&emsp;
                <a href="https://suzuri.jp/YOSY">items.</a>&emsp;
                <a href="mailto:pokaryosy@gmail.com">contact.</a>&emsp;
                {/* <a href="https://github.com/pokaryosy">github.</a>&emsp; */}

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
                        artist <br />
                        model <br />
                        UI/UX designer <br />
                        software engineer <br />
                            <br />
                        Tp. + F.Hr. + DJ + Vo + Fl
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

                                        Awards
                                        <br />
                                        Keio University, Keio Light Music Society Jr. band (Bigband) <br />
                                        - Stellar Jam ~ International Jazz Orchestra Festival ~ <br />
                                        -- Unique Selection Champion and Nominee 7 (2018) <br />
                                        -- Nominee 7 (2017) <br />
                                        The 40th Kyushu Ensemble Contest 2015 Silver Award <br />
                                        The 59th Kyushu brass band competition 2014 Gold Award <br />
                                        Okinawa Junior High School 7th all-star Brass Band Principal Trumpet <br />
                            <br />
                            <br />
                                        Skills
                                        <br />
                                        Programming Languages / Environments:  JavaScript, HTML, CSS, NoSQL, MySQL, Java, C#, C++, Python, Ruby on Rails, Processing, Max/MSP, Pure Data, MATLAB, Arduino, R, vvvv <br />
                                        Software / Hardware:  Ableton Live, Final Cut Pro, Adobe XD / Illustrator, openFrameworks, Unity, Sibelius, Serato DJ Pro, synapseWear, MobMuPlat, OpenBCI, Wekinator, Pix4Dcapture <br />
                                        Languages:  Japanese - native;  English - fluent;  Spanish - basic <br />
                            <br />
                            <br />
                                        Education <br />
                                        Keio University - B.A. (Environment and Information Studies) &emsp;2017 - <br />
                                        Major: Computing and Music <br />
                                        Research Theme: Weather music (New Music, New Performance with AI) <br />
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
            <footer className={utilStyles.footer}>
                <p>© 2021 YOSY</p>
            </footer>

        </Layout>

    )
}

/*
<a href="https://soundcloud.com/pokaryosy">soundcloud.</a>&emsp;
*/