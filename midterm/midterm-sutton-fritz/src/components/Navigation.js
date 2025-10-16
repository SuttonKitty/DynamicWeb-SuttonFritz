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

        <div id="nav" className='flex flex-row w-[90%] text-[1rem] text-[black] flex-wrap justify-between ' >
            {/* <hr className='w-[100%] border-dotted border-[#8EB486]'/> */}
            <div id="home-buttons" className='flex flex-col  flex-wrap items-between '>
                <Button>
                    N°1: MOI
                </Button>
                <Button>
                    N°2: mesPROJETS
                </Button>
            </div>
            <div id="home-buttons" className='flex flex-col  flex-wrap items-between '>
                <Button>
                    N°3: mesRECITATIONS
                </Button>
                <Button>
                    N°4: mesPUBLICATIONS
                </Button>
            </div>
            <div id="home-buttons" className='flex flex-col  flex-wrap items-between'>
                <Button>
                    N°5: maREVENU
                </Button>
                <Button>
                    N°6: mesPROJETS
                </Button>
            </div>
            <div id="home-buttons" className='flex flex-col  flex-wrap items-between'>
                <Button>
                    N°7: mesECRITS
                </Button>
                <Button>
                    N°8: mesPOSTS
                </Button>
            </div>
            
            
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