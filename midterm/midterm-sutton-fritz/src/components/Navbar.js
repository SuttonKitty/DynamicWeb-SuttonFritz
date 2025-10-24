import NavLinks from './NavLinks'

const Navbar = () => {
  const links = ["N°1 moi", "N°2 projets", "N°3 revue", "N°4 photos"]

  return (
    <NavLinks links={links} />
  )
}

export default Navbar