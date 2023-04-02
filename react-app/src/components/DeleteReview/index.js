import { useDispatch } from "react-redux"
import { delete_review_thunk } from "../../store/review"
import { load_services_thunk } from "../../store/services"
import { get_reviews_thunk } from "../../store/review"
import { useModal } from "../../context/Modal"
import { useHistory } from "react-router-dom"
import './index.css'
export default function DeleteReview({service_type_id, oldReview}){
    console.log('biyyyyyyyyyyy', oldReview.id)
    const history = useHistory()
    const {closeModal} = useModal()
    const dispatch = useDispatch()
    const handleDelete = async (e) => {
        e.preventDefault()
        await dispatch(delete_review_thunk(oldReview.id))
        await dispatch(get_reviews_thunk(service_type_id))
        await  dispatch(load_services_thunk (service_type_id))
         closeModal()
         return
    }
    return(
        <div className="delete-review-modal">
            {/* <h1>{id}</h1> */}
            <h2>Are you sure you want to delete this review?</h2>
            <div className="delete-keep">
                <button className='stndrd-btn' onClick={handleDelete}>Delete</button>
                <button className='stndrd-btn' onClick={closeModal}>Keep Review</button>
            </div>
        </div>
    )
}