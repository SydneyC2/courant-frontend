import Post from '../post/Post';
import './posts.scss'

const Posts = () => {
    //Temporary
    const posts = [
      {
           id: 1,
           name:'Joan Gates',
           userId: 1,
           profilePic:"https://images.pexels.com/photos/7404559/pexels-photo-7404559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
           desc:'What matters',
           img:
           'https://images.pexels.com/photos/8152003/pexels-photo-8152003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
           id: 2,
           name:'Joan Gates',
           userId: 2,
           profilePic:"https://images.pexels.com/photos/5935239/pexels-photo-5935239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
           desc: 'Information about the description'
      },
  ];

  return <div className='posts'>
    {posts.map(post=>(
      <Post post={post} key={post.id}/>
    ))}
    </div>;
};

export default Posts;
