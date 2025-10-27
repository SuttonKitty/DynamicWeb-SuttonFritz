import RevueAccordion from "../components/RevueAccordion"
import RevueDown from "../components/RevueDown"

// downloadables
import ResumePDF from "../assets/moi.png";

const ITEMS = [
  {
    id: '200',
    label: '+ inter-you',
    content:
      <div className="grid grid-cols-1 md:grid-cols-[6fr_1fr] gap-3 items-start h-full">
        <RevueDown fileUrl={ResumePDF} fileName="Resume_Sutton.pdf" />
        <div className="flex flex-col order-2 md:order-1 gap-3">
          <div id="inter">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed maximus nunc, a scelerisque erat. Curabitur dapibus mauris ut eros vestibulum lacinia at in nisi. Praesent gravida lacus pharetra, aliquet diam et, aliquam leo. Suspendisse malesuada, nibh at lobortis egestas, dui lacus eleifend ligula, sed blandit nunc ipsum non magna. Morbi risus lacus, viverra ac nisi quis, aliquam tempor risus. Pellentesque egestas tempus lectus. Duis odio erat, ornare sit amet varius in, gravida rhoncus sem. Curabitur vehicula orci finibus leo lacinia, sit amet malesuada neque faucibus. Phasellus a pellentesque leo. Vivamus egestas mauris vitae viverra posuere. Phasellus vulputate mauris ac urna tempor, eget maximus est lobortis. Fusce nisl orci, dignissim vel dui vel, tincidunt cursus nisi.
          </div>
          <div id="mono">
            [Oct 23, 2025, 09:16 PM]
          </div>
        </div>
      </div>
  },
  {
    id: '201',
    label: '+ inter-you',
    content:
      <div className="grid grid-cols-1 md:grid-cols-[6fr_1fr] gap-3 items-start h-full">
        <RevueDown fileUrl={ResumePDF} fileName="Resume_Sutton.pdf" />
        <div className="flex flex-col order-2 md:order-1 gap-3">
          <div id="inter">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed maximus nunc, a scelerisque erat. Curabitur dapibus mauris ut eros vestibulum lacinia at in nisi. Praesent gravida lacus pharetra, aliquet diam et, aliquam leo. Suspendisse malesuada, nibh at lobortis egestas, dui lacus eleifend ligula, sed blandit nunc ipsum non magna. Morbi risus lacus, viverra ac nisi quis, aliquam tempor risus. Pellentesque egestas tempus lectus. Duis odio erat, ornare sit amet varius in, gravida rhoncus sem. Curabitur vehicula orci finibus leo lacinia, sit amet malesuada neque faucibus. Phasellus a pellentesque leo. Vivamus egestas mauris vitae viverra posuere. Phasellus vulputate mauris ac urna tempor, eget maximus est lobortis. Fusce nisl orci, dignissim vel dui vel, tincidunt cursus nisi.
          </div>
          <div id="mono">
            [Oct 23, 2025, 09:16 PM]
          </div>
        </div>
      </div>
  },
  {
    id: '202',
    label: '+ inter-you',
    content:
      <div className="grid grid-cols-1 md:grid-cols-[6fr_1fr] gap-3 items-start h-full">
        <RevueDown fileUrl={ResumePDF} fileName="Resume_Sutton.pdf" />
        <div className="flex flex-col order-2 md:order-1 gap-3">
          <div id="inter">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed maximus nunc, a scelerisque erat. Curabitur dapibus mauris ut eros vestibulum lacinia at in nisi. Praesent gravida lacus pharetra, aliquet diam et, aliquam leo. Suspendisse malesuada, nibh at lobortis egestas, dui lacus eleifend ligula, sed blandit nunc ipsum non magna. Morbi risus lacus, viverra ac nisi quis, aliquam tempor risus. Pellentesque egestas tempus lectus. Duis odio erat, ornare sit amet varius in, gravida rhoncus sem. Curabitur vehicula orci finibus leo lacinia, sit amet malesuada neque faucibus. Phasellus a pellentesque leo. Vivamus egestas mauris vitae viverra posuere. Phasellus vulputate mauris ac urna tempor, eget maximus est lobortis. Fusce nisl orci, dignissim vel dui vel, tincidunt cursus nisi.
          </div>
          <div id="mono">
            [Oct 23, 2025, 09:16 PM]
          </div>
        </div>
      </div>
  },
  {
    id: '203',
    label: '+ inter-you',
    content:
      <div className="grid grid-cols-1 md:grid-cols-[6fr_1fr] gap-3 items-start h-full">
        <RevueDown fileUrl={ResumePDF} fileName="Resume_Sutton.pdf" />
        <div className="flex flex-col order-2 md:order-1 gap-3">
          <div id="inter">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed maximus nunc, a scelerisque erat. Curabitur dapibus mauris ut eros vestibulum lacinia at in nisi. Praesent gravida lacus pharetra, aliquet diam et, aliquam leo. Suspendisse malesuada, nibh at lobortis egestas, dui lacus eleifend ligula, sed blandit nunc ipsum non magna. Morbi risus lacus, viverra ac nisi quis, aliquam tempor risus. Pellentesque egestas tempus lectus. Duis odio erat, ornare sit amet varius in, gravida rhoncus sem. Curabitur vehicula orci finibus leo lacinia, sit amet malesuada neque faucibus. Phasellus a pellentesque leo. Vivamus egestas mauris vitae viverra posuere. Phasellus vulputate mauris ac urna tempor, eget maximus est lobortis. Fusce nisl orci, dignissim vel dui vel, tincidunt cursus nisi.
          </div>
          <div id="mono">
            [Oct 23, 2025, 09:16 PM]
          </div>
        </div>
      </div>
  },
  {
    id: '204',
    label: '+ inter-you',
    content:
      <div className="grid grid-cols-1 md:grid-cols-[6fr_1fr] gap-3 items-start h-full">
        <RevueDown fileUrl={ResumePDF} fileName="Resume_Sutton.pdf" />
        <div className="flex flex-col order-2 md:order-1 gap-3">
          <div id="inter">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed maximus nunc, a scelerisque erat. Curabitur dapibus mauris ut eros vestibulum lacinia at in nisi. Praesent gravida lacus pharetra, aliquet diam et, aliquam leo. Suspendisse malesuada, nibh at lobortis egestas, dui lacus eleifend ligula, sed blandit nunc ipsum non magna. Morbi risus lacus, viverra ac nisi quis, aliquam tempor risus. Pellentesque egestas tempus lectus. Duis odio erat, ornare sit amet varius in, gravida rhoncus sem. Curabitur vehicula orci finibus leo lacinia, sit amet malesuada neque faucibus. Phasellus a pellentesque leo. Vivamus egestas mauris vitae viverra posuere. Phasellus vulputate mauris ac urna tempor, eget maximus est lobortis. Fusce nisl orci, dignissim vel dui vel, tincidunt cursus nisi.
          </div>
          <div id="mono">
            [Oct 23, 2025, 09:16 PM]
          </div>
        </div>
      </div>
  },
]

const RevuePage = () => {
  return (
    <div>
      <div
        id="cursive"
        className="text-[#BF092F] text-3xl mb-3"
      >
        Mon Scrapbook
      </div>

      <div>
        <RevueAccordion items={ITEMS} />
      </div>
    </div>
  )
}


export default RevuePage