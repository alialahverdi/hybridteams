"use client"

import { useState } from "react"
import Link from 'next/link'
import { useRouter } from 'next/navigation';

// Styles
import styles from "./AddPost.module.scss";
import { cs } from "app/utils/helper";

// Components
import { Button, Input, Textarea } from "app/components/atoms";
import { FormContainer } from "app/components/organism";
import { useForm } from "react-hook-form";
import AppLayout from "app/components/layout/AppLayout"


export default function AddPost() {

    // ------- Constants ------- //
    const router = useRouter();
    const { register, handleSubmit } = useForm();

    // ------- Logic or Functions ------- //

    const onSubmit = () => {
        router.push('/blog')
    }

    return (
        <AppLayout>
            <div className={cs(styles.container)}>
                <FormContainer title='Create new post'>
                    <form
                        className={cs(styles.form)}
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <Input
                            id="title"
                            register={register}
                            inputsize="lg"
                            placeholder="Enter the title"
                            label="Title"
                        />
                        <Textarea
                            id="Content"
                            register={register}
                            inputsize="lg"
                            placeholder="Enter your password"
                            label="Content"
                        />
                        <Button
                            size="lg"
                            buttonstyle="secondary"
                            className={cs(styles.btn)}
                            type="submit"
                        >
                            Confirm
                        </Button>
                    </form>
                </FormContainer>
            </div>
        </AppLayout>
    )
}