"use client"
import Postbox from '@/components/Postbox'
import Feed from '@/components/Feed'
import { useState, useEffect } from 'react'

const page = () => {
  // Submitting State
  const [submitting, setSubmitting] = useState(false)

  // Post box state
  const [post, setPost] = useState({ 
    message: '',
  })
  const maxCharLimit = 400

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

    <section className='flex flex-col gap-12 items-center mt-12 global-paddings'>
    <Feed 
      posts={posts}
    />
    </section>
    </>
  )
}

export default page