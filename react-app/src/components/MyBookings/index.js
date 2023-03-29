import { useEffect, useState } from "react";
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Route, useParams } from 'react-router-dom';
import OpenModalButton from '../OpenModalButton';
import DeleteBooking from "../DeleteBooking";
import './index.css'

export default function MyBookings({user}){
    console.log('userrrrr bookkinggggg', user)
    if(!user) return null
    return(
        <>
            {!user.bookings[0] ? (null) : (
               <>

              {user.bookings.map((booking)=>{
                return(
                    <div key={booking.id} >
                        <p style={{fontWeight:'bold'}} >With: {booking.service}</p>
                        <p>Date: {booking.date.slice(0,11)}</p>
                        <p className="forDesc" >Special notes: {booking.notes}</p>
                        <div className="forbook" >
                        <NavLink to={`/bookings/${booking.id}/edit`} > <button className="globalmodal" >Update</button> </NavLink>
                        <div><OpenModalButton className={'default-button curs rd-bg'} buttonText="Delete" modalComponent={<DeleteBooking bookingId={booking.id} />} /></div>
                        </div>
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