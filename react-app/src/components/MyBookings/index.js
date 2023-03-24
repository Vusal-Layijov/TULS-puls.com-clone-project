import { useEffect, useState } from "react";
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Route, useParams } from 'react-router-dom';
import OpenModalButton from '../OpenModalButton';
import DeleteBooking from "../DeleteBooking";

export default function MyBookings({user}){
    console.log('userrrrr bookkinggggg', user)
    if(!user) return null
    return(
        <>
            {!user.bookings[0] ? (null) : (
               <>
              <h3>Your Bookings</h3>
              {user.bookings.map((booking)=>{
                return(
                    <div key={booking.id} >
                        <p>With: {booking.service}</p>
                        <p>Date: {booking.date.slice(0,11)}</p>
                        <p>Special notes: {booking.notes}</p>
                        <NavLink to={`/bookings/${booking.id}/edit`} > <button>Update</button> </NavLink>
                        <div><OpenModalButton className={'default-button curs rd-bg'} buttonText="Delete" modalComponent={<DeleteBooking bookingId={booking.id} />} /></div>
                    </div>
                    
                )
              })

              }
              </> 
            )

            }
        </>
    )
}