const DownloadButton = ({btnText, filePath}) => {
    return (
        <a href={filePath} download="CVDmytroLukashenko.pdf" target="_blank">
            <button className="shadow-none hover:shadow-[0_0_60px_-15px_rgba(255,255,255,0.3)] px-4 py-1 border-2 rounded-md text-neutral-400 hover:text-neutral-300 border-neutral-500 hover:border-neutral-400 transition-all duration-700">{btnText}</button>
        </a>
    )
}

export default DownloadButton;