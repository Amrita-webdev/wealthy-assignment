const LogoCarousal = () => {
    const logos = [
        "/logo1.png",
        "/logo2.png",
        "/logo3.png",
        "/logo4.png",
        "/logo5.png",
        "/logo6.png"
      ];
    return (
        <section>
            <div className="w-full overflow-hidden py-6 px-2 flex flex-col items-center gap-2" style={{border: "1px solid #FFFFFF", borderRadius: '20px'}}>
            <span className="text-[#294F7C] font-[700]">Backed by</span>
            <div className="relative flex w-max animate-scroll gap-12 hover:[animation-play-state:paused]">
                {/* Original */}
                {logos.map((logo, i) => (
                <img
                    key={i}
                    src={logo}
                    alt="brand"
                    className="h-10 w-auto object-contain opacity-80 hover:opacity-100 transition"
                />
                ))}

                {/* Duplicate for infinite loop */}
                {logos.map((logo, i) => (
                <img
                    key={`dup-${i}`}
                    src={logo}
                    alt="brand"
                    className="h-10 w-auto object-contain opacity-80 hover:opacity-100 transition"
                />
                ))}
            </div>
            </div>
        </section>
    )
}

export default LogoCarousal