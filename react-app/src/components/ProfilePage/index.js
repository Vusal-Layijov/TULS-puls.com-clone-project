import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { getUserBusinesses } from '../../store/business';
import MyDashboard from '../MyDashboard';
import './index.css';
import MyBookings from '../MyBookings';
import OpenModalButton from '../OpenModalButton';
import EditMembership from '../EditMembership';


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
        <div className='maindivprofile'>

            <div className='holdingimage' >
                <h1>Welcome to {userInfo.username}'s Page</h1>
                <div class="profile-page-user-mem-banner">
                    <div class="profile-page-user-icon-background" >
                        <img src={userInfo.image} alt="profile img" ></img>
                    </div>
                    <div class="profile-user-mem-info">
                        <p>Username: {userInfo.username}</p>
                        <p>Email: {userInfo.email}</p>
                        {userInfo.membership ? (<><p>Membership status:  </p> </>): null}
                        {userInfo.membership ? (<div className='heru' ><p className={userInfo.membership.type} >{userInfo.membership.type}  </p> <OpenModalButton buttonText={<i class="fas fa-edit" />} modalComponent={<EditMembership />} />   </div>) : null }
                    </div>

                </div>
            </div>
            <div className='secondmainprofile' >
                <div className='holdingdashboard' >
                    {((!userInfo.services[0]) && (!userInfo.bookings[0])) ? <div style={{height:'47vh'}} > </div> : null}
                    {userInfo.services[0] ? <h2>View {userInfo.username}'s Services</h2> : null}
                    <MyDashboard services={userInfo.services} /> 
                </div>
                <div className='holdingbookings' >
                    {userInfo.bookings[0] ? <h2>View {userInfo.username}'s Bookings</h2> : null}
                    <MyBookings user={userInfo} />
                </div>
            </div>
        </div>
    )

}

export default UserProfilePage