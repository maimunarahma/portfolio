import { FaDownload, FaGithub } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import { HiOutlineMailOpen } from "react-icons/hi";
import { BsLinkedin } from "react-icons/bs";
const Banner = () => {

    const handleDownload = async () => {
        const response = await fetch('/Email_assignment[1].pdf'); // Replace with actual URL
        const blob = await response.blob();
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'Email_assignment.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div id="home" className='w-[80%] mx-auto flex flex-col md:flex-row  justify-between items-center p-5'>
            <div>
                <h1 className='font-bold text-5xl'>Hi !</h1>
                <p className="text-4xl my-3">This is <span className="text-orange-500 font-bold">Maimuna</span></p>
                <p className="text-3xl font-bold">MERN Stack Developer</p>
                <div className="flex gap-2 justify-start items-center p-3">
                    <button onClick={handleDownload} className="btn bg-orange-200">

                        <FaDownload />Resume</button>
                    <div className="flex gap-2 justify-start itrms-center">
                        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                            <TiSocialFacebook className="w-auto border-2 rounded-full text-3xl" />
                        </a>
                        {/* <TiSocialFacebook className="w-auto border-2 rounded-full text-3xl"/> */}
                        <a href="https://github.com/maimunarahma" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="border-2 rounded-full  text-3xl" />
                        </a>
                        <a href="https://mail.google.com/mail/u/0/#inbox?compose=new" target="_blank" rel="noopener noreferrer">
                            <HiOutlineMailOpen className="border-2 rounded-full  text-3xl" />
                        </a>
                        <a href="https://www.linkedin.com/in/maimuna-rahman-mysha-286497204/" target="_blank" rel="noopener noreferrer">
                            <BsLinkedin className="border-2 rounded-full  text-3xl " />
                        </a>
                    </div>
                </div>


            </div>
            <div  >
                <img src="https://i.ibb.co.com/VWBmpn02/Whats-App-Image-2025-02-06-at-03-39-20-16e324e4.jpg" className="rounded-lg w-60" alt="" />
            </div>
        </div>
    );
};

export default Banner;
