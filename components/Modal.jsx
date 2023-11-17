"use client"
import React, { useEffect, useState } from 'react';
import Cardmenu from '@/components/Cardmenu';
import { calculateTimeRemaining } from "@/lib/utils";
import Postbox from '@/components/Postbox';
import ReplyCard from '@/components/Reply';


const RepliesList = ({data}) => {
    return(
        <div className='flex flex-col w-full gap-6 justify-center'>
                {data.map((reply) => (
                    <ReplyCard 
                    key={reply._id}
                    data={reply}
                    />
                ))}
        </div> 
    )
}

const Modal = ({post, repliesList, reply, setReply, replySubmitting, createReply, maxCharLimit, closeModal}) => {
    const timeRemaining = calculateTimeRemaining(post.postTime)
    const [replies, setReplies] = useState([...repliesList])

    useEffect(() => {
        setReplies([...repliesList]);
      }, [repliesList]);

    return (
        <div className='fixed left-0 w-full h-full overflow-auto z-40 backdrop-blur-lg bg-opacity-50 bg-black'>
        <div className={`py-24 global-paddings flex flex-col gap-3 items-center`}>
            <div className="post flex flex-col relative max-w-[840px]">
                    {/* PostCard */}
                    <div className='font-bold text-2xl flex items-start justify-between gap-6'>
                        <p>{post.message}</p>
                        <button 
                        onClick={closeModal}
                        className="w-9 h-9 flex items-center justify-center ">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.7656 14.6336C15.8399 14.708 15.8988 14.7962 15.9391 14.8933C15.9793 14.9904 16 15.0945 16 15.1996C16 15.3047 15.9793 15.4088 15.9391 15.5059C15.8988 15.603 15.8399 15.6912 15.7656 15.7656C15.6912 15.8399 15.603 15.8988 15.5059 15.9391C15.4088 15.9793 15.3047 16 15.1996 16C15.0945 16 14.9904 15.9793 14.8933 15.9391C14.7962 15.8988 14.708 15.8399 14.6336 15.7656L8 9.13094L1.36637 15.7656C1.21626 15.9157 1.01268 16 0.8004 16C0.588121 16 0.384536 15.9157 0.234432 15.7656C0.0843276 15.6155 4.18453e-09 15.4119 0 15.1996C-4.18453e-09 14.9873 0.0843276 14.7837 0.234432 14.6336L6.86906 8L0.234432 1.36637C0.0843276 1.21626 -1.5816e-09 1.01268 0 0.8004C1.5816e-09 0.588121 0.0843276 0.384536 0.234432 0.234432C0.384536 0.0843276 0.588121 1.5816e-09 0.8004 0C1.01268 -1.5816e-09 1.21626 0.0843276 1.36637 0.234432L8 6.86906L14.6336 0.234432C14.7837 0.0843276 14.9873 -4.18453e-09 15.1996 0C15.4119 4.18453e-09 15.6155 0.0843276 15.7656 0.234432C15.9157 0.384536 16 0.588121 16 0.8004C16 1.01268 15.9157 1.21626 15.7656 1.36637L9.13094 8L15.7656 14.6336Z" fill="white"/>
                            </svg>
                        </button>
                    </div>
                    <Cardmenu 
                        data={post}
                        timeRemaining={timeRemaining}
                        type={'post'}
                    />
            </div>
            <Postbox 
                post={reply}
                type={'reply'}
                setPost={setReply}
                submitting={replySubmitting}
                handleSubmit={createReply}
                maxCharLimit={maxCharLimit}
            />
            <div className='mt-6 w-full flex flex-col gap-3 items-start max-w-[840px]'>
                <h3 className='title text-xl'>Replies</h3>
                <div className='pt-2 pb-8 overflow-auto w-full'>
                <RepliesList
                    data={replies}
                /></div>
            </div>
        </div>
        </div>
    )

}

export default Modal