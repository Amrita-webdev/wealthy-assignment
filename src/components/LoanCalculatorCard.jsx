'use client';

import { useState } from "react"
import Card from "./Card"
import Button from "./Button"
import "../app/globals.css"

const LoanCalculatorCard = ({expectedReturn = 12}) => {

    const [carPrice, setCarPrice] = useState(1500000)
    const [timeToBuy, setTimeToBuy] = useState(3)

    const formatINR = (amount) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(amount)
    }

    const formatLakhsCrores = (amount)=> {
        if(amount >= 10000000){
            return `${(amount/10000000).toFixed(2)} Cr`
        } else if (amount >=100000){
            return `${(amount/100000).toFixed(2)} L`
        } else {
            return `${(amount/1000).toFixed(2)} K`
        }
        
    }

    const calculations = () => {
        const monthlyRate = expectedReturn / 100/ 12
        const totalMonths = timeToBuy * 12

        const sipMultiplier = (Math.pow(1 + monthlyRate, totalMonths) -1) / monthlyRate * (1+monthlyRate)
        const monthlySip = carPrice / sipMultiplier

        const lumpSum = carPrice / Math.pow(1 + monthlyRate, totalMonths);

        const totalSIPInvestment = monthlySip * totalMonths

        return {
            monthlySip: Math.round(monthlySip),
            lumpSum: Math.round(lumpSum),

        }
    }
    const getProgress = (value, min, max) =>
        `${((value - min) / (max - min)) * 100}%`
    return (
        <Card width="506px" height="338px" radius="40px" backgroundColor="#F8FAFC33" style={{border: '1px solid #4A90E2', borderRadius: '40px'}} className="p-6 shadow-[4px_0_4px_0_#4A90E240] flex items-center justify-center flex-col">
            <span className="text-[#294F7C] font-[600] text-[16px] text-center">Buy a car</span>
            {/* sliders and button */}
            <div className="flex">
                <div className="flex flex-col px-6 py-4 gap-4">
                    <div className="w-[220px]">
                        <div className="flex items-center justify-between">
                            <span className="text-[#294F7C] font-[400] text-[12px]">Car price</span>
                            <span className="font-[600] text-[14px] text-[#294F7C]">₹ {formatLakhsCrores(carPrice)}</span>
                        </div>
                        <input
                            type="range"
                            min={100000}
                            max={5000000}
                            step={50000}
                            value={carPrice}
                            onChange={(e) => setCarPrice(Number(e.target.value))}
                            className="slider mt-3"
                            style={{
                            "--progress": getProgress(carPrice, 100000, 5000000),
                            }}
                        />
                    </div>

                    <div className="w-[220px]" style={{ marginTop: "20px" }}>
                        <div className="flex items-center justify-between">
                            <span className="text-[#294F7C] font-[400] text-[12px]">Time to Buy</span>
                            <span className="font-[600] text-[14px] text-[#294F7C]">{timeToBuy} years</span>
                        </div>
                        <input
                            type="range"
                            min={1}
                            max={10}
                            step={1}
                            value={timeToBuy}
                            onChange={(e) => setTimeToBuy(Number(e.target.value))}
                            className="slider mt-3"
                            style={{
                            "--progress": getProgress(timeToBuy, 1, 10),
                        }}
                        />
                    </div>

                    <Button color="#294F7C" style={{width: "auto", border: '1px solid #4A90E2'}} className="flex items-center justify-center">
                        <span>Let's get your car</span>
                        <img src="/car.png" alt="car" className="h-[20px] w-[20px] -rotate-180"/>
                    </Button>

                </div>
                {/* cards */}
                <div className="flex flex-col gap-4 items-center justify-center">
                    <Card width="180px" height="80px" radius="40px" style={{border: '1px solid #4A90E2', borderRadius: '15px', backgroundColor: "#FFFFFF"}} className="py-4 px-8 flex flex-col items-center justify-center">
                        <span className="text-[##294F7C] font-[400] text-[14px]">Lump Sum</span>
                        <span className="text-[#294F7C] font-[600] text-[24px]">₹ {formatLakhsCrores(calculations().lumpSum)}</span>
                    </Card>
                    <span className="text-[#294F7C] text-[14px] font-[200]">OR</span>
                    <Card width="180px" height="80px" radius="40px" style={{border: '1px solid #4A90E2', borderRadius: '15px', backgroundColor: "#FFFFFF"}} className="py-4 px-8 flex flex-col items-center justify-center">
                        <span className="text-[##294F7C] font-[400] text-[14px]">Monthly SIP</span>
                        <span className="text-[#294F7C] font-[600] text-[24px]">₹ {formatLakhsCrores(calculations().monthlySip)}</span>
                    </Card>
                </div>
            </div>
        </Card>
    )
}

export default LoanCalculatorCard