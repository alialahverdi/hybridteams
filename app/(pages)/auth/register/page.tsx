"use client"

import { useState } from "react"
import Link from 'next/link'
import { useRouter } from 'next/navigation';

// Styles
import styles from "./Register.module.scss";
import { cs } from "app/utils/helper";

// Components
import { Text, Button, Input } from "app/components/atoms"
import { FormContainer } from "app/components/organism"


export default function Register() {

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
            <FormContainer title='Sign in to your account'>
                <form className={cs(styles.form)}>
                    <Input
                        inputsize="lg"
                        placeholder="Enter your username"
                        label="Username"
                    />
                    <Input
                        inputsize="lg"
                        placeholder="Enter your email"
                        label="Email"
                    />
                    <Input
                        inputsize="lg"
                        placeholder="Enter your password"
                        label="Password"
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

                    <Text className={cs(styles.registerContainer)}>
                        Already have an account? &nbsp;
                        <Link href="/auth/login">
                            <Text
                                size={16}
                                className={cs('cursor-pointer text-secondary')}
                            >
                                Login
                            </Text>
                        </Link>
                    </Text>
                </form>
            </FormContainer>
        </main>
    )
}