"use client"

import AppLayout from "app/components/layout/AppLayout"
import withAuth from "app/components/layout/withAuth"

// Styles
import styles from "./Home.module.scss"
import { cs } from "app/utils/helper"

function Home() {
  return (
    <AppLayout>
      <div className={cs(styles.heroSlider)}>
        <h1 className={cs(styles.title)}>
          Hi Dear!
        </h1>
        <h6 className={styles.subtitle}>You are logged in to Hybridteams project</h6>
      </div>
    </AppLayout>
  )
}

export default withAuth(Home)
