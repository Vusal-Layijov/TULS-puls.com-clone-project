import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { update_sevice_thunk } from '../../store/services';
import { authenticate } from '../../store/session';

export default function UpdateService(){
    const {id} = useParams()
    const dispatch = useDispatch()
    const history = useHistory()
    const ownerId = useSelector(state => state.session.user.id)
    const service = useSelector(state =>state.session.user.services.find(ser =>ser.id==id))
    console.log('priceeeeeeeeeeee', service.state)

    const [name, setName] = useState(service.name)
    const [description, setDescription] = useState(service.description);
    const [price, setPrice] = useState(service.price);
    const [city, setCity] = useState(service.city)
    const [state, setState] = useState(service.state)
    const [service_type_id, setServiceTypeId] = useState(null)


    const [validationErrors, setValidationErrors] = useState({
        name: '',
        description: '',
        price: '',
        city: '',
        state: '',
        service_type_id: ''
    })

    const onSubmit = async (e) =>{
        e.preventDefault()
       
        const forUpdate = {
            name,
            description,
            price,
            city,
            state,
            service_type_id
        }
        const errors = {}
        if(!forUpdate.name.length) errors.name = 'Name is required'
        if (!forUpdate.description.length) errors.description = 'Description is required'
        if (!forUpdate.price) errors.price = 'Price is required'
        if (!forUpdate.city) errors.city = 'City is required'
        if (!forUpdate.state.toString().length) errors.state = 'State is required';
        if (!service_type_id) errors.service_type_id = 'Service type is required'

        if(!Object.values(errors).length){
            let updatedService= await dispatch(update_sevice_thunk(id, forUpdate))

            if(updatedService){
                await dispatch(authenticate())
                history.push(`/users/${ownerId}`)
            }
        }else{
            setValidationErrors(errors)
        }
    }
    return (
        <>
            <form className="create-service-form" onSubmit={onSubmit} >
                <div id="create-business-h1-container"><h1>Update Your Service</h1></div>
                <div>
                    <label>
                        What is the name of your service ? <span className="validationErrors" >{validationErrors.name}</span>
                        <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
                    </label>
                </div>
                <div>
                    <label>
                        Describe your service. <span className='validationErrors'>{validationErrors.description}</span>
                        <textarea
                            onChange={(e) => setDescription(e.target.value)}
                            value={description}
                        ></textarea>
                    </label>
                </div>
                <div>
                    <label>
                        What city are you going to offer this service? <span className="validationErrors" >{validationErrors.city}</span>
                        <input type="text" onChange={(e) => setCity(e.target.value)} value={city} />
                    </label>
                </div>
                <div>
                    <label for="state-dropdown">Select a state: <span className='validationErrors' >{validationErrors.state}</span>
                        <select value={state} id="state-dropdown" name="state" onChange={(e) => setState(e.target.value)}>
                            <option value="">-- Select a state --</option>
                            <option value="AL">Alabama</option>
                            <option value="AK">Alaska</option>
                            <option value="AZ">Arizona</option>
                            <option value="AR">Arkansas</option>
                            <option value="CA">California</option>
                            <option value="CO">Colorado</option>
                            <option value="CT">Connecticut</option>
                            <option value="DE">Delaware</option>
                            <option value="FL">Florida</option>
                            <option value="GA">Georgia</option>
                            <option value="HI">Hawaii</option>
                            <option value="ID">Idaho</option>
                            <option value="IL">Illinois</option>
                            <option value="IN">Indiana</option>
                            <option value="IA">Iowa</option>
                            <option value="KS">Kansas</option>
                            <option value="KY">Kentucky</option>
                            <option value="LA">Louisiana</option>
                            <option value="ME">Maine</option>
                            <option value="MD">Maryland</option>
                            <option value="MA">Massachusetts</option>
                            <option value="MI">Michigan</option>
                            <option value="MN">Minnesota</option>
                            <option value="MS">Mississippi</option>
                            <option value="MO">Missouri</option>
                            <option value="MT">Montana</option>
                            <option value="NE">Nebraska</option>
                            <option value="NV">Nevada</option>
                            <option value="NH">New Hampshire</option>
                            <option value="NJ">New Jersey</option>
                            <option value="NM">New Mexico</option>
                            <option value="NY">New York</option>
                            <option value="NC">North Carolina</option>
                            <option value="ND">North Dakota</option>
                            <option value="OH">Ohio</option>
                            <option value="OK">Oklahoma</option>
                            <option value="OR">Oregon</option>
                            <option value="PA">Pennsylvania</option>
                            <option value="RI">Rhode Island</option>
                            <option value="SC">South Carolina</option>
                            <option value="SD">South Dakota</option>
                            <option value="TN">Tennessee</option>
                            <option value="TX">Texas</option>
                            <option value="UT">Utah</option>
                            <option value="VT">Vermont</option>
                            <option value="VA">Virginia</option>
                            <option value="WA">Washington</option>
                            <option value="WV">West Virginia</option>
                            <option value="WI">Wisconsin</option>
                            <option value="WY">Wyoming</option>
                        </select>
                    </label>
                </div>
                <div>
                    <label>
                        Choose your service type...<span className="validationErrors" >{validationErrors.service_type_id}</span>
                        <select name='type' onChange={(e) => setServiceTypeId(+e.target.value)}>
                            <option value='' >Select Type</option>
                            <option value={1} >Cleaning</option>
                            <option value={2} >Home Repair</option>
                            <option value={3} >Handyman services</option>
                            <option value={4} >Phone Repair</option>
                            <option value={5} >Tv Mounting</option>

                        </select>
                    </label>
                </div>
                <div>
                    <label>
                        Give a price to your service. <span className="validationErrors" >{validationErrors.price}</span>
                        <input value={price} type="number" name="price" step="0.01" onChange={(e) => setPrice(+e.target.value)}>
                        </input>
                    </label>
                </div>
                <div id="create-business-submit">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </>
    )

}