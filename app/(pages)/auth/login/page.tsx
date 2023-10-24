"use client"

import React, { FC, useState } from "react"
import Link from 'next/link'
import { useRouter } from 'next/navigation';

// Styles
import styles from "./Login.module.scss"
import { cs } from "app/utils/helper";

// Components
import AuthLayout from "app/components/layout/AuthLayout";
import { Text, Button, Input } from "app/components/atoms";


export interface ILoginProps { }

export default function Login() {
    // ------- Constants ------- //
    const router = useRouter();

    const login = () => {
        router.push('/')
    }

    return (
        <AuthLayout>
            <Text className={cs(styles.align)} size={20}>login in to your account</Text>

            <form className={cs(styles.form)}>
                <Input
                    inputSize="lg"
                    placeholder="Enter your username"
                    label="Username"
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
                    onClick={login}
                >
                    Login
                </Button>
            </form>
        </AuthLayout>
    )
}