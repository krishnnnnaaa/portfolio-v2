import Image from "next/image";

export default function Tool({tech, techName}){
    return(
        <div className="bg-[#1212129c] w-48 flex rounded-xl flex-col mb-8 justify-center items-center">
                    <div className={`${techName == 'Tailwind' ? 'h-16' : "h-24"} ${techName == 'Bootstrap' && 'h-20'} ${techName == 'CSS' ? "w-20" : "w-24"} relative  hover:scale-125 transition-all mt-12 mb-8`}>
                        <Image src={tech} fill={true} alt={techName} className="w-full h-full"/>
                    </div>
                    <div className="mb-8">
                        <p>{techName}</p>
                    </div>
                </div>
    )
}