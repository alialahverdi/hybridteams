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
        <div className={cs(styles.container)} >
            <div className={cs(styles.content)}>
                <div className={cs(styles.backgroundForm)}>
                    <div className={cs(styles.formContainer)}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthLayout