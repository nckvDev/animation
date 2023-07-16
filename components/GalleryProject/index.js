/* eslint-disable @next/next/no-img-element */
'use client'

import styles from './style.module.css'
import { useState } from 'react'
import { motion } from 'framer-motion'

const anim = {
   initial: { width: 0 },
   open: { width: 'auto', transition: { duration: 0.4, ease: [0.23, 1, 0.23, 1] } },
   closed: { width: 0 },
}

const GalleryProject = ({ project }) => {
   const [isActive, setIsActive] = useState(false)
   const { title1, title2, src } = project

   return (
      <div
         onMouseEnter={() => {
            setIsActive(true)
         }}
         onMouseLeave={() => {
            setIsActive(false)
         }}
         className={styles.project}
      >
         <p>{title1}</p>
         <motion.div
            variants={anim}
            animate={isActive ? 'open' : 'closed'}
            className={styles.imgContainer}
         >
            <img src={`/images/${src}`} alt='medias gallery' />
         </motion.div>
         <p>{title2}</p>
      </div>
   )
}

export default GalleryProject
