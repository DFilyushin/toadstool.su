import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = '[DFilyushin]'
export const siteTitle = 'Developer Filyushin Dmitriy'

export default function Layout({children, home}) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.png"/>
                <meta property="og:title" content="Разработчик Филюшин Дмитрий" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://toadstool.su" />
                <meta property="og:image" content="/images/me_icon_328x328.png" />
                <meta property="og:locale" content="ru_RU" />
                <meta property="og:description" content="Разработчик настольных и веб-приложений Дмитрий Филюшин. Toadstool.su" />
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        <img
                            src="/images/profile.jpg"
                            className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
                            alt={name}
                        />
                        <h1 className={utilStyles.heading2Xl}>{name}</h1>
                    </>
                ) : (
                    <>
                        <Link href="/">
                            <a>
                                <img
                                    src="/images/profile.jpg"
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
                    </>
                )}
            </header>
            <div className="container" data-aos="fade-up">
                <main>{children}</main>
                {!home && (
                    <div className={styles.backToHome}>
                        <Link href="/">
                            <a>← На главную</a>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}
