"use client"

import React, { FC, useState } from "react"
import { useRouter } from 'next/navigation';

// Styles
import styles from "./Login.module.scss"
import { cs } from "app/utils/helper";

// Components
import { Button, Input } from "app/components/atoms";
import { FormContainer } from "app/components/organism"


export interface ILoginProps { }

export default function Login() {
    // ------- Constants ------- //
    const router = useRouter();

    const login = () => {
        router.push('/')
    }

    return (
        <main className={cs(styles.container)}>
            <FormContainer title='Login in to your account'>
                <form className={cs(styles.form)}>
                    <Input
                        inputsize="lg"
                        placeholder="Enter your username"
                        label="Username"
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
                        onClick={login}
                    >
                        Login
                    </Button>
                </form>
            </FormContainer>

        </main>
    )
}