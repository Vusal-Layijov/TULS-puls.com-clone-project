import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../../context/Modal";
import { create_membership_thunk } from "../../store/membership";
import { authenticate } from "../../store/session";


export default function DeleteMembership(){
    const user = useSelector((state => state.session.user))
    const {closeModal} = useModal()
    const dispatch = useDispatch()
    const handleClick = async () =>{
        await dispatch(create_membership_thunk(user.id, null))
        await dispatch(authenticate())
        closeModal()
    }

    return(
        <div className="editmem" >
            <h3>Are you sure to quit ?</h3>
            <button className="globalmodal" onClick={closeModal} >No (Keep membership)</button>
            <button className="globalmodal" onClick={handleClick} >Yes (quit)</button>
        </div>
    )
}