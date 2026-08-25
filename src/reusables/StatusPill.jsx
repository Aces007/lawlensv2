import { HiOutlineLocationMarker } from "react-icons/hi";

const StatusPill = () => {
    // -- CONTAINERS AND ELEMENTS -- //
    const statusContainer = "fixed top-6 right-6 resMd:right-12 resLg:right-16 z-50 flex items-center gap-[16px] px-4 py-2 rounded-full bg-dark_background/60 backdrop-blur-md border border-white/10 shadow-lg text-[12px] font-nunito font-semibold tracking-[8px] text-dark_primary/60 uppercase select-none transition-all duration-300 hover:bg-highlight/60";
    const locationTag = "flex items-center gap-1.5 text-dark_secondary/90"
    const availability_container = "flex items-center gap-2 text-white/90"

    return (
        <>
            <div className={statusContainer}>
                <div className={locationTag}>
                    <HiOutlineLocationMarker className="text-dark_highlight text-[12px]"/>
                    <span>Manila, PH</span>
                </div>

                <span className="w-[2px] h-3 bg-white/20" aria-hidden="true" />

                <div className={availability_container}>
                    <span className="relative flex h-2 w-2"> 
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    <span className="hidden resSm:hidden">Available for Hire</span>
                    <span className="resSm:hidden">Available</span>
                </div>
            </div>

        </>
    )
};

export default StatusPill;