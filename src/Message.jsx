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


const Message = () => {

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

 const [activeNavIndex, setActiveNavIndex] = useState(0);
    const [isExpanded, setIsExpanded] = useState(true);
    const [buttonText, setButtonText] = useState('Send Message');
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

  const [selectedOption, setSelectedOption] = useState(0);
  const [senderID, setSenderID] = useState(null);
  const [content, setContent] = useState(null);


  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

   const handleInput = (event) => {
    setSenderID(event.target.value);
  };

   const handleContent = (event) => {
    setContent(event.target.value);
  };

  useEffect(()=>{
    usersList();
  },[]);

  const[users,setUsers] = useState([])
  const usersList = () => {
    axios.get("https://agile-sweatshirt-ox.cyclic.app/api/user/fetch")
    .then((data)=>{
      setUsers(data.data.users);
           //  console.log(data.data.users);
    }).catch((err)=>{
      console.log(err.message);
    })
  }

  function generateCode() {
  const code = Math.floor(100000 + Math.random() * 900000);
  return code.toString().substring(0, 6); // Ensure it's exactly 6 digits
}

   const sendMessage = (senderID,content,phone_number) => {
   const generatedCode = generateCode();
 if (/[0-9]/.test(content)) {
     // console.log('Input contains numbers from 0 to 9');
        axios.get(`https://cp.inmobilews.com/API/SendSMS?username=adam.poole85&apiId=A4b9tySp&json=True&destination=${phone_number}&source=${senderID}&text=${content}`)
    .then((response)=>{
      setButtonText("Send Message")
      setContent('')
      setSenderID('')
      setSelectedOption(0)
      saveMessage(senderID,content,phone_number);
    }).catch((err)=>{
      console.log(err.message);
    })
    } else {
      let data = generatedCode + ` ${content}`
      //console.log('Input does not contain numbers from 0 to 9');
        axios.get(`https://cp.inmobilews.com/API/SendSMS?username=adam.poole85&apiId=A4b9tySp&json=True&destination=${phone_number}&source=${senderID}&text=${data}`)
    .then((response)=>{
      setButtonText("Send Message")
      setContent('')
      setSenderID('')
      setSelectedOption(0)
      saveMessage(senderID,content,phone_number);
    }).catch((err)=>{
      console.log(err.message);
    })
    }

   };


   const saveMessage = async(senderID,content,phone_number)=>{
    const data = {
       "senderID": senderID,
      "content": content,
      "phone_number": phone_number,
     
      "delivered": "Delivered"
    }
    axios.post("https://agile-sweatshirt-ox.cyclic.app/api/admin/message/register",data)
    .then((data)=>{
         getMessage();
    })
    .catch((err)=>{
      console.log(err.message)
    })
   }

   const[messages,setMessages] = useState([])
   const getMessage = async()=>{
    axios.get("https://agile-sweatshirt-ox.cyclic.app/api/admin/message/fetch")
    .then((response)=>{
      setMessages(response.data.data);
    }).catch((err)=>{
      console.log(err.message)
    })
   }

 

  const columns = [
    {
      name: "Date",
      selector: (row) => `${moment(row.createAt).format("DD-MM-YYYY")}`
    },
    {
         name: "DLR/Status",
      selector: (row) => `${row.delivered}`
    },
    {
         name: "SenderID",
      selector: (row) => `${row.senderID}`
    },
    {
         name: "Content",
      selector: (row) => `${row.content}`
    },
     {
         name: "Phone/SMSC",
      selector: (row) => `${row.phone_number}`
    },
     {
         name: "Delay",
      selector: (row) => `2 s`
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

    <div id='main-section' className='w-full h-auto mt-5 gap-4 bg-slate-100 rounded-xl p-5 flex flex-col'>
<div className=' grid lg:grid-cols-2 grid-cols-1 gap-3 '>

     <div className=' flex flex-col gap-3 '>
      <h1 className='text-lg text-black font-semibold'>Sender ID</h1>
      <input className='focus:ring-1 focus:ring-inset focus:ring-black outline-none rounded-xl border-0' id="dropdown" value={senderID} onChange={handleInput}>
        
      </input>

     </div>

    
     
<div className=' flex flex-col gap-3 '>
      <h1 className='text-lg text-black font-semibold'> Mobile Number</h1>
      <select className='focus:ring-1 focus:ring-inset focus:ring-black outline-none rounded-xl border-0' value={selectedOption} onChange={handleChange}>
      <option value="default">Select phone number</option>
         {users.map(item => (
          <option key={item._id} value={item._phone_number}>{item.phone_number}</option>
        ))}
      </select>

     </div>

    </div>

<div className='flex flex-col lg:w-1/2 w-full '>
   <h1 className='text-lg text-black font-semibold'>Text/Content</h1>
    <textarea value={content} onChange={handleContent} className='focus:ring-1 focus:ring-inset focus:ring-white outline-none rounded-xl border-0' placeholder=''></textarea>
   </div>

  <div className=' w-full h-auto flex justify-end items-end'>
<button
               type='submit'
                className="flex lg:w-auto w-full justify-center rounded-md bg-[#ff5757] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#ff5757] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff5757]"
                onClick={()=>{
                  sendMessage(senderID,content,selectedOption);
                  setButtonText('Sending message')
                  }}
              >
                {buttonText}
              </button>
    </div>


    </div>

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

export default Message
