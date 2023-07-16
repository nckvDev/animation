import Double from '@/components/Double'
import styles from './page.module.scss'
import { projects } from './data'

export default function MouseScale() {
   return (
      <div className={styles.main}>
         <h1>
            We use design and technology to create brands and products that perform, delight, and
            scale.
         </h1>
         <div className={styles.gallery}>
            <Double projects={[projects[0], projects[1]]} />
            <Double projects={[projects[2], projects[3]]} reversed={true} />
         </div>
      </div>
   )
}
