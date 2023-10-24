"use client"

import { useState } from "react"
import Link from 'next/link'
import { useRouter } from 'next/navigation';

// Styles
import styles from "./Register.module.scss";
import { cs } from "app/utils/helper";

// Components
import AuthLayout from "app/components/layout/AuthLayout";
import { Text, Button, Input } from "app/components/atoms"


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
        <AuthLayout>
            <Text className={cs(styles.align)} size={20}>Sign in to your account</Text>
            <form className={cs(styles.form)}>
                <Input
                    inputSize="lg"
                    placeholder="Enter your username"
                    label="Username"
                />
                <Input
                    inputSize="lg"
                    placeholder="Enter your email"
                    label="Email"
                />
                <Input
                    inputSize="lg"
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
        </AuthLayout>
    )
}