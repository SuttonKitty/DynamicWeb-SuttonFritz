import PicDeMoi from '../assets/moi.JPG'

const EnchanteTop = () => {
  return (
    <div className="gap-[3rem]">
      <div className="mt-[2rem] gap-[3rem]">

        <div className="w-full flex justify-start">
          <img
            src={PicDeMoi}
            alt="PicDeMoi"
            className="w-full md:w-3/4 rounded-sm shadow-md"
          />
        </div>

        <div id="cursive" className="text-[#BF092F] text-3xl mt-[3rem]">
          Enchanté
        </div>

        <div
          id="inter" className="w-full md:w-2/3 text-base leading-relaxed">
          is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div>

      </div>
    </div>
  )
}

export default EnchanteTop
