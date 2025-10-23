import MoiPic from '../assets/moipic.png'

const MoiPage = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-9 items-start">
        <img
          src={MoiPic}
          alt="MoiPic"
          className="w-full md:full rounded-sm shadow-md"
        />

        <div className='flex flex-col items-start h-full gap-3'>
          <div id="cursive" className="text-[#BF092F] text-3xl">
            Moi
          </div>

          <div id="inter" className="text-sm md:text-base leading-relaxed">
            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </div>

          <div id="inter" className="text-sm md:text-base leading-relaxed">
            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </div>

       </div>
      </div>
    </div>
  )
}

export default MoiPage