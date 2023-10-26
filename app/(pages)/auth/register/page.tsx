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
import { useForm } from "react-hook-form"

// Type Cheking
interface Inputs {
    username: string
    email: string
    Password: string
}

export default function Register() {

    // ------- Constants ------- //
    const router = useRouter();
    const { register, handleSubmit } = useForm();

    // ------- Logic or Functions ------- //
    const onSubmit = (fields: any) => {
        router.push('/auth/login')
    }

    return (
        <main className={cs(styles.container)}>
            <FormContainer title='Sign in to your account'>
                <form
                    className={cs(styles.form)}
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <Input
                        id="username"
                        register={register}
                        inputsize="lg"
                        placeholder="Enter your username"
                        label="Username"
                    />
                    <Input
                        id="email"
                        register={register}
                        inputsize="lg"
                        placeholder="Enter your email"
                        label="Email"
                    />
                    <Input
                        id="password"
                        register={register}
                        inputsize="lg"
                        placeholder="Enter your password"
                        label="Password"
                    />
                    <Button
                        size="lg"
                        buttonstyle="secondary"
                        className={cs(styles.btn)}
                        type="submit"
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