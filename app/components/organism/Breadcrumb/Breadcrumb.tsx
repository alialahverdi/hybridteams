import React, { FC } from 'react'
import Link from 'next/link';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';


// Styles
import styles from "./Breadcrumb.module.scss"
import { cs } from "app/utils/helper";

export interface BreadcrumbInterface {
    items: BreadcrumbType[];
    classname?: string
}

export type BreadcrumbType = {
    label: string,
    href?: string,
};

const Breadcrumb: FC<BreadcrumbInterface> = ({ items, classname }) => {

    return (
        <div className={cs(styles.breadcrumb_container, classname ? classname : '')}>
            {items.map((item, index) => (
                item.href
                    ? <>
                        <div className={styles.list_item}>
                            <Link key={index} href={item.href}>{item.label}</Link>
                        </div>
                        <MdOutlineKeyboardArrowLeft className={styles.seperator} />
                    </>
                    : <div className={styles.list_item} key={index}><p>{item.label}</p></div>
            ))}
        </div>
    )

}

export default Breadcrumb;
