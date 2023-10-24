"use client"

import { useState } from "react"
import Link from 'next/link'
import { useRouter } from 'next/navigation';

// Styles
import styles from "./AddPost.module.scss";
import { cs } from "app/utils/helper";

// Components
import { Text, Button, Input, Textarea } from "app/components/atoms"
import { FormContainer } from "app/components/organism"


export default function AddPost() {

    // ------- Constants ------- //
    const router = useRouter();

    // ------- Logic or Functions ------- //
    const onSendConfirmationCode = () => {
        // setStage("confirmPassword")
    }

    const onConfirm = () => {
        router.push('/')
    }

    return (
        <main className={cs(styles.container)}>
            <FormContainer title='Create new post'>
                <form className={cs(styles.form)}>
                    <Input
                        inputSize="lg"
                        placeholder="Enter the title"
                        label="Title"
                    />
                    <Textarea
                        inputSize="lg"
                        placeholder="Enter your password"
                        label="Content"
                    />
                    <Button
                        size="lg"
                        block
                        buttonStyle="secondary"
                        className={cs(styles.btn)}
                        onClick={onSendConfirmationCode}
                    >
                        Confirm
                    </Button>
                </form>
            </FormContainer>
        </main>
    )
}