import { Link } from 'react-router-dom'

const BtmNavLinks = ({ links }) => {
  return (
    <div id="inter" className="flex flex-col">
      {links.map((link, index) => {
        const isEnchante = link.toLowerCase().includes("enchanté")
        const formattedLink = isEnchante ? "/" : `/${link.toLowerCase()}`

        return (
          <Link
            key={index}
            to={formattedLink}
            //fix scroll behavior
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`underline decoration-dotted hover:bg-[black] hover:text-[#FAF8F1] p-[0.1rem] w-fit mb-2 text-s ${
              isEnchante ? "text-[#BF092F]" : "text-[black]"
            }`}
          >
            {link}
          </Link>
        )
      })}
    </div>
  )
}

export default BtmNavLinks