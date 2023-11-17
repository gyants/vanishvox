"use client"

const Postbox = ({post, setPost, submitting, handleSubmit, type}) => {
    
    return (
        <form
            className={type == 'post' ? `w-full max-w-[800px] relative` : `w-full relative`}
            onSubmit={handleSubmit}
            >
            <textarea
                value={post.message}
                className={type == 'post' ? `text-box min-h-[200px] w-full h-40 rounded-3xl bg-gold-500 text-gold-800`: `max-w-full text-box w-full rounded-3xl bg-gold-500 text-gold-800 `}
                placeholder={type == 'post' ? `What's on your mind..?` : `Write a reply...`}
                onChange={(e) => setPost({...post, message: e.target.value}) }
                required // Add this if the field is required
            ></textarea>
            <button
                type="submit" // Specify the button type as "submit" to trigger the form submission
                disabled={submitting}
                className="send-button w-9 h-9 rounded-full bg-white flex items-center justify-center absolute right-2 bottom-4"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16" className="text-gold-800">
                    <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                </svg>
            </button>
        </form>
    ) 
}

export default Postbox