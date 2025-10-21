import TypeBox from "./TypeBox"
// imports "TypeBox component"

const defaultName = "Sutton Fritz"
// declares "defaultName"

const Header = () => {
  return (
    <div className=" flex text-wrap justify-between items-center flex-row text-[black] w-[90%] ">
    {/* parent container */}
        <div id="name" className="flex justify-center text-[250%] text-[#BF092F]">
          {/* TypeBox container */}
            <TypeBox prop={defaultName} />
            {/* sets "prop" from TypeBox to "defaultName", which is "Sutton Fritz" */}
        </div>
        <div id="header-div" className="flex text-nowrap justify-center text-[1.5rem] px-[2%]">
            {'</>'}
        </div>
    </div>
  )
}

export default Header