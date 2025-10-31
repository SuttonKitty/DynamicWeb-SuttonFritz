import Navbar from './Navbar'

const Header = () => {
  return (
    <div className='mt-[1rem] w-full'>
      <div id="cursive" className="text-[#BF092F] text-5xl mb-9 w-full">
        <a href="/" className='block w-[100%] hover:text-[black]'>
          Sutton Fritz
        </a>
      </div>

      <div className='mb-12'>
        <Navbar />
      </div>
    </div>
  )
}

export default Header