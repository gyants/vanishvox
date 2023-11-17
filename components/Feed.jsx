import PostCard from './PostCard'

const PostList = ({data}) => {
    const sortedPosts = data.sort((a, b) => {
        // Assuming the timestamp field is 'postTime' and is a Date string
        return new Date(b.postTime) - new Date(a.postTime);
    });
    return(
        <div className='flex flex-wrap w-full gap-6 justify-center'>
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
            <h2 className='title'>People are thinking...</h2>

            <PostList
                data={posts}
            />
        </>
    )
}

export default Feed