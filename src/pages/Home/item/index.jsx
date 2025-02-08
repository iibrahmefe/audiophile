import { item } from "../../../utils/const";
import { MdOutlineArrowForwardIos } from "react-icons/md";

export default function Item() {
    return (
        <div className="mt-[200px] gap-[30px] mb-40 w-full max-w-[1110px] mx-auto  flex flex-wrap justify-center items-end transition-transform">
            {item.map((item, index) => (
                <div key={index} className="max-w-[350px] min-h-[220px]  bg-figmaGray  rounded-lg w-full flex flex-col items-center justify-end pb-20 relative">
                    <img src={item.image} alt={item.name} className="z-10 absolute -top-20 " />
                    <h1 className="z-10 text-center">{item.name}</h1>
                    <button className="flex z-10 items-center justify-center gap-2 hover:scale-95 transition-all transform">
                        Shop <MdOutlineArrowForwardIos className="text-figmaOrange" />
                    </button>
                </div>
            ))}
        </div>
    );
}
