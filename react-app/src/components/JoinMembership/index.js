import formem from './formem.png'
import { NavLink, useHistory, useParams, } from 'react-router-dom';
import './index.css'
import { useState } from 'react';
import { create_membership_thunk } from '../../store/membership';
import { useSelector, useDispatch } from 'react-redux';
import { authenticate } from '../../store/session';

export default function JoinMembership() {
    let { id } = useParams()
    const user = useSelector((state => state.session.user))
    const dispatch = useDispatch()
    let status
    if(id==1) status="Bronze"
    if(id==2) status="Silver"
    if(id==3) status="Gold"
    const [paymentOption, setPaymentOption] = useState('credit card')
    const [check,setCheck] =useState(false)
    const [submitting, setSubmitting] = useState(false)
    const history=useHistory()
    const handleChange = (e) =>{
        setPaymentOption(e.target.value)
    }
    
    const handleSubmit = async () =>{

        if(!check){

            setSubmitting(true);
            setTimeout(() =>{
                setSubmitting(false)
            }, 2500)
            // history.push('/')
            return
        }
        await dispatch(create_membership_thunk(user.id, id))
        await dispatch(authenticate())
        history.push(`/users/${user.id}`)


    }
    return (
        <div className='formem' >
            <h1>tuls</h1>
            <h3>Protection made simple</h3>
            <img className='formemimg' src={formem} ></img>
            {user.membership?.id == id ? (<h4 style={{marginBottom:'215px'}} >You have {status} membership already. Please <span> <NavLink to='/membership' >check</NavLink> </span> other options. </h4>) : (
                <>
                    <div>
                        <input type="checkbox" checked={check} onClick={() => setCheck(!check)} ></input>
                        <label >Confirm {status} membership </label>
                    </div>
                    <h4>Choose a payment option</h4>
                    <div>
                        <input type='radio' id='credit-card' name='payment-option' value='credit card' checked={paymentOption === 'credit card'} onChange={handleChange} />
                        <label htmlFor='credit-card' >Credit Card</label>
                    </div>
                    <div>
                        <input type='radio' id='paypal' name='payment-option' value='paypal' checked={paymentOption === 'paypal'} onChange={handleChange} />
                        <label htmlFor='paypal' >PayPal</label>
                    </div>
                    <div>
                        <input type='radio' id='bitcoin' name='payment-option' value='bitcoin' checked={paymentOption === 'bitcoin'} onChange={handleChange} />
                        <label htmlFor='bitcoin' >Bitcoin</label>
                    </div>
                    <button className='membutton' onClick={handleSubmit} >{submitting ? 'Please confirm membership' : 'Submit'}</button>
                </>
            )}
            
            
        </div>
    )
}