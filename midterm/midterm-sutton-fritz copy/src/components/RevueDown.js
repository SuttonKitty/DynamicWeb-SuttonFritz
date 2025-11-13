import { TiDownload } from "react-icons/ti";

const RevueDown = ({ fileUrl, fileName }) => {
  return (
    <div className="order-1 md:order-2 relative flex flex-col items-start md:items-end justify-between gap-1 h-full w-full">
      <div className="flex w-full justify-between items-end md:block">
        <div
            id="mono"
            className="font-semibold flex items-end gap-1 justify-start md:justify-end w-full"
        >
            <span className="hidden md:inline">:</span>
                résumer
            <span className="inline md:hidden">:</span>
        </div>

        <a
            href={fileUrl}
            download={fileName}
            id="mono"
            className="text-[#BF092F] hover:bg-[black] hover:text-[#FAF8F1] p-[0.1rem] md:hidden"
        >
            <TiDownload className="text-3xl" />
        </a>
      </div>

        <a
            href={fileUrl}
            download={fileName}
            id="mono"
            className="text-[#BF092F] md:block hover:bg-[black] hover:text-[#FAF8F1] p-[0.1rem] hidden"
        >
            <TiDownload className="text-3xl" />
        </a>
    </div>
  );
};

export default RevueDown;
