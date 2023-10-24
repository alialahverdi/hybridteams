import React, { FC, ReactNode } from "react"

// Styles
import styles from "./AuthLayout.module.scss"
import { cs } from "app/utils/helper"

interface IAuthLayout {
    children: ReactNode
}

const AuthLayout: FC<IAuthLayout> = ({
    children
}) => {
    return (
        <main className={cs(styles.container)}>
            <div className={cs(styles.backgroundForm)}>
                <div className={cs(styles.formContainer)}>
                    {children}
                </div>
            </div>
        </main>
    )
}

export default AuthLayout