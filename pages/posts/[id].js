
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
            </Head>
            <section className={utilStyles.headingMd}>
                <Link href="../about">
                    <a className={utilStyles.colorInherit}>about.</a>
                </Link>&emsp;
                <a href="https://www.instagram.com/pokaryosy/">instagram.</a>&emsp;
                <a href="https://twitter.com/pokaryosy">twitter.</a>&emsp;
                <a href="https://www.youtube.com/channel/UCFZn1q2yvksOER-RQdgSLhA">yoshika.</a>&emsp;
            </section>
            <article>
            <br />
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.date} />
                </div>
                <div className={utilStyles.video}>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
                </div>
            </article>
        </Layout>
    )
}

/*

*/
