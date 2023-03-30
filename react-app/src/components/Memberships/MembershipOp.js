import './index.css'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
const MembershipOp = ({ type, price, benefits, extraBenefits, moreBenefits, id }) => {
    let user = useSelector(state => state.session.user)
    let history = useHistory()
    const [submitted, setSubmitted] = useState(false)
    const handleclick = () => {
        if(!user) {

            setSubmitted(true)
            setTimeout(() =>{
                setSubmitted(false)
            },2500)
            return
            
        }
        history.push(`/memberships/${id}`)
        
    }
    
    return (
        <div className="membership">
            <h2>{type} Membership</h2>
            <p className="price">${price}/month</p>
            <ul>
                <li><i class="fas fa-check"></i>{benefits}</li>
                <li><i class="fas fa-check"></i>{extraBenefits}</li>
                {moreBenefits.map((benefit) => (
                    <li key={benefit}>
                        <i class="fas fa-check"></i> {benefit}
                    </li>
                ))}
            </ul>
             <button onClick={handleclick} className="join-button">{!user && submitted ? "Please Login" : "JOIN"}</button>
        </div>
    );
};
export default MembershipOp