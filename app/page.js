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
    <section className='py-16 flex flex-col items-center justify-center'>
      <div className='flex heading'>
        <p>Say what you want. It disappears after an hour.</p>
      </div>
      <Postbox 
        post={post}
        setPost={setPost}
        submitting={submitting}
        handleSubmit={createPost}
      />      
    </section>

    <section className='flex flex-col items-center'>
    <Feed 
      posts={posts}
    />
    </section>
    </>
  )
}

export default page