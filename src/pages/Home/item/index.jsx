import { item } from "../../../utils/const";
import { MdOutlineArrowForwardIos } from "react-icons/md";

export default function Item() {
    return (
        <div className="mt-[200px] gap-[30px] mb-40 w-full max-w-[1110px] mx-auto flex md:flex-row flex-col justify-center">
            {item.map((item, index) => (
                <div key={index} className="max-w-[350px] min-h-[284px] bg-figmaGray rounded-lg w-full flex flex-col items-center relative group hover:-translate-y-2 transition-all duration-300">
                    <div className="absolute -top-16 w-full flex justify-center">
                        <img
                            src={item.image}
                            alt={item.name}
                            className="h-[160px] w-auto filter drop-shadow-[0_35px_35px_rgba(0,0,0,0.7)] group-hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    <div className="mt-[120px] flex flex-col items-center gap-4 pb-8">
                        <h1 className="text-xl font-bold text-figmaBlack">{item.name}</h1>
                        <button className="flex items-center justify-center gap-2 hover:gap-3 transition-all duration-300 text-sm font-medium opacity-75 hover:opacity-100">
                            Shop <MdOutlineArrowForwardIos className="text-figmaOrange" />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}
