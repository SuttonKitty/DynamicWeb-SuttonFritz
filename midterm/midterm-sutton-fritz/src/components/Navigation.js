import React from 'react'
import cx from 'classnames'
import {NavLink, Link} from 'react-router-dom'

import PicDeMoi from '../assets/moi.png'

import Name from '../components/Logo'
import Panel from '../components/Panel'
import About from '../components/About'
import Button from '../components/Button'

const Navigation = () => {
  return (

        <div id="nav" className='flex  w-[90%] text-[100%] text-[black] flex-wrap underline decoration-dotted pr-px-[5rem]  ' >
            {/* <hr className='w-[100%] border-dotted border-[#8EB486]'/> */}
            <div id="home-buttons" className='flex flex-row gap-[2rem] flex-wrap '>
                <a href="#enchante" className='my-1  p-1 hover:bg-[black] hover:text-[#FAF8F1] flex items-center  font-semibold focus:outline focus:outline-[black]'>
                    N°1 enchanté
                </a>
                <a href="#projets" className='my-1  p-1 hover:bg-[black] hover:text-[#FAF8F1] flex items-center  font-semibold focus:outline focus:outline-[black]'>
                    N°2 projets
                </a>
                <a href="#trouver-moi" className='my-1  p-1 hover:bg-[black] hover:text-[#FAF8F1] flex items-center  font-semibold focus:outline focus:outline-[black]'>
                    N°3 trouver-moi
                </a>
            </div>
            {/* <div id="home-buttons" className='flex flex-col   items-between '>
                <Button>
                    N°3 lorum
                </Button>
                <Button>
                    N°4 ipsum
                </Button>
            </div>
            <div id="home-buttons" className='flex flex-col  items-between'>
                <Button>
                    N°5 revenu
                </Button>
                <Button>
                    N°6 projets
                </Button>
            </div> */}
            
            
            
            {/* <hr className='w-[100%] border-dotted border-[#8EB486]'/> */}
            
            
            {/* <div class="home-buttons">
                <Button>
                    + desPROJECTS
                </Button>
            </div>
            <div class="home-buttons">
                <Button>
                    + TROUVER-MOI
                </Button>
            </div>
        </div>

        <div className='flex flex-col flex-wrap items-between' >
            <div class="home-buttons">
                <Button>
                    + MOI
                </Button>
            </div>
            <div class="home-buttons">
                <Button>
                    + desPROJECTS
                </Button>
            </div>
            <div class="home-buttons">
                <Button>
                    + TROUVER-MOI
                </Button>
            </div>
        </div>

        <div className='flex flex-col flex-wrap items-between' >
            <div class="home-buttons">
                <Button>
                    + MOI
                </Button>
            </div>
            <div class="home-buttons">
                <Button>
                    + desPROJECTS
                </Button>
            </div>
            <div class="home-buttons">
                <Button>
                    + TROUVER-MOI
                </Button>
            </div> */}
        </div>
        
        

  )
}

export default Navigation