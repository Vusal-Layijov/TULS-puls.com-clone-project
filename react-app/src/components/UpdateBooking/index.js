import React,{useState, useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { authenticate } from '../../store/session';
import { update_booking_thunk } from "../../store/bookings";
import { get_bookings_thunk } from "../../store/bookings";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export function UpdateBooking(){
    const {id} = useParams()
    const dispatch = useDispatch()
    const history = useHistory()
    const ownerId = useSelector(state => state.session.user?.id)
    const bookings = useSelector(state => Object.values(state.bookings.all_bookings))
    const userBookings=useSelector(state => state.session.user.bookings)
    const currentBooking = userBookings.find(book => book.id == id)
    console.log('undiiiiiiiiiii',currentBooking)
    const [validationErrors, setValidationErrors] = useState({
        date: null,
        notes: '',
        city: '',
        address: ''
    })
//new Date(currentBooking.date)
    const [formData, setFormData] = useState({
        date: null,
        notes: currentBooking.notes,
        city: currentBooking.city,
        address: currentBooking.address
    });

    useEffect(()=> {
        dispatch(get_bookings_thunk())
    }, [dispatch])
    if(!ownerId) history.push('/')
    if(!bookings) return null

    const booking = bookings.find(book => book.id == id)
   

    const handleChange = (event) =>{
        setFormData({...formData, [event.target.name]:event.target.value})
    } 

    const handleDateChange = (date) =>{
        const formattedDate = date.toISOString().slice(0,10)
        setFormData({...formData, date:date, formattedDate})
    }

    const onSubmit = async (event) =>{
        event.preventDefault()
        const forUpdate = {
            date:formData.formattedDate,
            notes: formData.notes,
            address: formData.address,
            city: formData.city,
        }
        let booked = booking.service.bookings.find(booking => new Date(booking.date).toISOString().slice(0,10) == forUpdate.date)
        let currentDate = new Date().toISOString().slice(0,10)
        const errors = {}
        if (booked && booking.user_id != ownerId) errors.date = "This service is booked for this day please choose another day"
        if(!forUpdate.date) errors.date="Please provide updated date for your booking"
        if (forUpdate.date < currentDate) errors.date = 'Cannot book past date'
        if (!forUpdate.address) errors.address = 'Address is required'
        if (!forUpdate.city) errors.city = 'City is required'
        if (!Object.values(errors).length) {

            await dispatch(update_booking_thunk(+id,forUpdate))
            await dispatch(authenticate())
            history.push(`/users/${ownerId}`)
        } else {
            setValidationErrors(errors)
        }
    }


    

    return(
        <>
            <form style={{ paddingTop: '100px' }} onSubmit={onSubmit} >
                <label>
                    Date: <span className="validationErrors" >{validationErrors.date}</span>
                    <DatePicker selected={formData.date} onChange={handleDateChange}  />
                </label>
                <label>
                    Update your address:<span className="validationErrors" >{validationErrors.address}</span>
                    <input type="text" name="address" value={formData.address} onChange={handleChange} />
                </label>
                <label>
                    Update city:<span className="validationErrors" >{validationErrors.city}</span>
                    <input type="text" name="city" value={formData.city} onChange={handleChange} />
                </label>
                <label>
                    Update Notes:
                    <textarea name="notes" value={formData.notes} onChange={handleChange} />
                </label>
                <button type="submit" >Submit</button>
            </form>        
        </>
    )
}