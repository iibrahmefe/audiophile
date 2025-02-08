import speaker from "../../../assets/speaker.png";
import speakerzx from "../../../assets/zx7speaker.png";
import ear from "../../../assets/ear.png";
import person from "../../../assets/person.png";
export default function Product() {
    return (
        <>

            <div className="bg-figmaOrange rounded-lg p-4 min-h-[560px] w-full relative mb-12 flex items-center justify-end">
                <img src={speaker} alt="Speaker Image" className="absolute bottom-0 left-[120px] w-[410px] h-[493px]" />
                <div className="max-w-[350px] w-full flex flex-col items-start justify-center mr-20">
                    <h1 className="text-white text-4xl font-bold">Speaker</h1>
                    <p className="text-white text-lg mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis faucibus sit faucibus.</p>
                    <button className="bg-white text-figmaOrange rounded-lg px-4 py-2 mt-4 hover:scale-95 transition-all transform">Shop Now</button>
                </div>
            </div>

            <div className="w-full min-h-[320px] rounded-lg relative">
                <img src={speakerzx} alt="ZX7 Speaker" className="w-full h-full object-cover rounded-lg" />
                <div className="absolute top-1/2 -translate-y-1/2 left-20">
                    <h1 className="text-figmaBlack text-4xl font-bold">ZX7 SPEAKER</h1>
                    
                    <button className="border border-figmaBlack px-4 py-2 mt-8 hover:scale-95 transition-all transform">See Product</button>
                </div>
            </div>

            <div className="flex gap-8 min-h-[320px] mt-12">
                <div className="flex-1 rounded-lg ">
                    <img src={ear} alt="" className="w-full h-full object-cover rounded-lg" />
                </div>
                <div className="flex-1 rounded-lg bg-figmaGray items-start justify-center flex flex-col pl-24">
                    <h1 className="text-figmaBlack text-4xl font-bold">YX1 EARPHONES</h1>
                    <button className="border border-figmaBlack px-4 py-2 mt-8 hover:scale-95 transition-all transform">See Product</button>
                </div>
            </div>

            <div className="min-h-[590px] w-full flex items-center justify-center mt-52 ">
                <div className="flex-1 w-[445px] h-[295px] flex flex-col ">
                    <h1 className="text-figmaBlack text-4xl font-bold">BRINGING YOU THE <span className="text-figmaOrange">BEST</span> AUDIO GEAR</h1>
                    <p className="text-figmaBlack text-opacity-40 text-sm mt-4 mr-12">Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
                </div>

                <div className="flex-1">
                    <img src={person} alt="" className="w-full h-full object-cover rounded-lg" />

                </div>
            </div>
        </>


    )
}