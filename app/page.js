"use client"
import Postbox from '@/components/Postbox'
import Feed from '@/components/Feed'
import Modal from '@/components/Modal'
import { useState, useEffect } from 'react'
import useRepliesUpdate from '@/lib/utils'

const maxCharLimit = 400


const page = () => {
  // Modal Controls 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openedPost, setOpenedPost] = useState({})
  const [reply, setReply] = useState({
    message: ''
  })
  const [replies, setReplies] = useState([])
  const [replySubmitting, setReplySubmitting] = useState(false)
  const [postId, setPostId] = useState(null)
  
  const createReply = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    if(reply.message.length > maxCharLimit) { 
        alert('Message is too long')
        setReplySubmitting(false);
        return
        
      }
    try {

    const response = await fetch(`/api/posts/${postId}/reply`, {
      method: 'POST',
      body: JSON.stringify({
        message: reply.message,
      }),
    });

    if (response.ok) {
        await fetchReplies(postId);
    } else {
        console.error('Failed to create reply');
    }

    } catch (error) {
    console.error('Error submitting reply:', error);
    } finally {
        setReply({ message: '' });
        setReplySubmitting(false);
    }
    
  }

  const fetchReplies = async (id) => {
    const response = await fetch(`/api/posts/${id}/reply`)
    const data = await response.json()
    setReplies(data)
  }
  

  const fetchPostFromId = async (id) => {
    const response = await fetch(`/api/posts/${id}`)
    const data = await response.json()
    if (data) { // Check if data is not undefined
      setOpenedPost(data);
      setReplies(data.replies)
      setIsModalOpen(true);
    }
  }

  const openModal = async (id) => {
    setPostId(id)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setOpenedPost({})
    setReplies([])
    setReply({message: ''})
    setPostId(null)
  }

  useEffect(() => {
    if(postId) fetchPostFromId(postId)
  }, [postId])

  // Submitting State
  const [submitting, setSubmitting] = useState(false)

  // Post box state
  const [post, setPost] = useState({ 
    message: '',
  })
  

  // Feed states
  const [posts, setPosts] = useState([])


  const fetchPosts = async () => {
      const response = await fetch('/api/posts')
      const data = await response.json()
    
      setPosts(data)
    }
  
  useEffect(() => {
    fetchPosts()
  }, [])

  // handleSubmit of PostBox
  const createPost = async (e) => {
    e.preventDefault()
    setSubmitting(true)

    if(post.message.length > maxCharLimit) { 
      alert('Message is too long')
      return
    }

    try {
      
      const response = await fetch('/api/posts/new',
      {
        method: 'POST',
        body: JSON.stringify({
          message: post.message,
        })
      })
      if (response.ok) {
        await fetchPosts(); // Fetch posts after successful submission
      } else {
        // Handle response errors if necessary
        console.error('Failed to create post');
      }
    } catch (error) {
      console.log(error)
    } finally {
      setPost({ message: '' });
      setSubmitting(false)
    }
    
  }

  // reload feed after posting

  return (
    <>
    <section className='global-paddings flex flex-col gap-6 items-center'>
      <div className='title'>
        <h1>Say what you want. 
          <br className='sm:hidden'/>
          It disappears after an hour.</h1>
      </div>
      <Postbox 
        post={post}
        setPost={setPost}
        submitting={submitting}
        handleSubmit={createPost}
        maxCharLimit={maxCharLimit}
        type={'post'}
      />   
    </section>

    <section className={`flex flex-col gap-12 items-center mt-12 global-paddings`}>
    <Feed 
      posts={posts}

      openModal={openModal}
    />
    </section>

    {isModalOpen &&
    <Modal
        post={openedPost}
        repliesList={replies}
        reply={reply}
        setReply={setReply}
        replySubmitting={replySubmitting}
        createReply={createReply}
        closeModal={closeModal}
        maxCharLimit={maxCharLimit}
    />}
    </>
  )
}

export default page