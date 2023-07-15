'use client'

import Image from 'next/image'
import styles from './page.module.css'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const TextMove = () => {
   const firstText = useRef(null)
   const secondText = useRef(null)
   const slider = useRef(null)

   let xPercent = 0
   let direction = -1

   useEffect(() => {
      gsap.set(secondText.current, { left: secondText.current.getBoundingClientRect().width })
      requestAnimationFrame(animate)
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])

   useEffect(() => {
      gsap.registerPlugin(ScrollTrigger)
      gsap.to(slider.current, {
         scrollTrigger: {
            trigger: document.documentElement,
            scrub: 0.5,
            start: 0,
            end: window.innerHeight,
            // onUpdate: (e) => (direction = e.direction * -1),
         },
         x: '-500px',
      })
      requestAnimationFrame(animate)
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])

   const animate = () => {
      if (xPercent < -100) {
         xPercent = 0
      } else if (xPercent > 0) {
         xPercent = -100
      }
      gsap.set(firstText.current, { xPercent: xPercent })
      gsap.set(secondText.current, { xPercent: xPercent })
      requestAnimationFrame(animate)
      xPercent += 0.1 * direction
   }

   return (
      <div className={styles.main}>
         <Image src='/images/background-cat.jpg' fill={true} alt='background' />
         <div className={styles.sliderContainer}>
            <div ref={slider} className={styles.slider}>
               <p ref={firstText}>nckv Developer -</p>
               <p ref={secondText}>nckv Developer -</p>
            </div>
         </div>
      </div>
   )
}

export default TextMove
