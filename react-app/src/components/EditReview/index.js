import { useSelector, useDispatch } from "react-redux"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { update_review_thunk } from "../../store/review"
import { authenticate } from "../../store/session"
import { useModal } from "../../context/Modal"
import { load_services_thunk } from "../../store/services"
import { get_reviews_thunk } from "../../store/review"

export default function EditReview({oldReview, service_type_id}){
    const dispatch = useDispatch()
    const [errors, setErrors] =useState([])
    const [review,setReview] = useState(oldReview.review)
    const [stars, setStars] = useState(oldReview.stars)
    const { closeModal } = useModal()
    const [submitted, setHasSubmitted] = useState(false)

    useEffect(() => {
        let sonErrors = []
        if (review.length < 10) sonErrors.push("Review must be min 10 characters long")
        if (!stars) sonErrors.push("Stars are required")
        setErrors(sonErrors)
    }, [review, stars])

    const handleSubmit = async (e) =>{
        e.preventDefault()
        setHasSubmitted(true)
        if (errors.length>0) return
        const updatedReview = {
            review,
            stars
        }
        await dispatch(update_review_thunk(oldReview.id, updatedReview))
        await dispatch(load_services_thunk(service_type_id))
        await dispatch(get_reviews_thunk(service_type_id))
        setHasSubmitted(false)
        closeModal()
        return
    }

    return (
        <div className="review">
            <h1>Update your review!!</h1>
            {submitted && errors && errors.map(error => (
                <p>{error}</p>
            ))}
            <form onSubmit={handleSubmit}>
                <label for="review">
                    <textarea
                        name="review"
                        id="review"
                        cols="30"
                        rows="10"
                        placeholder="Leave your review here..."
                        onChange={(e) => setReview(e.target.value)}
                    >
                        {review}
                    </textarea>
                </label>
                <div className='fortest'>
                    <div class="rate">
                        <input
                            type="radio"
                            id="star5"
                            name="rate"
                            value="5"
                            checked={stars === 5}
                            onChange={() => setStars(5)}
                        />
                        <label for="star5" title="text">
                            5 stars
                        </label>
                        <input
                            type="radio"
                            id="star4"
                            name="rate"
                            value="4"
                            checked={stars === 4}
                            onChange={() => setStars(4)}
                        />
                        <label for="star4" title="text">
                            4 stars
                        </label>
                        <input
                            type="radio"
                            id="star3"
                            name="rate"
                            value="3"
                            checked={stars === 3}
                            onChange={() => setStars(3)}
                        />
                        <label for="star3" title="text">
                            3 stars
                        </label>
                        <input
                            type="radio"
                            id="star2"
                            name="rate"
                            value="2"
                            checked={stars === 2}
                            onChange={() => setStars(2)}
                        />
                        <label for="star2" title="text">
                            2 stars
                        </label>
                        <input
                            type="radio"
                            id="star1"
                            name="rate"
                            value="1"
                            checked={stars === 1}
                            onChange={() => setStars(1)}
                        />
                        <label for="star1" title="text">
                            1 star
                        </label>

                    </div>
                    <div style={{ marginTop: '18px' }}>Stars</div>
                </div>
                <button
                    className="rev-submit-button"
                    type="submit"
                // disabled={errors.length === 0 ? false : true}
                >
                    Submit
                </button>
            </form>
        </div>
    )
}