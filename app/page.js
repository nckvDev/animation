import Link from 'next/link'

export default function Home() {
   return (
      <main>
         <h1>Hello World!</h1>
         <Link href='/smooth-scroll'>Smooth Scroll</Link>
         <Link href='/text-move'>Text Move</Link>
      </main>
   )
}
