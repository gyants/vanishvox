"use client"

import React, { useEffect, useState } from 'react';
import { redirect, useParams } from 'next/navigation'
import Cardmenu from '@/components/Cardmenu';
import { calculateTimeRemaining } from "@/lib/utils";
import Postbox from '@/components/Postbox';
import ReplyCard from '@/components/Reply';
import { useRouter } from 'next/navigation';

const RepliesList = ({data}) => {
    return(
        <div className='flex flex-wrap w-full gap-6 justify-center'>
                {data.map((reply) => (
                    <ReplyCard 
                    key={reply._id}
                    data={reply}
                    />
                ))}
        </div> 
    )
}

const Post = () => {
    // The Post and replies
    const [post, setPost] = useState(null);
    const {id} = useParams();
    const router = useRouter()
    
    // Submitting State
    const [submitting, setSubmitting] = useState(false)

    // Replies state (comments)
    const [replies, setReplies] = useState([])

    // Post box state
    const [reply, setReply] = useState({ 
        message: '',
    })

    const fetchReplies = async () => {
        const response = await fetch(`/api/posts/${id}/reply`)
        const data = await response.json()
    
        setReplies(data)
      }
    
    useEffect(() => {
    fetchReplies()
    }, [])

    // handleSubmit of PostBox
  const createReply = async (e) => {
    e.preventDefault()
    setSubmitting(true)

    try {
    // Adjust the API endpoint to target the specific post's reply addition
    const response = await fetch(`/api/posts/${id}/reply`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            message: reply.message, // Send the reply message
        }),
    });

    if (response.ok) {
        await fetchReplies(); // Refresh the posts/replys view
    } else {
        console.error('Failed to create reply');
    }
    } catch (error) {
    console.error('Error submitting reply:', error);
    } finally {
        setReply({ message: '' });
        setSubmitting(false);
    }
    
  }

    useEffect(() => {
        const getPostData = async () => {
            const response = await fetch(`/api/posts/${id}`)
            const data = await response.json()
            setPost({
                message: data.message,
                postTime: data.postTime,
                replies: data.replies
            })
            
        }
        if(id) {
            getPostData()
            
        }
    }, [id]);

    if (post === null) {
        return ( 
        <div className='global-paddings flex flex-col gap-3'>
            <div className='post flex flex-col relative'>
                Loading...
            </div>
        </div>
        )
    }

    const timeRemaining = calculateTimeRemaining(post.postTime)
    return (
        <div className='global-paddings flex flex-col gap-3'>
            <div className="post flex flex-col relative">
                    {/* PostCard */}
                    <div className='font-bold text-2xl flex items-center justify-between'>
                        <p>{post.message}</p>
                        <button 
                        onClick={() => {router.push('/')}}
                        className="w-9 h-9 flex items-center justify-center absolute right-4 top-4">
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
                submitting={submitting}
                handleSubmit={createReply}
            />
            <div className='mt-6 w-full flex flex-col gap-3 items-start'>
                <h3 className='title text-xl'>Replies</h3>
                <RepliesList
                    data={replies}
                />
            </div>
        </div>
    )
}

export default Post