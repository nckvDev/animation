'use client'

import { useEffect } from 'react'
import styles from './page.module.css'
// import LocomotiveScroll from 'locomotive-scroll'
import Intro from '@/components/Intro'
import Description from '@/components/Description'
import Projects from '@/components/Projects'

const SmoothScroll = () => {
   useEffect(() => {
      ;(async () => {
         const LocomotiveScroll = (await import('locomotive-scroll')).default
         const locomotiveScroll = new LocomotiveScroll()
      })()
   }, [])
   return (
      <div className={styles.main}>
         <Intro />
         <Description />
         <Projects />
      </div>
   )
}

export default SmoothScroll
