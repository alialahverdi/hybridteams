"use client"

// Styles
import styles from "./Blog.module.scss"
import { cs } from "app/utils/helper";


// Components
import AppLayout from "app/components/layout/AppLayout"
import { BlogCard, Breadcrumb } from "app/components/organism"
import withAuth from "app/components/layout/withAuth"

function Blog() {
    // ------- Constants ------- //
    const breadcrumbItems = [
        { label: "Home", href: "/" },
        { label: "All blogs", href: "/blog" }
    ]

    return (
        <AppLayout>
            <div className={cs(styles.breadcrumbContainer)}>
                <Breadcrumb items={breadcrumbItems} />
            </div>
            <div className={cs(styles.preview)}>
                <img src="https://picsum.photos/536/354" />
            </div>
            <div className={cs(styles.blogsList)}>
                {Array.from(Array(19).keys()).map((blog, index) => (
                    <BlogCard
                        key={index}
                        title="Title"
                        time={`${index * 2}:${index}`}
                        description="Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document"
                    />
                ))}
            </div>
        </AppLayout>
    )
}

export default withAuth(Blog)
