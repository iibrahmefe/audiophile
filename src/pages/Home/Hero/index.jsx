import heroimage from '../../../assets/heroimage.png'

export default function Hero() {
    return (
        <div className="w-full min-h-screen flex flex-col-reverse md:flex-row justify-center items-center gap-8 md:gap-12 xl:gap-[90px] px-4 sm:px-6 py-8 sm:py-12">
            <div className="flex flex-col gap-4 text-center xl:text-left max-w-[450px] xl:max-w-none">
                <p className="uppercase text-[12px] sm:text-[14px] text-figmaGray/30 tracking-[8px] sm:tracking-[10px]">New Product</p>
                <h1 className="font-bold text-[36px] sm:text-[48px] xl:text-[56px] text-figmaWhite leading-tight xl:leading-[58px] tracking-[1px] xl:tracking-[2px]">
                    XX99 Mark II <br /> Headphones
                </h1>
                <p className="text-sm sm:text-base text-figmaGray/30 max-w-[35ch] sm:max-w-[40ch] mx-auto xl:mx-0">
                    Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
                </p>
                <div className="flex justify-center xl:justify-start">
                    <button className="py-3 sm:py-[15px] px-6 sm:px-[30px] bg-figmaOrange text-figmaWhite text-sm font-semibold hover:bg-opacity-90 transition-colors">
                        SEE PRODUCT
                    </button>
                </div>
            </div>

            <div className="w-full max-w-[450px] xl:max-w-none flex items-center justify-center">
                <img 
                    src={heroimage} 
                    alt="XX99 Mark II Headphones" 
                    className="w-full h-auto max-w-[300px] sm:max-w-[450px] xl:max-w-[710px]"
                />
            </div>
        </div>
    )
}