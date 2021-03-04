import Link from "next/link"
import Head from "next/head"
import Layout from '../../components/layout'

export default function FirstPost() {
    return(
        <Layout>
            <Head>
                <title>Single post</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
             <nav>
                <ul>
                    <li><Link href="/"><a>Home</a></Link></li>
                    <li><Link href="/posts/first-post"><a>Post 1</a></Link></li>
                </ul>
            </nav>
            <main>
                <h1>First Post</h1>
            </main>
        </Layout>
    ) 
  }
  