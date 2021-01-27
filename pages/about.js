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
                        <br />
                        <p>
                            <img
                                src="/images/profile.jpg"
                                className={`${utilStyles.artistphoto}`}
                                alt={name}
                                align="right"
                            />
                        musician | performer | model | software engineer <br />
                            <br />
                        Tp. + F.Hr. + DJ + Vo
                        </p>

                        <p className={utilStyles.clearcase}>
                            <br />
                            <div class="menu">
                                <input type="checkbox" id="type1"></input>
                                    <label for="type1"> more details.</label>
                                    <div class="menu-content">
                                        <p>
                                        Skills </p><br />
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
                                        
                                    </div>
                                
                            </div>
                        </p>

                    </body>
                </section>
                <main>{children}</main>
            </div>
        </Layout>

    )
}
