"use client"

import React, { FC } from "react"
import Link from "next/link"

// Styles
import styles from "./Header.module.scss"
import { cs } from "app/utils/helper/index"


// Hooks
import { useIsTopOfPage } from 'app/hooks/useIstopOfPage'

const Header: FC = () => {
    const isTopOfPage = useIsTopOfPage()

    return (
        <header className={cs(styles.container)}>
            <div className={cs(styles.header, !isTopOfPage ? styles.scrolled : '')}>
                <div className={cs(styles.rightContainer)}>
                    <nav>
                        <ul className={cs(styles.ulLinks)}>
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <Link href="/addPost">Add Post</Link>
                            </li>
                            <li>
                                <Link href="/blog">Blog</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                {/* <img src={LogoIcno} alt='Logo' /> */}
            </div>
        </header>
    )
}

export default Header