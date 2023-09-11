
import { TfiWorld} from 'react-icons/tfi'
import { BsGithub, BsInstagram, BsTwitter} from 'react-icons/bs'
import Link from 'next/link'
export default function Navbar(){
    return(
        <div className='flex w-full justify-between md:relative md:z-[999999999] px-4 items-center h-10 bg-[#000000ab]'>
            <div>
                <TfiWorld className='text-xl'/>
            </div>
            <div>
                <ul className='flex text-sm'>
                    <Link href='https://x.com/Krishn_aGupta' target='_blank' className='mx-4 cursor-pointer hidden md:block'>Twitter</Link>
                    <Link href='https://instagram.com/krishn_a1001' target='_blank' className='mx-4 cursor-pointer hidden md:block'>Instagram</Link>
                    <Link href='https://github.com/krishnnnnaaa/' target='_blank' className='mx-4 cursor-pointer hidden md:block'>GitHub</Link>
                    <Link href='https://x.com/Krishn_aGupta' target='_blank' className='mx-4 cursor-pointer block md:hidden text-xl'><BsTwitter/></Link>
                    <Link href='https://instagram.com/krishn_a1001' target='_blank' className='mx-4 cursor-pointer block md:hidden text-xl'><BsInstagram/></Link>
                    <Link href='https://github.com/krishnnnnaaa/' target='_blank' className='mx-4 cursor-pointer block md:hidden text-xl'><BsGithub/></Link>
                </ul>
            </div>
        </div>
    )
}