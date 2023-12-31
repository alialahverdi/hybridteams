import React, { FC, ReactNode } from "react"

// Styles
import styles from "./AppLayout.module.scss"
import { cs } from "app/utils/helper"

// Components
import Header from "./Header"

interface IAppLayout {
    children: ReactNode
}

const AppLayout: FC<IAppLayout> = ({
    children
}) => {
    return (
        <main className={cs(styles.container)}>
            <Header />
            <div className={cs(styles.childrenContainer)}>
                {children}
            </div>
        </main>
    )
}

export default AppLayout