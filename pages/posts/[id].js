
import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'
import Link from 'next/link'


export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}


export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export default function Post({ postData }) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"></meta>
            </Head>
            <section className={utilStyles.headingMd}>
                <Link href="../about">
                    <a className={utilStyles.colorInherit}>about.</a>
                </Link>&emsp;
                <a href="https://linkco.re/0CsC8Z6T?lang=ja">music.</a>&emsp;
                <a href="https://www.instagram.com/pokaryosy/">instagram.</a>&emsp;
                <br class="sp" />
                <a href="https://twitter.com/pokaryosy">twitter.</a>&emsp;
                <a href="https://suzuri.jp/YOSY">items.</a>&emsp;
                <a href="mailto:pokaryosy@gmail.com">contact.</a>&emsp;
                {/* <a href="https://github.com/pokaryosy">github.</a>&emsp; */}
                
            </section>
            <article>
                <br />
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.date} />
                </div>
                
                    <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
                
            </article>
        </Layout>
    )
}

/*
<a href="https://soundcloud.com/pokaryosy">soundcloud.</a>&emsp;
*/
