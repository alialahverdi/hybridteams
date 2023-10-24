import React, { FC, useEffect, useState } from "react"

// Styles
import styles from "./BlogCard.module.scss"
import { cs } from "app/utils/helper"

// Components
import { Text } from "app/components/atoms"


interface IBlogCard {
    title: string
    time?: string
    description: string
}

const BlogCard: FC<IBlogCard> = ({
    title,
    time,
    description,
}) => {

    return (
        <div className={cs(styles.container)}>
            <img src="https://picsum.photos/536/354" alt="" />
            <div className={cs(styles.titleAndtime)}>
                <Text size={17}>{title}</Text>
                <Text size={17}>{time}</Text>
            </div>
            <Text size={11} className={cs(styles.description)}>{description}</Text>
        </div>
    )
}

export default BlogCard