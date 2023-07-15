/* eslint-disable @next/next/no-img-element */
import styles from './style.module.css'

const GalleryProject = ({ project }) => {
   const { title1, title2, src } = project

   return (
      <div className={styles.project}>
         <p>{title1}</p>
         <div className={styles.imgContainer}>
            <img src={`/images/${src}`} alt='medias gallery' />
         </div>
         <p>{title2}</p>
      </div>
   )
}

export default GalleryProject
