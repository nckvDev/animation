import styles from './page.module.css'

export const metadata = {
   title: 'Crow Zero',
   description: 'Crow',
}

export default function SmoothScrollLayout({ children }) {
   return <main className={styles.main}>{children}</main>
}
