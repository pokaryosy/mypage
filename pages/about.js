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

                <section className={utilStyles.headingMd}>
                    <Link href="/about" className={utilStyles.colorInherit}>
                        about.
                    </Link>&emsp;
                    <a href="https://linkco.re/0CsC8Z6T?lang=ja">music.</a>&emsp;
                    <a href="https://www.instagram.com/pokaryosy/">instagram.</a>&emsp;
                    <br className="sp" />
                    <a href="https://twitter.com/pokaryosy">twitter.</a>&emsp;
                    {/* <a href="https://suzuri.jp/YOSY">items.</a>&emsp; */}
                    <a href="mailto:pokaryosy@gmail.com">contact.</a>&emsp;
                    {/* <a href="https://github.com/pokaryosy">github.</a>&emsp; */}

                </section>
                <section>
                        <br />
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
                            UI/UX designer <br />
                            software engineer <br />
                            photographer <br />
                            <br />
                            Tp. + F.Hr. + DJ + Fl + Vo
                        </p>

                        <p className={utilStyles.clearcase}>
                            <br />
                            <br />
                            <br />
                            <br />
                            more details.
                            <br />
                            <br />
                            <br />
                            <a href="https://drive.google.com/file/d/1hc9Y7NPlGTSVwMvnv4lVCPON0sRA0Gi9/view"> - cv </a>
                            <br />
                            <a href="https://drive.google.com/file/d/16FDeMqk9THN_FkUM9-VzeCtPSDf0H6Id/view"> - portfolio </a>
                            <br />
                            <a href="https://drive.google.com/file/d/1N2ffDAr4B62X9K5vt9U695kgkuRhNK6S/view"> - Google UX Design Certification </a>
                            <br />
                            <br />
                            Growing up in London, Hong Kong, Tokyo and Okinawa.
                            <br />
                            <br />
                            <br />

                            <strong>Awards</strong>
                            <br />
                            New York City Electroacoustic Music Festival 2024 (NYCEMF)<br />
                            &emsp;Accepted in the Concert Music <br />
                            &emsp;work:"Weather Music",  artist:YOSY <br />
                            New Interfaces for Musical Expression 2022 (NIME)<br />
                            &emsp;Accepted in the Music category <br />
                            &emsp;work:"Weather Music",  artist:YOSY <br />
                            Keio University, Keio Light Music Society Jr. band <br />
                            &emsp;Stellar Jam ~ International Jazz Orchestra Festival ~ <br />
                            &emsp;(2018) Unique Selection Champion and Nominee 7  <br />
                            &emsp;(2017) Nominee 7  <br />
                            Naha Hight School Brass Band <br />
                            &emsp;The 40th Kyushu Ensemble Contest (2015) Silver Award <br />
                            &emsp;The 59th Kyushu brass band competition (2014) Gold Award <br />
                            Okinawa Junior High School 7th all-star Brass Band (2011-12) <br />
                            &emsp;Principal Trumpet <br />
                            <br />
                            <br />
                            <br />
                            <strong>Skills</strong>
                            <br />
                            Programming Languages / Environments  <br />
                            JavaScript(Next.js React), HTML, CSS, PHP, jQuery, Python, SQL(No, My), Java, C#, C++, Ruby on Rails, Processing, Max/MSP, Pure Data, MATLAB, Arduino, R, vvvv, VBScript <br />
                            <br />
                            Software / Hardware <br />
                            Ableton Live Suite, Final Cut Pro, DaVinci Resolve, Adobe XD / Illustrator, Figma, openFrameworks, Unity, Sibelius, Serato DJ Pro, WordPress, Google Analytics, Google Tag Manager <br />
                            <br />
                            Languages <br />
                            Japanese - native,   English - fluent,   Spanish - basic <br />
                            <br />
                            Certification <br />
                            <a href="https://drive.google.com/file/d/1VthS1uodXOz8PHtX8q0jT29Sv1Eeg7vG/view?usp=sharing"> Foundations of User Experience (UX) Design - Google UX Design certification</a> <br />
                            <br />
                            <br />
                            <br />
                            <strong>Education</strong>
                            <br />
                            Keio University - B.A. (Environment and Information Studies) <br />
                            Apr. 2017 - Mar. 2022<br />
                            Major: Computing and Music <br />
                            Research Theme: Weather Music (New Music, New Performance with AI) <br />
                            <br />
                            Goldsmiths, University of London - Study Abroad <br />
                            Aug. 2019 - Jun. 2020 <br />
                            Major: Computing and Music (Jazz performance and composition) <br />
                            TOBITATE! Young Ambassador Program (Japanese public-private Scholarship) <br />
                            <br />
                            <br />
                            <br />
                            <strong>Experience</strong>
                            <br />
                            <a href="https://drive.google.com/file/d/16FDeMqk9THN_FkUM9-VzeCtPSDf0H6Id/view"> Freelance Engineer, Designer, Artist </a> &emsp;Apr. 2022 -<br />
                            Software Engineer / UI/UX Designer / Artist / Musician <br />
                            <br />
                            <a href="http://www.sportsweather.co.jp/"> Sports Weather Inc. </a> (Tokyo, JP - Subcontractor) &emsp;Jan. 2023 - Sep. 2024<br />
                            Lead Software Engineer <br />
                            <br />
                            <a href="https://archaes.com/"> Archaes Corp. </a> (Tokyo, JP - Subcontractor) &emsp;Oct. 2023 - Mar. 2024<br />
                            Lead Software Engineer <br />
                            <br />
                            <a href="https://zeal-as.co.jp/"> ZEAL Associate Corp. </a> (Tokyo, JP - Temporary Worker) &emsp;Oct. 2022 - May 2023<br />
                            Lead Software Engineer <br />
                            <br />
                            <a href="https://www.allesgood.jp/"> allesgood Inc. </a> (Tokyo, JP - Subcontractor) &emsp;Aug. - Sep. 2021 <br />
                            UI/UX Designer <br />
                            <br />
                            <a href="https://nsketch.com/"> N sketch Inc. </a> (Tokyo, JP - Intern) &emsp;Nov. 2020 - Aug. 2021<br />
                            UI/UX Design Engineer / Photographer <br />
                            <br />
                            <a href="https://www.jcatny.com/"> JCAT </a> (NY, USA - Intern) &emsp;Jul. - Dec. 2020 <br />
                            Web Designer / Software Engineer <br />

                        </p>

                </section>
                <main>{children}</main>
            </div>

            <br />
            <br />
            <br />
            <footer className={utilStyles.footer}>
                <p>© 2026 YOSY</p>
            </footer>

        </Layout>

    )
}

/*
<a href="https://soundcloud.com/pokaryosy">soundcloud.</a>&emsp;
*/