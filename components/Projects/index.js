'use client'

import { useLayoutEffect, useState, useRef } from 'react'
import styles from './style.module.css'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const projects = [
   {
      title: 'Hello World',
      src: 'project1.jpg',
   },
   {
      title: 'amet consectetur adipisicing.',
      src: 'project2.jpg',
   },
   {
      title: 'Miscanti Lake',
      src: 'project3.jpg',
   },
   {
      title: 'Miniques Lagoons',
      src: 'project4.jpg',
   },
]

const Projects = () => {
   const [selectedProject, setSelectedProject] = useState(0)
   const container = useRef(null)
   const imageContainer = useRef(null)

   useLayoutEffect(() => {
      gsap.registerPlugin(ScrollTrigger)
      ScrollTrigger.create({
         trigger: imageContainer.current,
         pin: true,
         start: 'top-=100px',
         end: document.body.offsetHeight - window.innerHeight - 50,
      })
   }, [])

   return (
      <div ref={container} className={styles.projects}>
         <div className={styles.projectDescription}>
            <div ref={imageContainer} className={styles.imageContainer}>
               <Image
                  src={`/images/${projects[selectedProject].src}`}
                  alt='project image'
                  fill={true}
                  priority={true}
               />
            </div>
            <div className={styles.column}>
               <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, expedita. Itaque,
                  deleniti sapiente!
               </p>
            </div>
            <div className={styles.column}>
               <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae nisi distinctio
                  necessitatibus recusandae, quidem consequuntur nam dolorem facere sunt eaque!
               </p>
            </div>
         </div>

         <div className={styles.projectList}>
            {projects.map((project, index) => {
               return (
                  <div
                     key={index}
                     onMouseOver={() => {
                        setSelectedProject(index)
                     }}
                     className={styles.projectEl}
                  >
                     <h2>{project.title}</h2>
                  </div>
               )
            })}
         </div>
      </div>
   )
}

export default Projects
