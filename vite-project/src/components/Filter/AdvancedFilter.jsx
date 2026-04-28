import React, { useEffect, useRef, useState } from 'react'
import { CheckCircle, ChevronDown, CircleAlert, Clock, File, Monitor, Phone,Search,User,Settings,LogOut, Check, Eye, EyeIcon, SearchIcon, ChevronsUpDown } from 'lucide-react'
import { requestStatus } from '../../staticData/staticData';
import { useLocation } from 'react-router-dom';

export default function AdvancedFilter({onStatusChange,data,text}) {
    console.log(data)


    // const selectedItem = data.find(item => item.status === DefaultStatus) || data[0];

    const [Data,setData] = useState(data);

    const [isFilteropened,setisFilteropened] =useState(false);
    const [searchValue,setSearchValue]=useState('');

    const [filterValue,setFilterValue]=useState({
        userId:null,
        value:'',
    })
    
    const [activeStatus, setActiveStatus] = useState(filterValue.userId);  
    const [isHoveringList, setIsHoveringList] = useState(false); 
    const filterRef = useRef();

    useEffect(() => {
        const filtredData = data.filter(item =>{ 
            
            return item?.firstName?.toLowerCase().startsWith(searchValue.toLowerCase()) || item?.lastName?.toLowerCase().startsWith(searchValue.toLowerCase()) ;
        }) ;
        setData(filtredData)

    }, [data,searchValue]);

   

    //Closing the filter automatically when the user clicke away,
    
    useEffect(() => {
    function handleClickOutside(event) {
        if (filterRef.current && !filterRef.current.contains(event.target)) {
            setisFilteropened(false);
        }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
        document.removeEventListener('mousedown', handleClickOutside);
    };
    }, []);
   
  return (
         <div ref={filterRef} className='relative w-full cursor-pointer bg-white outline-none border border-gray-200 focus:outline-none  focus:border-2 focus:border-blue-500 focus:duration-50 focus:ease-in-out rounded-xl' onClick={()=>setisFilteropened(!isFilteropened)}>
                <ChevronsUpDown className='absolute w-4 h-4 text-gray-500 flex justify-self-end top-3 right-5'/>
                <div  className={`flex items-center justify-start h-10 bg-none outline-none focus:outline-none  ${`${isFilteropened ? 'border-2 border-blue-500 duration-50 ease-in-out':'border border-gray-400/20'}  `} rounded-xl w-full py-2 px-3  text-sm text-gray-800`}>
               
                    <span className='text-gray-500 text-sm'>{searchValue ==='' ? `Search or type ${text} name...` :searchValue}</span>
                 
                </div>
                {/*popup  */}
                <div onMouseEnter={() => setIsHoveringList(true)} onMouseLeave={() => setIsHoveringList(false)} className={`${isFilteropened?'block':'hidden'} absolute top-12 right-0 w-32 md:w-38 lg:w-full h-auto p-1 bg-white rounded-xl shadow-lg z-40 animate-in slide-in-from-top duration-300 max-h-50 overflow-y-auto`}>
                    <div className='flex flex-col gap-y-2'>
                        <div className='relative'>

                            <input onClick={(e)=>{e.stopPropagation();e.preventDefault()}}  onChange={(e)=>{setFilterValue(e.target.value);setSearchValue(e.target.value)}} value={searchValue} type="text" placeholder={`Type a ${text} name...`} className='text-gray-500 text-sm  w-full py-3 pl-8 outline-none font-semibold border-b border-b-gray-200'/>
                            <SearchIcon className='absolute  w-4 h-4 text-gray-500 bottom-3 left-2.5'/>
                        </div>
                        <div className='text-gray-700 font-semibold text-xs first-letter:capitalize p-2'>existing {text}s</div>
                        <div className='flex flex-col gap-y-1'>
                            {
                                    Data.length > 0 ? Data.map(e => {
                                        const isActiveItem = activeStatus === e.id && !isHoveringList;
                                        return (
                                                    <div key={e.id}  onClick={() => { 

                                                        setFilterValue({userId: e.id, value: e.firstName});
                                                        setSearchValue(e.firstName)
                                                        setActiveStatus(e.id);
                                                        setisFilteropened(false); 
                                                        onStatusChange(e.id);

                                                        }}
                                                        className={`${isActiveItem  ? 'bg-[hsl(var(--accent))] text-white'  : 'bg-white'} flex gap-x-3 items-center justify-start p-2 hover:bg-[hsl(var(--accent))] group rounded-xl transition-colors duration-200 ease-in-out cursor-pointer`}>
                                                        <Check className={`w-4 h-4 transition-colors duration-300 ${ isActiveItem ? 'visible text-white group-hover:text-black'  : 'invisible group-hover:visible group-hover:text-white' }`} />

                                                        <div className={`text-sm transition-colors duration-300 capitalize ${isActiveItem ? 'text-white group-hover:text-black' : 'text-black group-hover:text-white'}`}>
                                                            {`${e.firstName} ${e.lastName}`}
                                                        </div>
                                                    </div>
                                                );
                                    }) : 
                                    <div className='text-black text-sm first-letter:capitalize p-2'>not found</div>
                            }
                        </div>
                    </div>
                </div>
                {/*  */}
            </div>

)
}
