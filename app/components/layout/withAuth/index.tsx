"use client"

import { useEffect, useLayoutEffect } from "react"
import { useRouter } from 'next/navigation';

const isAuth = false

export default function withAuth(Component: any) {
    return function WithAuth(props: any) {

        const router = useRouter();
        useEffect(() => {
            if (!isAuth) {
                router.push('/auth/login')
            }
        }, [])

        if (!isAuth) {
            return null
        }

        return <Component {...props} />
    }
}