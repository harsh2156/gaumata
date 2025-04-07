import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa"
import { IoIosCall } from "react-icons/io"
import { LuMapPin } from "react-icons/lu"
import { MdEmail } from "react-icons/md"
import { Link } from "react-router-dom"

const menu: { title: string, src: string }[] = [
    { title: "Home", src: "/" },
    { title: "Ayushman Cowfit", src: "/ayushman" },
    { title: "Cowfit Studio", src: "/" },
    { title: "About us", src: "/" },
    { title: "Careers", src: "/" },
    { title: "FAQ", src: "/" },
    { title: "Gallery", src: "/" },
    { title: "Announcements", src: "/" },
    { title: "Contact us", src: "/" }
]

const social: { icon: React.ReactNode, src: string }[] = [
    { icon: <FaFacebook size={24} />, src: 'https://www.facebook.com/' },
    { icon: <FaTwitter size={24} />, src: 'https://twitter.com/' },
    { icon: <FaLinkedin size={24} />, src: 'https://www.linkedin.com/' },
    { icon: <FaInstagram size={24} />, src: 'https://www.instagram.com/' },
    { icon: <FaYoutube size={24} />, src: 'https://www.youtube.com/' },
]
const Footer = () => {
    return (
        <>
            <div className="flex justify-between px-20 py-10 bg-[#1F2937]">
                <div>
                    <img src="/footerLogo.svg" alt="Logo" width={100} height={100} />
                </div>
                <div className="flex flex-col gap-y-3">
                    <h1 className=" text-gray-300 text-xl font-bold mb-2">Explore</h1>
                    {
                        menu.map((item, i) => <FooterMenu key={i} title={item.title} src={item.src} />)
                    }
                </div>
                <div className="flex flex-col gap-y-3">
                    <h1 className="text-gray-300 text-xl font-bold mb-2">Follow us on</h1>
                    {
                        social.map((item, i) => <SocialHandle key={i} icon={item.icon} src={item.src} />)
                    }
                </div>
                <div className="flex flex-col gap-y-3 w-60">
                    <h1 className="text-gray-300 text-xl font-bold mb-2">Contact</h1>
                    <div className="flex flex-col gap-y-4">
                        <p className="text-gray-400 flex gap-x-2 "><span className="text-yellow-500 !mt-2"><LuMapPin /></span> Areete Business Solutions
                            605, Baner Business Bay, Pashan - Sus Rd, Pune Banglore Highway Pashan Exit, behind Audi, off Mumbai, Mohan Nagar Co-Op Society, Baner, Pune, Maharashtra 411045</p>
                        <p className="text-gray-400 flex items-center gap-x-2"><span className="text-yellow-500 !mt-1"><IoIosCall /></span> +91-8484906188</p>
                        <p className="text-gray-400 flex items-center gap-x-2"><span className="text-yellow-500 !mt-1"><MdEmail /></span> connect@areete.ai</p>
                    </div>

                </div>
            </div>
            <div className="flex items-center justify-center  bg-[#1F2937] gap-x-10 pb-2 ">
                <p className="text-gray-300 text-sm">©️ Copyright Areete 2021</p>
                <Link className="text-gray-200 text-sm" to={'/'}>Privacy policy</Link>
                <Link className="text-gray-200 text-sm" to={'/'}>Terms and condtion</Link>
            </div>
        </>
    )
    
}
const FooterMenu = ({ title, src }: { title: string, src: string }) => {
    return (
        <div>
            <Link className="text-gray-400 font-medium" to={src} >{title}</Link>
        </div>
    )
}
const SocialHandle = ({ icon, src }: { icon: React.ReactNode, src: string }) => {
    return (
        <Link to={src} className="p-3 rounded-full bg-gray-400 flex items-center justify-center">
            {icon}
        </Link>
    )
}

export default Footer