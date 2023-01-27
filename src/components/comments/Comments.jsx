import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import './Comments.scss';

const Comments = () => {

    const {currentUser} = useContext(AuthContext)
    //Temporary
    const comments = [
        {
            id: 1,
            desc: 'Information about the description',
             name:'Simon George',
             userId: 1,
             profilePicture:
             'https://images.pexels.com/photos/8152003/pexels-photo-8152003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            id: 2,
            desc: 'Information about the description',
             name:'Joan Gates',
             userId: 2,
             profilePicture:
             'https://images.pexels.com/photos/8152003/pexels-photo-8152003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
    ];

  return (
    <div className='comments'>
        <div className="write">
        <img src={currentUser.profilePic} alt="" />
        <input type="text" placeholder='Write a comment' />
        <button>Send</button>
        </div>
        {comments.map((comment)=>(
            <div className="comment">
                <img src={comment.profilePicture} alt="" />
                <div className="info">
                    <span>{comment.name}</span>
                    <p>{comment.desc}</p>
                </div>
                <span className='date'>2 hours ago</span>
            </div>
        ))
    }
      
    </div>
  );
};

export default Comments
