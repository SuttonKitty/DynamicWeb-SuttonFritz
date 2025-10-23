const Footer = () => {
  return (
    <div className="mb-10 mt-10">
        <hr className='border-dotted border-[black] mb-5'/>
        
        <div className="flex text-s flex-row text-[black] underline decoration-dotted justify-between mb-5">
            <div id="mono" className="flex justify-end gap-5 font-semibold">
                <a rel="me" href="mailto:sutton.fritz04@gmail.com" className="hover:bg-[black] hover:text-[#FAF8F1] flex items-center p-[0.1rem] font-semibold focus:outline focus:outline-[black]">
                    Email
                </a>
            </div>

            <div id="mono" className="flex justify-end gap-5 font-semibold">
                <a href="https://github.com/SuttonKitty" target="_blank" rel="noopener noreferrer" className="hover:bg-[black] hover:text-[#FAF8F1] flex items-center p-[0.1rem] font-semibold focus:outline focus:outline-[black]">
                    GitHub
                </a>
            </div>

            <div id="mono" className="flex justify-end gap-5 font-semibold">
                <a href="https://www.linkedin.com/in/sutton-fritz" target="_blank" rel="noopener noreferrer" className="hover:bg-[black] hover:text-[#FAF8F1] flex items-center p-[0.1rem] font-semibold focus:outline focus:outline-[black]">
                    Linkedin
                </a>
            </div> 
        </div>
    </div>
  )
}

export default Footer