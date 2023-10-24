"use client"
import { ReactElement, useState } from "react"

// Styles
import styles from "./Blog.module.scss"
import { cs } from "app/utils/helper";


// Components
import AppLayout from "app/components/layout/AppLayout"
import { BlogCard, Breadcrumb } from "app/components/organism"
import { Text } from "app/components/atoms"

export default function Blog() {
    // ------- Constants ------- //
    const breadcrumbItems = [
        { label: "Home", href: "/" },
        { label: "All blogs", href: "/blog" }
    ]

    const [blogs, setBlogs] = useState(Array.from(Array(10).keys()))

    return (
        <AppLayout>
            <div className={cs(styles.breadcrumbContainer)}>
                <Breadcrumb items={breadcrumbItems} />
                <Text>dawd</Text>
            </div>
            <div className={cs(styles.preview)}>
                <img src="https://picsum.photos/536/354" />
            </div>
            <div className={cs(styles.blogsList)}>
                {blogs.map((blog, index) => (
                    <BlogCard
                        key={index}
                        title="نام وبلاگ"
                        time="12:20"
                        description="لورم ایپسوم متن ساختگی با تولید ساختگی لورم ایپسوم متن ساختگی با تولید ساختگی"
                    />
                ))}
            </div>
        </AppLayout>
    )
}
