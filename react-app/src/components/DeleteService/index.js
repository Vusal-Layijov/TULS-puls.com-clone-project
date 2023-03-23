import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, useParams } from 'react-router-dom';
import { useModal } from '../../context/Modal';
import { delete_service_thunk } from '../../store/services';
import { authenticate } from '../../store/session';


export default function DeleteService({serviceId}){
    const dispatch = useDispatch()
    const { closeModal } = useModal()
    console.log('from deleteeeeeeeeee', serviceId)
    const onDelete = async () =>{
        await dispatch(delete_service_thunk(serviceId))
        await dispatch(authenticate())
        closeModal()
    }
    return (
        <div className='sonMod' >
            <h1>Confirm Delete</h1>
            <p>Are you sure you want to remove this service?</p>
            <button style={{ width: '300px' }} className="Red" type="submit" onClick={onDelete} >Yes(Delete Service)</button>
            <button style={{ width: '300px' }} className="Blk" type="submit" onClick={closeModal}>No(Keep Service)</button>
        </div>
    )
}