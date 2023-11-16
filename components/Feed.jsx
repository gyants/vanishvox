import PostCard from './PostCard'

const PostList = ({data}) => {
    const sortedPosts = data.sort((a, b) => {
        // Assuming the timestamp field is 'postTime' and is a Date string
        return new Date(b.postTime) - new Date(a.postTime);
    });
    return(
        <div className='py-8 flex flex-wrap gap-12 w-[65%]'>
                {sortedPosts.map((post) => (
                    <PostCard 
                    key={post._id}
                    data={post}
                    />
                ))}
        </div> 
    )
}

const Feed = ({ posts }) => {   
    return (
        <>
            <div className='flex post-header text-bold py-4'>
                <p>People are thinking...</p>
            </div>
            <PostList
                data={posts}
            />
        </>
    )
}

export default Feed