import NavLinks from './NavLinks'

const Navbar = () => {
  const links = ["N°1 moi", "N°2 work", "N°3 scrapbook"]

  return (
    <NavLinks links={links} />
  )
}

export default Navbar