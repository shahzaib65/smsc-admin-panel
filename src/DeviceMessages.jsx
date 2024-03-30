import React,{useState,useEffect} from 'react'
import { MdOutlineMessage, MdLogout } from 'react-icons/md'
import { BsPersonVcardFill } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa"
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';
import Header from './components/Header'
import DataTable from "react-data-table-component";
import axios from 'axios';
import moment from "moment"


const DeviceMessages = () => {

  const variants = {
    expanded: { width: "20%" },
    nonExpanded: { width: "5%" }
}

const navItems = [
    {   
         "id": "0",
        name: "Message",
        icon: MdOutlineMessage,
        link: "/message"
    },
    {
       "id": "1",
        name: "Registered users",
        icon: BsPersonVcardFill,
        link:"/register"
    },
     {
       "id": "2",
        name: "Received messages",
        icon: MdOutlineMessage,
        link:"/received"
    }
]

 const [activeNavIndex, setActiveNavIndex] = useState(2);
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

    useEffect(()=>{
      getMessage()
    },[]);






   const[messages,setMessages] = useState([])
   const getMessage = async()=>{
    axios.get("https://agile-sweatshirt-ox.cyclic.app/api/received/messages")
    .then((response)=>{
      setMessages(response.data.data);
    }).catch((err)=>{
      console.log(err.message)
    })
   }

 

  const columns = [
    {
      name: "Date",
      selector: (row) => `${moment(parseInt(row.time)).format("DD-MMM-YYYY hh:mm:ss")}`
    },
    {
         name: "service_center_address",
      selector: (row) => `${row.service_center_address}`
    },
    {
         name: "SenderID",
      selector: (row) => `${row.originated_address}`
    },
    {
         name: "Content",
      selector: (row) => `${row.message_body}`
    },
     {
         name: "Status",
      selector: (row) => `${row.status}`
    },
    

  ];


  const customStyles = {
    headRow: {
      style: {
        backgroundColor: "#ff5757",
        color: "#fff",
        
      },
    },
    header: {
      style: {
        textAlign: 'center',
      },
    },
    headCells: {
      style: {
        fontSize: "16px",
        fontWeight: "500",
        textAlign: 'center'
      },
    },
    cells: {
      style: {
        fontSize: "14px",
        backgroundColor: "white",
        color: "#333" /* set font color */,
        border: "0.1px solid #ccc",
      },
    },
    pagination: {
      style: {
        color: "#ff5757",
      },
      button: {
        color: "blue",
      },
    },
  };

return (
<main className='w-full bg-slate-200 h-screen flex justify-between items-start'>
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

 <section className='w-4/5 grow bg-white h-screen overflow-y-auto flex flex-col justify-start items-center gap-2 p-4'>
<Header/>

   <div className='w-full h-auto mt-5 gap-4 bg-slate-100 rounded-xl p-5 flex flex-col'>
<DataTable
          columns={columns}
          fixedHeader
          pagination
          data={messages}
          customStyles={customStyles}
        />
    </div>

       </section>

    </main>
  )
}

export default DeviceMessages
