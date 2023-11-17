"use client"
import { calculateTimeRemaining } from "@/lib/utils";
import { Raleway, Prompt } from 'next/font/google'

const prompt = Prompt({subsets: ['thai'], weight: ['500','600','700']})
const raleway = Raleway({ subsets: ['latin'], weight: ['500','600','700'] })

const PostCard = ({data}) => {
    const postUrl = `/posts/${data._id}`;
    const timeRemaining = calculateTimeRemaining(data.postTime)

    if(timeRemaining == '0m') return <></>
    return (
        // Lazy version will fix later
        // <a href={postUrl} className='bg-purple-500 rounded-[20px] px-7 py-5 min-h-[203px] w-full md:max-w-[264px] text-white flex flex-col justify-between'>
        <a href='#' className='bg-purple-500 rounded-[20px] px-7 py-5 min-h-[203px] w-full md:max-w-[264px] text-white flex flex-col justify-between'>
            <span className="font-semibold text-base">{data.message}</span>
            <div className='card-menu w-full flex justify-between font-medium text-xs'>
                <div className='flex gap-2 items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hourglass-split" viewBox="0 0 16 16">
                        <path d="M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2h-7zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48V8.35zm1 0v3.17c2.134.181 3 1.48 3 1.48a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351z"/>
                    </svg>
                    {timeRemaining != '0m' ? <p>{timeRemaining} remaining</p>:<p></p>}
                </div>
                    <div className='flex gap-2 items-center'>
                        
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-dots-fill" viewBox="0 0 16 16">
                        <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                    </svg>
                    <p>{data.replies.length}</p>
                </div>
            </div>
        </a>
    )

}

export default PostCard