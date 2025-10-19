import React from 'react'
import cx from 'classnames'
import {NavLink, Link} from 'react-router-dom'
import PicDeMoi from '../assets/sutton.JPG'


import Panel from './Panel'

const About = () => {
  // const activeClass = 'text-blue-500 font-bold decoration-solid'
  // const pendingClass = 'text-red-500'

  return (
    <div id='about' className='w-[90%]  flex flex-col py-[1rem]'>
        <div className="w-[100%] pb-[1rem] text-[black] ">
            <img src={PicDeMoi} alt="PicDeMoi" className='rounded-sm shadow-md'/>
        </div>
      <div id='enchante' className='text-[3rem] text-[#BF092F]'>
        Enchanté
      </div>
      
      <div id='body' className='text-[1rem] w-[100%] flex flex-row text-[black] pr-[2%] text-justify'>
            Je m'appelle Sutton, une étudiante en informatique à l'Université de Californie, Berkeley. J'adore créer des applications web dynamiques et interactives qui offrent une expérience utilisateur exceptionnelle. Avec mes compétences en développement front-end et back-end, je m'efforce de concevoir des solutions innovantes qui répondent aux besoins des utilisateurs. En dehors du codage, j'aime explorer la nature, lire des romans de science-fiction et expérimenter de nouvelles recettes en cuisine. N'hésitez pas à parcourir mes projets et à me contacter pour toute collaboration ou opportunité passionnante!
      </div>

        
    </div>
  )
}

export default About
