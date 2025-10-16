import React from 'react'
import cx from 'classnames'
import {NavLink, Link} from 'react-router-dom'

import PicDeMoi from '../assets/moi.png'

import Name from '../components/Logo'
import Panel from '../components/Panel'
import About from '../components/About'
import Button from '../components/Button'

const LandingPage = () => {
  return (
    <div class="main" className='flex flex-row h-auto w-[60vw] justify-start items-start flex-wrap content-between justify-between space-3'>
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
            
            {/* <Name /> */}
            {/* <div class="leaves">
                <img src={leaves} alt="leaves" />
            </div> */}

            <div class="home-buttons">
                <Button>
                    + MOI
                </Button>
            </div>
            <div class="home-buttons">
                <Button>
                    + BIENVENUE
                </Button>
            </div>
            <div class="home-buttons">
                <Button>
                    + TROUVER-MOI
                </Button>
            </div>
                {/* <div id="greenb" className='text-4xl text-center text-black'>Bienvenue sur mon site web!</div> */}
            {/* </Panel> */}
            {/* <div class="PicDeMoi">
                <img src={PicDeMoi} alt="PicDeMoi" />
            </div>

            <div class="about">
                <p>
                    Salut! Je suis Sutton, une étudiante en informatique à l'Université de Californie, Berkeley. J'adore créer des applications web dynamiques et interactives qui offrent une expérience utilisateur exceptionnelle. Avec mes compétences en développement front-end et back-end, je m'efforce de concevoir des solutions innovantes qui répondent aux besoins des utilisateurs. En dehors du codage, j'aime explorer la nature, lire des romans de science-fiction et expérimenter de nouvelles recettes en cuisine. N'hésitez pas à parcourir mes projets et à me contacter pour toute collaboration ou opportunité passionnante!
                </p>
            </div> */}
            {/* <div>
                <img src={PicDeMoi} alt="PicDeMoi" className='w-[80%] drop-shadow-md' />
            </div> */}
        </div>

        <div className='flex flex-col flex-wrap items-between' >
            
            {/* <Name /> */}
            {/* <div class="leaves">
                <img src={leaves} alt="leaves" />
            </div> */}

            <div class="home-buttons">
                <Button>
                    + MOI
                </Button>
            </div>
            <div class="home-buttons">
                <Button>
                    + BIENVENUE
                </Button>
            </div>
            <div class="home-buttons">
                <Button>
                    + TROUVER-MOI
                </Button>
            </div>
                {/* <div id="greenb" className='text-4xl text-center text-black'>Bienvenue sur mon site web!</div> */}
            {/* </Panel> */}
            {/* <div class="PicDeMoi">
                <img src={PicDeMoi} alt="PicDeMoi" />
            </div>

            <div class="about">
                <p>
                    Salut! Je suis Sutton, une étudiante en informatique à l'Université de Californie, Berkeley. J'adore créer des applications web dynamiques et interactives qui offrent une expérience utilisateur exceptionnelle. Avec mes compétences en développement front-end et back-end, je m'efforce de concevoir des solutions innovantes qui répondent aux besoins des utilisateurs. En dehors du codage, j'aime explorer la nature, lire des romans de science-fiction et expérimenter de nouvelles recettes en cuisine. N'hésitez pas à parcourir mes projets et à me contacter pour toute collaboration ou opportunité passionnante!
                </p>
            </div> */}
            {/* <div>
                <img src={PicDeMoi} alt="PicDeMoi" className='w-[80%] drop-shadow-md' />
            </div> */}
        </div>

        {/* <div class="PicDeMoi">
            <img src={PicDeMoi} alt="PicDeMoi" className='w-[30%]' />
        </div> */}

            {/* <div class="about">
                <p>
                    Salut! Je suis Sutton, une étudiante en informatique à l'Université de Californie, Berkeley. J'adore créer des applications web dynamiques et interactives qui offrent une expérience utilisateur exceptionnelle. Avec mes compétences en développement front-end et back-end, je m'efforce de concevoir des solutions innovantes qui répondent aux besoins des utilisateurs. En dehors du codage, j'aime explorer la nature, lire des romans de science-fiction et expérimenter de nouvelles recettes en cuisine. N'hésitez pas à parcourir mes projets et à me contacter pour toute collaboration ou opportunité passionnante!
                </p>
            </div> */}
        
        
    </div>
    

    

    // <div id='enchante'>
    //     <Link to="/randomGen" className="">
    //         Enchanté
    //     </Link>
    // </div>
  )
}

export default LandingPage