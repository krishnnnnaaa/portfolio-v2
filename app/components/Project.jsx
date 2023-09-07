import Image from "next/image";
import Link from "next/link";

export default function Project({image, project, description, demo, code}){
    return(
        <div className="w-72 hover:bg-[#0000006b] transition-all duration-700 hover:-translate-y-2 cursor-pointer flex flex-col justify-center items-center rounded-xl px-0 py-4 md:p-4">
                    <div className="w-60 h-40 mb-4 relative">
                        <Link target="_blank" href={demo}>
                        <Image alt={project} src={image} fill={true} className="w-full rounded-xl h-full"/>
                        </Link>
                    </div>
                    <Link target="_blank" href={code}>
                    <div className="px-2">
                        <h2 className="text-2xl my-2">{project}</h2>
                        <p className="text-[#888888]">{description}</p>
                    </div>
                    </Link>
                </div>
    )
}