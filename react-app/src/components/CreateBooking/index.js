import { useEffect, useState } from "react";
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { create_nbooking_thunk } from "../../store/bookings";
import './index.css'
import { authenticate } from "../../store/session";
import { load_services_thunk } from "../../store/services";


import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function CreateBooking() {
    const {id} = useParams()
    console.log( 'nediiiiiiii', typeof(+id))
    const history = useHistory()
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(load_services_thunk(+id))
    },[dispatch])
    const ownerId = useSelector((state => state.session.user.id))
    let services = useSelector(state => Object.values(state.services.all_services))
    let service = services.find(ser => ser.id == id)
    const [validationErrors, setValidationErrors] = useState({
        date:'',
        notes:'',
        city:'',
        address:''
    })
    const [formData, setFormData] = useState({
        date: null,
        notes: "",
        city:'',
        address:''
    });

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleDateChange = (date) => {
        const formattedDate = date.toISOString().slice(0, 10);
        // console.log('bu nediiiiiii',typeof(date.toISOString().slice(0, 10)))
        setFormData({ ...formData, date: date ,formattedDate});
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        
        const newBooking = {
            date:formData.formattedDate,
            notes:formData.notes,
            address:formData.address,
            city:formData.city,
            service_id:id
        }


        let booked = service.bookings.find(booking => new Date(booking.date).toISOString().slice(0,10)==newBooking.date)



        const currentDtae= new Date().toISOString().slice(0,10)
        const errors = {}
        if(booked) errors.date="This service is booked for this day please choose another day"
        if (!newBooking.date) errors.date='Date is required'
        if(newBooking.date<currentDtae) errors.date='Cannot book past date'
        if(!newBooking.address) errors.address ='Address is required'
        if(!newBooking.city) errors.city='City is required'
        console.log('boooking', newBooking)
        if(!Object.values(errors).length){

            await dispatch(create_nbooking_thunk(newBooking))
            await dispatch(authenticate())
            history.push(`/users/${ownerId}`)
        }else{
            setValidationErrors(errors)
        }
    };

    return (

        <form style={{paddingTop:'100px'}} onSubmit={onSubmit}>
            <label>
                Date:<span className="validationErrors" >{validationErrors.date}</span>
                <DatePicker
                    selected={formData.date}
                    onChange={handleDateChange}
                    required
                />
            </label>
            <br />
            <label>
                Provide your address:<span className="validationErrors" >{validationErrors.address}</span>
                <input type="text" name="address" value={formData.address} onChange={handleChange} />
            </label>
            <label>
                Which city:<span className="validationErrors" >{validationErrors.city}</span>
                <input type="text" name="city" value={formData.city} onChange={handleChange} />
            </label>
            <label>
                Notes:
                <textarea name="notes" value={formData.notes} onChange={handleChange} />
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
}