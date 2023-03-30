import OpenModalButton from "../OpenModalButton";
import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory, NavLink } from "react-router-dom";
import { useModal } from "../../context/Modal";
import DeleteMembership from "../DeleteMembership";
import './index.css'

export default function EditMembership(){
    const history = useHistory()
    const { closeModal } = useModal()
    const handleclick = (e) => {
        //e.preventDefault()
        console.log('fuvckckkkkkkkkkkkkkkkk')

        closeModal()
    }

    return (
        <div className="editmem" >
             Edit or Quit from membership!
            <NavLink to={'/membership'} > <button className="globalmodal" onClick={handleclick} >Edit</button></NavLink>
            <OpenModalButton buttonText={"Quit"} modalComponent={<DeleteMembership />} />
        </div>
    )
}