import Layout from '../../components/layout'
import Head from 'next/head'
import { getAllPostIds, getPostData } from '../lib/posts'

export default function Post({ postData }){
    return(
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            {postData.title}
            <br />
            {postData.id}
            <br />
            {postData.date}
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = await getAllPostIds();
    console.log(paths, "paths")
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    console.log(params)
    const postData = await getPostData(params.id);

    return {
        props: {
            postData
        }
    }
}






