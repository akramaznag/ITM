
export const OpenedStatus=()=>{
    return(

     <div className='flex bg-blue-100 px-2  h-5 rounded-xl text-xs text-[hsl(210,100%,45%)] font-semibold w-fit gap-x-2 items-center justify-center'>
        <span className='block h-[7px] w-[7px] rounded-full bg-[hsl(210,100%,45%)]'></span>
        <span className='block font-semibold'>Opened</span>                           
    </div>
    )
}
export const NotRequestedStatus=()=>{
    return(

     <div className='flex bg-slate-100 px-2  h-5 rounded-xl text-xs text-slate-500 font-semibold w-fit gap-x-2 items-center justify-center'>
        <span className='block h-[7px] w-[7px] rounded-full bg-slate-500'></span>
        <span className='block font-semibold'>Not Requested</span>                           
    </div>
    )
}

export const Status=({bgColor,dotColor,textColor,content})=>{
    return(

     <div className={`flex ${bgColor} px-2  h-5 rounded-xl text-xs ${textColor} font-semibold w-fit gap-x-2 items-center justify-center`}>
        <span className={`block h-[7px] w-[7px] rounded-full ${dotColor}`}></span>
        <span className='block font-semibold'>{content}</span>                           
    </div>
    )
}

