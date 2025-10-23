import { Link } from 'react-router-dom'

const NavLinks = ({ links }) => {
  return (
    <div id="mono" className="flex text-s flex-row text-[black] underline decoration-dotted gap-[2rem]">
      {links.map((link, index) => {
        const formattedLink = link.toLowerCase()

        return (
          <Link
            key={index}
            to={`/${formattedLink}`}
            className="hover:bg-[black] hover:text-[#FAF8F1] flex items-center p-[0.1rem] font-semibold focus:outline focus:outline-[black]"
          >
            {link}
          </Link>
        )
        
      })}
    </div>
  )
}

export default NavLinks
