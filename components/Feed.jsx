import PostCard from './PostCard'

const PostList = ({data, openModal}) => {
    const sortedPosts = data.sort((a, b) => {
        // Assuming the timestamp field is 'postTime' and is a Date string
        return new Date(b.postTime) - new Date(a.postTime);
    });
    return(
        <div className='mb-6 flex flex-wrap w-full gap-6 justify-center'>
                {sortedPosts.map((post) => (
                    <PostCard 
                    key={post._id}
                    data={post}
                    openModal={openModal}
                    />
                ))}
        </div> 
    )
}

const Feed = ({ posts, openModal }) => {   
    return (
        <>
            <h2 className='title'>People are thinking...</h2>

            <PostList
                data={posts}
                openModal={openModal}
            />
        </>
    )
}

export default Feed