import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
   return (
      <main className={styles.main}>
         <h1>Hello World!</h1>
         <div className={styles.list}>
            <Link href='/smooth-scroll'>Smooth Scroll</Link>
            <Link href='/text-move'>Text Move</Link>
            <Link href='/gallery'>Gallery Project</Link>
            <Link href='/mouse-scale'>Mouse Scale</Link>
         </div>
      </main>
   )
}
