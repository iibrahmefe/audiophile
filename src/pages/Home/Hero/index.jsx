import heroimage from '../../../assets/heroimage.png'

export default function Hero() {
    return (
        <div className=" w-full h-screen  flex sm:items-center xl:flex-row flex-col-reverse  gap-[90px] justify-center items-center">
            <div className=" flex flex-col gap-4 ">
                <p className="uppercase text-[14px] text-figmaGray/30 tracking-[10px]">New Product</p>
                <p className="font-bold text-[56px] text-figmaWhite leading-[58px] tracking-[2px] ">XX99 Mark II <br /> Headphones</p>
                <p className="max-w-[40ch] text-figmaGray/30">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                <button className="py-[15px] px-[30px] bg-figmaOrange items-start max-w-[160px] text-figmaWhite text-sm font-semibold">SEE PRODUCT</button>
            </div>

            <div className="text-white flex items-center justify-center w-full ">
                <img src={heroimage} alt="" className='max-w-[710px] max-h-[800px] ' />
            </div>

        </div>
    )
}