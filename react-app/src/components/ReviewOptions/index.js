import React, {useState, useEffect,useRef} from "react";
import { useHistory } from "react-router-dom";
import DeleteReview from "../DeleteReview";
import EditReview from "../EditReview";
import OpenModalButton from "../OpenModalButton";
import './index.css'

export default function ReviewOption({service_type_id, review}){
    const [showMenu, setShowMenu] = useState(false);
    const ulRef = useRef();
    const history = useHistory();
    const ulClassName = "drop-menu"+(showMenu ? "" :" hidden")
    useEffect(() =>{
        if(!showMenu) return
        const closeMenu = (e) => {
            if(!ulRef.current.contains(e.target)){
                setShowMenu(false)
            }
        }
        document.addEventListener('click', closeMenu)
        return () => document.removeEventListener("click", closeMenu)
     },[showMenu])

     const openMenu = e => {
        if (showMenu) return
        setShowMenu(true)
     }

     const closeMenu = () => setShowMenu(false)
      
    return(
        <div className="button-container">
            <div className="options-button" onClick={openMenu}>
                <i class="fas fa-bars"></i>
            </div>
            <div ref={ulRef} className={ulClassName} >
                <OpenModalButton
                    buttonText="Delete Review"
                    onItemClick={closeMenu}
                    modalComponent={<DeleteReview service_type_id={service_type_id} oldReview={review} />}
                />
                <OpenModalButton
                    buttonText="Edit Review"
                    onItemClick={closeMenu}
                    modalComponent={<EditReview service_type_id={service_type_id} oldReview={review} />}
                />
                {/* <button onClick={handleClick}>Edit Review</button> */}
            </div>
        </div>
    )
}