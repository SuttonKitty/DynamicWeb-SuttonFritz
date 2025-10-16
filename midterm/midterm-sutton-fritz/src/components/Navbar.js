import React from 'react'
import cx from 'classnames'
import {NavLink, Link} from 'react-router-dom'

import Panel from './Panel'

const Navbar = () => {
  // const activeClass = 'text-blue-500 font-bold decoration-solid'
  // const pendingClass = 'text-red-500'

  return (
    <div id='navbar'>
      <Panel className="">
        
        <div class="nav">
          {/* <Link to="/button" className="">
            moi
          </Link> */}
          <Link to="/randomGen" className="">
            desprojets
          </Link>
          <Link to="/accordion" className="">
            marevue
          </Link>
          {/* <Link to="/dropdown" className="">
            marecherche
          </Link>  */}
          <Link to="/" className="">
            trouvermoi
          </Link>
        </div>
        
        
        
        

        
        {/* <Link to="/accordion" className="text-[#8EB486] opacity-60 text-9xl hover:opacity-100">
          Accordion
        </Link>
        <Link to="/dropdown" className="text-[#8EB486] opacity-60 text-9xl hover:opacity-100">
          Dropdown
        </Link>
        <Link to="/randomGen" className="text-[#8EB486] opacity-60 text-9xl hover:opacity-100">
          RandomGen
        </Link> */}
      </Panel>
    </div>

    // BONUS HW: Figure out Navlink and Active class EXTRA CREDIT
    // <Panel className="sticky top-0 overflow-y-scroll flex flex-col item-start">
    //   <NavLink
    //     to="/"
    //     className={cx(
    //       ({isActive, isPending}) =>
    //         isPending ? pendingClass : isActive ? activeClass : '',
    //       'text-blue-500'
    //     )}
    //   >
    //     Buttons
    //   </NavLink>
    //   <NavLink
    //     to="/accordion"
    //     className={cx(
    //       ({isActive, isPending}) =>
    //         isPending ? pendingClass : isActive ? activeClass : '',
    //       'text-blue-500'
    //     )}
    //   >
    //     Accordion
    //   </NavLink>
    //   <NavLink
    //     to="/dropdown"
    //     className={cx(
    //       ({isActive, isPending}) =>
    //         isPending ? pendingClass : isActive ? activeClass : '',
    //       'text-blue-500'
    //     )}
    //   >
    //     Dropdown
    //   </NavLink>
    //   {/* Add link here to the component page you made for HW */}
    // </Panel>
  )
}

export default Navbar
