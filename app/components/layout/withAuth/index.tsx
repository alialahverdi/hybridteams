"use client"

import { useLayoutEffect, useState } from "react"
import { useRouter } from 'next/navigation';

export default function withAuth(Component: any) {
    return function WithAuth(props: any) {
        const router = useRouter();

        const [isAuth, setIsAuth] = useState(false)

        const checkAuth = async () => {
            const value = await localStorage.getItem('isAuth');
            if (value !== null && value === 'true') {
                setIsAuth(true)
                return
            }
            router.push('/auth/login')
        }

        useLayoutEffect(() => {
            checkAuth()
        }, [])

        if (!isAuth) {
            return null
        }

        return <Component {...props} />
    }
}