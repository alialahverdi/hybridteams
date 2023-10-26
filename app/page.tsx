import Image from 'next/image'
import AppLayout from 'app/components/layout/AppLayout'

// Styles
import styles from "./Home.module.scss"
import { cs } from "app/utils/helper"

export default function Home() {
  return (
    <AppLayout>
      <div className={cs(styles.heroSlider)}>
        <h1 className={cs(styles.title)}>
          Hi Ali!
        </h1>
        <h6 className={styles.subtitle}>You are logged in to Hybridteams project</h6>
      </div>
    </AppLayout>
  )
}
