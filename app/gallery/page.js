import styles from './page.module.css'
import GalleryProject from '@/components/GalleryProject'

const Gallery = () => {
   const projects = [
      {
         title1: 'John',
         title2: 'Smith',
         src: 'gallery1.jpg',
      },
      {
         title1: 'Chris',
         title2: 'Stories',
         src: 'gallery2.jpg',
      },
      {
         title1: 'Honus',
         title2: 'Jason',
         src: 'gallery3.jpg',
      },
      {
         title1: 'Brother',
         title2: 'Fhiro',
         src: 'gallery4.jpg',
      },
   ]

   return (
      <div className={styles.main}>
         <div className={styles.gallery}>
            <p>Gallery Work</p>
            {projects.map((project) => {
               return <GalleryProject project={project} key={project.title1} />
            })}
         </div>
      </div>
   )
}

export default Gallery
