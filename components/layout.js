import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'YOSY'
export const siteTitle = 'YOSY'


export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="musician | artist | model | UI/UX design engineer, Tp. + F.Hr. + DJ + Vo + Fl"
        />
        <meta
          property="og:image"
          content="/images/profile.jpg"
          // content={`https://og-image.now.sh/${encodeURI(
          //   siteTitle
          // )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@pokaryosy" />
        {/* <meta property="og:image" content="https://www.pokaryosy.com/images/minori2020/minori2020_1.jpg" /> */}
        <meta property="fb:app_id" content="486043602775575" />
        
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Link href="/">
              <h1 className={utilStyles.heading2Xl}>{name}</h1>
            </Link>
          </>
        ) : (
            <>
              <Link href="/">
                <h2 className={utilStyles.heading2Xl}>{name}</h2>
              </Link>
            </>
            
          )}
      </header>
      <main>
        {children}
      </main>

    </div>
  )
}

/*
from 40
            <img
              src="/images/profile.jpg"
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
              alt={name}
            />

from 45
              <Link href="/">
                <a>
                  <img
                    src="/images/profile.jpg"
                    className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                    alt={name}
                  />
                </a>
              </Link>

from 55
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}


*/
