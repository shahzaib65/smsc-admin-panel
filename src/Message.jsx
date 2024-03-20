import React,{useState} from 'react'
import Sidebar from './sections/Sidebar'
import Header from './components/Header'
import DataTable from "react-data-table-component";

const Message = () => {

  const [selectedOption, setSelectedOption] = useState('option1');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const [messages,setMessage] = useState([
    {
        "date": "12-12-23",
        "country": "South Africa Vodacom: 65501",
        "status": "Delivered",
        "SenderID": "TikTok",
        "Content": " Your TikTok code is 467382",
        "Phone": "2782778111/SA",
        "Delay": "5s / 7s"
    },
      {
        "date": "12-12-23",
        "country": "South Africa Vodacom: 65501",
        "status": "Delivered",
        "SenderID": "TikTok",
        "Content": " Your TikTok code is 467382",
        "Phone": "2782778111/SA",
        "Delay": "5s / 7s"
    },
      {
        "date": "12-12-23",
        "country": "South Africa Vodacom: 65501",
        "status": "Delivered",
        "SenderID": "TikTok",
        "Content": " Your TikTok code is 467382",
        "Phone": "2782778111/SA",
        "Delay": "5s / 7s"
    }
  ])

  const columns = [
    {
      name: "Date",
      selector: (row) => `${row.date}`
    },
    {
      name: "Country MCCMNC	",
      selector: (row) => `${row.country}`
    },
    {
         name: "DLR/Status",
      selector: (row) => `${row.status}`
    },
    {
         name: "SenderID",
      selector: (row) => `${row.SenderID}`
    },
    {
         name: "Content",
      selector: (row) => `${row.Content}`
    },
     {
         name: "Phone/SMSC",
      selector: (row) => `${row.Phone}`
    },
     {
         name: "Delay",
      selector: (row) => `${row.Delay}`
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
   <Sidebar/>
   <section className='w-4/5 grow bg-white h-screen overflow-y-auto flex flex-col justify-start items-center gap-2 p-4'>
    <Header/>

    <div id='main-section' className='w-full h-auto mt-5 gap-4 bg-slate-100 rounded-xl p-5 flex flex-col'>
<div className=' grid lg:grid-cols-3 grid-cols-1 gap-3 '>

     <div className=' flex flex-col gap-3 '>
      <h1 className='text-lg text-black font-semibold'>Sender ID</h1>
      <select className='focus:ring-1 focus:ring-inset focus:ring-black outline-none rounded-xl border-0' id="dropdown" value={selectedOption} onChange={handleChange}>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>

     </div>

     <div className=' flex flex-col gap-3 '>
      <h1 className='text-lg text-black font-semibold'>Select Country & Mobile Networks</h1>
      <select className='focus:ring-1 focus:ring-inset focus:ring-black outline-none rounded-xl border-0' id="dropdown" value={selectedOption} onChange={handleChange}>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>

     </div>
     
<div className=' flex flex-col gap-3 '>
      <h1 className='text-lg text-black font-semibold'> Mobile Number</h1>
      <select className='focus:ring-1 focus:ring-inset focus:ring-black outline-none rounded-xl border-0' id="dropdown" value={selectedOption} onChange={handleChange}>
        <option value="option1">3027119963</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>

     </div>

    </div>

<div className='flex flex-col lg:w-1/2 w-full '>
   <h1 className='text-lg text-black font-semibold'>Text/Content</h1>
    <textarea className='focus:ring-1 focus:ring-inset focus:ring-white outline-none rounded-xl border-0' placeholder=''></textarea>
   </div>

  <div className=' w-full h-auto flex justify-end items-end'>
<button
                type="submit"
                className="flex lg:w-auto w-full justify-center rounded-md bg-[#ff5757] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#ff5757] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff5757]"
              >
                Send Message
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
