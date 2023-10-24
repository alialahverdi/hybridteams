import React, { FC, ReactNode } from "react"

// Styles
import styles from "./FormContainer.module.scss"
import { cs } from "app/utils/helper"

// Components
import { Text, Button, Input } from "app/components/atoms"

interface IForm {
    title: string
    children: ReactNode
}

const FormContainer: FC<IForm> = ({ title, children }) => {
    return (
        <div className={cs(styles.formContainer)}>
            <Text className={cs(styles.align)} size={20}>{title}</Text>
            {children}
        </div>
    )
}

export default FormContainer