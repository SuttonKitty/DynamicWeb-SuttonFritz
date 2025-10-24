import Navbar from './Navbar'

const Header = () => {
  return (
    <div className='mt-[1rem]'>
      <div id="cursive" className="text-[#BF092F] text-5xl mb-[3rem]">
        <a href="/">
          Sutton Fritz
        </a>
      </div>
      {/* <div id="mono" className='text-sm mb-[3rem]'>
        {`<WebDeveloper/>`}
      </div> */}

      {/* <div id="philosophy" className='mb-[3rem] text-s'>
          I used to think computers solved questions, but they focus our attentions to a single task and ask <i>us</i> the question.
      </div> */}

      <div className='mb-[3rem]'>
        <Navbar />
      </div>
    </div>
  )
}

export default Header