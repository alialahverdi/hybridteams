"use client"

import React, { FC, useState } from "react"
import Link from 'next/link'
import { useRouter } from 'next/navigation';

// Styles
import styles from "./Login.module.scss"
import { cs } from "app/utils/helper";

// Components
import { Button, Input, Text } from "app/components/atoms";
import { FormContainer } from "app/components/organism";
import { useForm } from "react-hook-form";

// API
import api from 'app/services/axiosInstance'


export interface ILoginProps { }

export default function Login() {
    // ------- Constants ------- //
    const router = useRouter();
    const { register, handleSubmit } = useForm();

    const onSubmit = async (fields: any) => {
        await localStorage.setItem('isAuth', 'true')
        router.push('/')
    }

    return (
        <main className={cs(styles.container)}>
            <FormContainer title='Login in to your account'>
                <form
                    className={cs(styles.form)}
                    onSubmit={handleSubmit(onSubmit)}
                >
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
                        block
                        buttonstyle="secondary"
                        className={cs(styles.btn)}
                        type="submit"
                    >
                        Login
                    </Button>

                    <Text className={cs(styles.loginContainer)}>
                        Dont have an account? &nbsp;
                        <Link href="/auth/register">
                            <Text
                                size={16}
                                className={cs('cursor-pointer text-secondary')}
                            >
                                Register
                            </Text>
                        </Link>
                    </Text>
                </form>
            </FormContainer>
        </main>
    )
}