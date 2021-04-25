import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import FooterComponent from './footer'

const name = 'Your Name'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children, home }) {
  const routerLinks = [
    {
      name: 'Home',
      link: '/'
    },{
      name: 'Post 1',
      link: '/posts/first-post'
    },{
      name: 'Users',
      link: '/users/user-page'
    },{
      name: 'Shop',
      link: '/shop/shop-page'
    }
  ];
  return (
    <div >
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header >
            <nav className={styles.headerMenu}>
                <ul className={`${styles.header} ${styles.container}`}>
                  {routerLinks.map((linkData, id) => {
                    return(
                      <li key={id}><Link href={linkData.link}><a>{linkData.name}</a></Link></li>
                    )
                  })}
                </ul>
            </nav>
        {home ? (
          <div className={`${styles.container} ${styles.row}`}>
            <img
              src="/images/default_avatar.jpg"
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </div>
        ) : (
          <div className={`${styles.container} ${styles.row}`}>
            <Link href="/">
              <a>
                <img
                  src="/images/default_avatar.jpg"
                  className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </div>
        )}
      </header>
      <main className={styles.container}>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
      <FooterComponent />
    </div>
  )
}
