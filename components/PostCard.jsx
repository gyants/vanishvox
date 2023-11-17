"use client"

import { calculateTimeRemaining } from "@/lib/utils";
import Cardmenu from "./Cardmenu";

const PostCard = ({data, openModal}) => {
    const postUrl = `/posts/${data._id}`;
    const timeRemaining = calculateTimeRemaining(data.postTime)

    if(timeRemaining == '0m') return <></>
    return (
        // Lazy version will fix later
        <a 
        href=''
        className='post md:max-w-[264px]'
        onClick={(e) => {
            e.preventDefault()
            openModal(data._id)
        }}
        >
        {/* <a href='#' className='bg-purple-500 rounded-[20px] px-7 py-5 min-h-[203px] w-full md:max-w-[264px] text-white flex flex-col justify-between'> */}
            <span className="font-semibold text-base line-clamp-4">{data.message}</span>
            <Cardmenu
                data={data}
                timeRemaining={timeRemaining}
                type={'card'}
            />
        </a>
    )

}

export default PostCard