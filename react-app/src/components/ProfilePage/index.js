import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { getUserBusinesses } from '../../store/business';
// import ManageBusinesses from '../ManageBusinesses';
import './index.css';


function UserProfilePage() {
    const history = useHistory()
    const dispatch = useDispatch();
    const { userId } = useParams();

    useEffect(() => {
  
    }, [dispatch, userId]);

    // useEffect(() => {
    //         // dispatch(getReviews());
    // }, [dispatch])


    const currentUser = useSelector(state => state.session.user)
     const userInfo = useSelector(state => state.session.user)
    // const businesses = useSelector((state) => Object.values(state.business.all_businesses))

    // const isOwner = currentUser?.id === userInfo.id

    if (!currentUser) {
        history.push('/')
    }
    return (
        <div className='maindiv'>

            <div>
                <h1>Welcome to {userInfo.username}'s Page</h1>
                <div class="profile-page-user-banner">
                    <div class="profile-page-user-icon-background" >
                        <i class="fa-solid fa-user fa-3x" ></i>
                    </div>
                    <div class="profile-page-user-info">
                        <p>Username: {userInfo.username}</p>
                        <p>Email: {userInfo.email}</p>
                    </div>

                </div>
            </div>
            <div>
                <h2>View {userInfo.username}'s Businesses</h2>
                {/* <ManageBusinesses businesses={businesses} isOwner={isOwner} /> */}
            </div>

        </div>
    )

}

export default UserProfilePage