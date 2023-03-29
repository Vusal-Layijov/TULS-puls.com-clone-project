import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
const MembershipOp = ({ type, price, benefits, extraBenefits, moreBenefits }) => {
    return (
        <div className="membership">
            <h2>{type} Membership</h2>
            <p className="price">${price}/month</p>
            <ul>
                <li><FontAwesomeIcon icon={faCheck} className="checked-icon" /> {benefits}</li>
                <li><FontAwesomeIcon icon={faCheck} className="checked-icon" /> {extraBenefits}</li>
                {moreBenefits.map((benefit) => (
                    <li key={benefit}>
                        <FontAwesomeIcon icon={faCheck} className="checked-icon" /> {benefit}
                    </li>
                ))}
            </ul>
            <button className="join-button">Join</button>
        </div>
    );
};
export default MembershipOp