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

        <div id="nav" className='flex flex-col w-[90%] text-[100%] text-[black] flex-wrap underline decoration-dotted items-between pr-px-[2%]' >
            {/* <hr className='w-[100%] border-dotted border-[#8EB486]'/> */}
            <div id="home-buttons" className='flex flex-row  flex-wrap justify-between '>
                <Button>
                    N°1 moi
                </Button>
                <Button>
                    N°2 projets
                </Button>
                <Button>
                    N°3 revenu
                </Button>
                <Button>
                    N°4 lorum
                </Button>
                <Button>
                    N°5 ipsum
                </Button>
                <Button>
                    N°6 trouver-moi
                </Button>
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