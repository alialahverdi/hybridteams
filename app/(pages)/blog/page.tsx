"use client"
import { ReactElement, useState } from "react"

// Styles
import styles from "./Blog.module.scss"
import { cs } from "app/utils/helper";


// Components
import AppLayout from "app/components/layout/AppLayout"
import { BlogCard, Breadcrumb } from "app/components/organism"

export default function Blog() {
    // ------- Constants ------- //
    const breadcrumbItems = [
        { label: "لک لک", href: "/" },
        { label: "دسته بندی وبلاگ", href: "/blog" }
    ]

    const [blogs, setBlogs] = useState(Array.from(Array(10).keys()))

    return (
        <AppLayout>
            <div className={cs(styles.breadcrumbContainer)}>
                <Breadcrumb items={breadcrumbItems} />
            </div>
            <div className={cs(styles.preview)}>
                <img src="https://picsum.photos/1250/450.jpg" />
            </div>
            <div className={cs(styles.blogsList)}>
                {blogs.map((blog, index) => (
                    <BlogCard
                        title="نام وبلاگ"
                        time="12:20"
                        description="لورم ایپسوم متن ساختگی با تولید ساختگی لورم ایپسوم متن ساختگی با تولید ساختگی"
                    />
                ))}
            </div>
        </AppLayout>
    )
}
