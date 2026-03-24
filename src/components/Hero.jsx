import Card from "./Card"
import DisplayPhoto from "./DisplayPhoto"
import LoanCalculatorCard from "./LoanCalculatorCard"

const Hero = () => {
    const photoObj = [
        {
            id: 1,
            src: "/RidhimaAgarwal.png",
            alt: "Ridhima Agarwal"
        },
        {
            id: 2,
            src: "/PravlikaValiveti.png",
            alt: "Pravlika Valiveti"
        },
        {
            id: 3,
            src: "/RhythmSharma.png",
            alt: "Rhythm Sharma"
        }
    ]
    return (
        //hero container
        <section>
            {/* hero content */}
            <div className="py-16 flex flex-row items-center justify-between">
                {/* left */}
                <div className="basis-1/2 flex flex-col gap-4">
                    {/* trusted */}
                    <div className="flex items-center justify-between p-2 w-[280px]" style={{borderRadius: '20px', backgroundColor: '#FFFFFF4D', border: '1px solid #FFFFFF'}}>
                        <div className="flex">
                            {photoObj.map((photo) => (
                                <DisplayPhoto key={photo?.id} src={photo?.src} alt={photo?.alt}/>
                            ))}
                        </div>
                        <span className="font-[100]">Trusted by over 2,000 users</span>
                    </div>
                    {/* big text */}
                    <div className="font-[700] text-[56px]">
                        <span className="text-[#294F7C]">Plan your life goals.</span> <span className="text-[#4A90E2]">We’ll plan the investments.</span>
                    </div>
                    <div className="text-[#294F7C] font-[400] text-[20px]">
                    WealthUp helps you achieve goals through personalised goal based investing.
                    </div>

                    {/* cards */}
                    <div className="flex flex-col gap-4">
                        <div className="flex gap-8">
                            <Card backgroundColor="#F8FAFC33" style={{border: '1px solid #4A90E2', borderRadius: '20px'}} className="px-2 w-[180px] h-[100px] shadow-[4px_0_4px_0_#4A90E240] flex items-center justify-center cursor-pointer">
                                <img src="/car.png" alt="car" className="h-[50px] w-[auto]"/>
                                <span className="text-[#294F7C] font-[600] text-[20px]">Car</span>
                            </Card>
                            <Card backgroundColor="#F8FAFC33" style={{border: '1px solid #F8FAFC33', borderRadius: '20px'}} className="px-2 w-[180px] h-[100px] shadow-[4px_0_4px_0_#4A90E240] flex items-center justify-center cursor-pointer">
                                <img src="/aeroplane.png" alt="car" className="h-[50px] w-[auto]"/>
                                <span className="text-[#294F7C] font-[600] text-[20px]">Travel</span>
                            </Card>
                        </div>
                        <div className="flex gap-8">
                            <Card backgroundColor="#F8FAFC33" style={{border: '1px solid #F8FAFC33', borderRadius: '20px'}} className="px-2 w-[180px] h-[100px] shadow-[4px_0_4px_0_#4A90E240] flex items-center justify-center cursor-pointer">
                                <img src="/house.png" alt="car" className="h-[50px] w-[auto]"/>
                                <span className="text-[#294F7C] font-[600] text-[20px]">Home</span>
                            </Card>
                            <Card backgroundColor="#F8FAFC33" style={{border: '1px solid #F8FAFC33', borderRadius: '20px'}} className="px-2 w-[180px] h-[100px] shadow-[4px_0_4px_0_#4A90E240] flex items-center justify-center cursor-pointer">
                                <span className="h-[50px] w-[auto] flex items-center">🎯</span>
                                <span className="text-[#294F7C] font-[600] text-[20px]">Custom</span>
                            </Card>
                        </div>
                    </div>
                </div>
                {/* right */}
                
                <div className="basis-1/2">
                <LoanCalculatorCard />
                <img src="/car.png" alt="car" className="h-[auto] w-[auto]"/>
                </div>
            </div>

        </section>
    )
}
export default Hero