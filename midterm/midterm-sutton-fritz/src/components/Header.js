const Header = () => {
  return (
    <div className=" flex text-wrap justify-between items-center flex-row text-[black] w-[90%] ">
        <div id="name" className="flex justify-center text-[3rem] text-[#BF092F]">
            {/* {'< SUTTON FRITZ />'} */}
            Sutton Fritz
        </div>
        {/* <div id="enchante" className="flex text-nowrap justify-center text-[1.5rem] px-5">
            enchanté
        </div> */}
        <div id="header-div" className="flex text-nowrap justify-center text-[1.5rem] px-5">
            {'</>'}
        </div>
        
    </div>
  )
}

export default Header