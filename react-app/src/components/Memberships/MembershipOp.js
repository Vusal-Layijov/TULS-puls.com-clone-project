import './index.css'
const MembershipOp = ({ type, price, benefits, extraBenefits, moreBenefits }) => {
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
            <button className="join-button">Join</button>
        </div>
    );
};
export default MembershipOp