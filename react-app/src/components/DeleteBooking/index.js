import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, useParams } from 'react-router-dom';
import { useModal } from '../../context/Modal';
import { authenticate } from '../../store/session';
import { delete_booking_thunk } from '../../store/bookings';

export default function DeleteBooking({bookingId}) {
    const dispatch = useDispatch()
    const {closeModal} =useModal()
    const onDelete = async () =>{
        await dispatch(delete_booking_thunk(bookingId))
        await dispatch(authenticate())
        closeModal()
    }
    return(
        <div className='sonMod' >
            <h1>Confirm Delete</h1>
            <p>Are you sure you want to remove this booking?</p>
            <button style={{ width: '300px' }} className="Red" type="submit" onClick={onDelete} >Yes(Delete Booking)</button>
            <button style={{ width: '300px' }} className="Blk" type="submit" onClick={closeModal}>No(Keep Booking)</button>
        </div>
    )
}