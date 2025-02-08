import speaker from "../../../assets/speaker.png";
import speakerzx from "../../../assets/zx7speaker.png";
import ear from "../../../assets/ear.png";
import person from "../../../assets/person.png";
export default function Product() {
    return (
        <>
            <div className="bg-figmaOrange rounded-lg p-4 min-h-[560px] w-full relative mb-12 flex flex-col md:flex-row items-center justify-center md:justify-end px-4 sm:px-6">
                <img src={speaker} alt="Speaker Image" className="static md:absolute md:bottom-0 md:left-[120px] w-[250px] md:w-[410px] h-auto md:h-[493px] mb-8 md:mb-0" />
                <div className="max-w-[350px] w-full flex flex-col items-center md:items-start justify-center md:mr-20 text-center md:text-left">
                    <h1 className="text-white text-3xl md:text-5xl font-bold">ZX9 <br /> Speaker</h1>
                    <p className="text-white text-base md:text-lg mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis faucibus sit faucibus.</p>

                    <button className="bg-figmaBlack text-figmaWhite  px-4 py-2 mt-4 hover:scale-95 transition-all transform">Shop Now</button>
                </div>
            </div>

            <div className="w-full h-[320px] rounded-lg relative overflow-hidden mb-12">
                <img
                    src={speakerzx}
                    alt="ZX7 Speaker"
                    className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-12 md:px-24">
                    <h2 className="text-figmaBlack text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
                        ZX7 SPEAKER
                    </h2>
                    <button className="w-fit border border-figmaBlack px-6 py-3 hover:bg-figmaBlack hover:text-white transition-all duration-300">
                        See Product
                    </button>
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 min-h-[320px] mt-12">
                <div className="w-full md:flex-1 rounded-lg">
                    <img src={ear} alt="" className="w-full h-full object-cover rounded-lg" />
                </div>
                <div className="w-full md:flex-1 rounded-lg bg-figmaGray items-center md:items-start justify-center flex flex-col p-8 md:pl-24">
                    <h1 className="text-figmaBlack text-2xl md:text-4xl font-bold text-center md:text-left">YX1 EARPHONES</h1>
                    <button className="border border-figmaBlack  py-2 mt-4 md:mt-8 hover:scale-95 transition-all transform">See Product</button>
                </div>
            </div>

            <div className="min-h-[590px] w-full flex flex-col md:flex-row items-center justify-center mt-24 md:mt-52 gap-8 md:gap-0 px-4 sm:px-6 mb-24">
                <div className="w-full md:flex-1 md:w-[445px] md:h-[295px] flex flex-col text-center md:text-left">

                    <h1 className="text-figmaBlack text-2xl md:text-4xl font-bold">BRINGING YOU THE <span className="text-figmaOrange">BEST</span> AUDIO GEAR</h1>
                    <p className="text-figmaBlack text-opacity-40 text-sm mt-4 md:mr-12">Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
                </div>
                <div className="w-full md:flex-1">
                    <img src={person} alt="" className="w-full h-full object-cover rounded-lg" />
                </div>
            </div>
        </>
    )
}