import { TiThMenuOutline } from "react-icons/ti";
import "./App.css"
import "./index.css"
import { useState } from "react";
import { CgCloseR } from "react-icons/cg";

const Nav = () => {
    const [click, setClick]=useState(false)
   const handleClick=()=>{
    setClick(!click)
    console.log(click)
   }
    return (
        <nav className="p-5 bg-gray-200 sticky top-0 z-50">
            <div className="flex justify-between items-center">
                <h1 className="font-bold text-3xl text-orange-500">Maimuna Rahman</h1>
              
                 
                 <div className="hidden md:block">
                 <ul className="   list-none flex justify-end items-center gap-5 text-gray-600 font-semibold">
                 <li className=" hover:text-gray-900 hover:font-bold"><a href="#home">Home</a></li>
                    <li className=" hover:text-gray-900 hover:font-bold"><a href="#about">About Me</a></li>
                   
                    <li className=" hover:text-gray-900 hover:font-bold"><a href="#edu">Education</a></li>
                    <li className=" hover:text-gray-900 hover:font-bold"><a href="#skill">Skills</a></li>
                    <li className=" hover:text-gray-900 hover:font-bold"><a href="#prjct">Projects</a></li>
                    <li className=" hover:text-gray-900 hover:font-bold"><a href="#cntct">Contact</a></li>
                   
                 </ul>
          
                  
                </div>
                <div className="block md:hidden relative">
                    <button onClick={handleClick}>
                    <TiThMenuOutline />
                    </button>
                    {click && <div className="w-48 absolute top-12 right-0 bg-opacity-50 backdrop-blur-md "> <ul className="   list-none flex flex-col justify-end items-center gap-5 text-gray-600 font-semibold">
                        <button  onClick={handleClick}><CgCloseR /></button> 
                    <li className=" hover:text-gray-900 hover:font-bold"><a href="#home">Home</a></li>
                    <li className=" hover:text-gray-900 hover:font-bold"><a href="#about">About Me</a></li>
                   
                    <li className=" hover:text-gray-900 hover:font-bold"><a href="#edu">Education</a></li>
                    <li className=" hover:text-gray-900 hover:font-bold"><a href="#skill">Skills</a></li>
                    <li className=" hover:text-gray-900 hover:font-bold"><a href="#prjct">Projects</a></li>
                    <li className=" hover:text-gray-900 hover:font-bold"><a href="#cntct">Contact</a></li>
                   
                 </ul>
          </div>}
               
                </div>
            </div>
            
        </nav>
    );
};

export default Nav;
