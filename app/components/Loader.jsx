import Image from "next/image";
import loader from '../loader.gif'

export default function Loader(){
    return(
        <div>
            <Image src={loader} alt="loader" className="pointer-events-none mt-20" height={60} width={60}/>
        </div>
    )
}