import React, { useEffect, useState } from 'react'
import { MdDashboard, MdOutlineMessage, MdLogout } from 'react-icons/md'
import { SiSimpleanalytics } from "react-icons/si";
import { LiaToolsSolid } from "react-icons/lia"
import { IoSettingsSharp } from "react-icons/io5"
import { FaArrowRight } from "react-icons/fa"
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';
import { BsPersonVcardFill } from "react-icons/bs";

const variants = {
    expanded: { width: "20%" },
    nonExpanded: { width: "5%" }
}

const navItems = [
    // {   
    //     "id": "0",
    //     name: "Dashboard",
    //     icon: MdDashboard,
    //     link: "/home"
    // },
    // {
    //     "id": "1",
    //     name: "Analytics",
    //     icon: SiSimpleanalytics,
    //     link:"/home"
    // },
    {
       
        name: "Message",
        icon: MdOutlineMessage,
        link:"/message"
    },
    {
      
        name: "Registered users",
        icon: BsPersonVcardFill,
        link: "/register"
    },
    // {
    //     "id": "4",
    //     name: "Settings",
    //     icon: IoSettingsSharp,
    //     link: "/home"
    // },
]

const Sidebar = () => {

    const [activeNavIndex, setActiveNavIndex] = useState(1);
    const [isExpanded, setIsExpanded] = useState(true);
    useEffect(() => {

        const handleResize = () => {
            const width = window.innerWidth;
            if (width <= 768) {
                setIsExpanded(false);
            }

            else {
                setIsExpanded(true);
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <motion.section
            animate={isExpanded ? "expanded" : "nonExpanded"}
            variants={variants}

            className={'w-1/5 bg-white h-screen flex flex-col justify-between items-center gap-10 relative border-slate-100 border-r ' + (isExpanded ? 'py-8 px-6 ' : 'px-8 py-6')}
        >

            <div className='flex flex-col justify-center items-center gap-8'>
                {isExpanded ? (<div id='logo-box'>
                    <img src='/app_logo.png' className='w-auto h-auto'  />
                </div>) : (<div className='flex justify-center items-center'><img src='/app_logo.png' className='w-auto h-auto'/></div>)}

                <div id='navlinks-box' className='flex flex-col justify-center items-start gap-5 w-full mt-5'>
                    {navItems.map((item, index) => (
                        <Link 
                        id={item.id}
                        to={item.link}
                         key={item.name}
                         
                          className={'flex justify-start items-center gap-4 w-full cursor-pointer rounded-xl ' + (activeNavIndex === index ? 'bg-[#ff5757] text-white ' : 'text-black ') + (isExpanded ? 'px-6 py-2 ' : 'p-2 ')} 
                          onClick={() =>{
                            setActiveNavIndex(index)
                            }}
                           >
                            <div className='bg-[#ff5757] text-white p-2 rounded-full'>
                                <item.icon className='md:w-6 w-4 h-4 md:h-6' />
                            </div>

                            <span className={'text-lg ' + (isExpanded ? 'flex' : 'hidden')}>{item?.name}</span>
                        </Link>
                    ))}
                </div>
            </div>

            <div id='expanded-icon' className='bg-[#ff5757] text-white p-2 rounded-full cursor-pointer absolute -right-4 bottom-20 md:bottom-40 md:flex hidden' onClick={() => (setIsExpanded(!isExpanded))}>
                <FaArrowRight />
            </div>

            <div id='logout-box' className='w-full flex flex-col justify-start items-center gap-4 cursor-pointer'>
                <div className='bg-slate-700 w-full h-[0.5px]'></div>
                <div className='flex justify-center items-center gap-2'>
                    <MdLogout className='text-black h-6 w-6' />
                    <span className={'text-black text-lg ' + (isExpanded ? 'flex' : 'hidden')}>Logout</span>
                </div>
            </div>

        </motion.section>
    )
}

export default Sidebar