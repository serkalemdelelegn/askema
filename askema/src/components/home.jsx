import React from 'react'
import Header from './header'
import './home.css'
import Upper from './body/upper'
import About from './body/about'
import Cleints from './body/cleints'
import Comment from './blog/comment'
import WhatWeDo from './product/product'

export default function Home() {


    return (
      <div className='home'>
      
        <hr />
        <Upper/>
        <hr />
        <About/>

        <WhatWeDo/>

        <Cleints/>
        <hr />
        
        <Comment/>
        {/* <div className='bg-white p-3' ></div> */}
      </div>
      
    )
  
}
