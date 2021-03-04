import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostDataFirst } from './lib/posts'

export default function Home({ allPostsData }) {
  console.log(allPostsData)
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <nav>
        <ul>
            <li><Link href="/"><a>Home</a></Link></li>
            <li><Link href="/posts/first-post"><a>First post</a></Link></li>
        </ul>
      </nav>
      
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({id, date, title}) => {
            return(
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                
                <br />
                {id}
                <br />
                {date}
              </li>
            )
          })}
        </ul>
      </section>
      <section className={utilStyles.headingMd}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
    const allPostsData = await getSortedPostDataFirst()

    return {
      props: {
        allPostsData
      }
    }
}
