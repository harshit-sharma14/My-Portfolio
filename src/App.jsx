import { useState } from 'react'
import {Navbar} from './Navbar'
import { Hero } from './Hero'
import { Tech } from './Tech'
import { Projects } from './Projects'
import { Contact } from './Contact'
import { Card } from './Card'
import { Deco } from './Deco'
import { Navbar1 } from './Navbar1'
function App() {

  return (
     
    <div className='overflow-hidden text-stone-300 antialiased'>
      <div className='fixed inset-0 -z-10'>
        <div className='relative h-full w-full '>
        <div class="relative h-full w-full bg-slate-950"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div></div>
        </div>
      </div>
    <div className='container  mx-auto px-8'>
      <Navbar/>
      <Hero/>
      <Tech/>
      <Projects/>
      <Contact/>
      {/* <Card/> */}
    </div>
    </div>
    
  )
}

export default App
