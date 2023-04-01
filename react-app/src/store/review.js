const GET_REVIEWS= 'reviews/GET_REVIEWS'
const CREATE_REVIEW ='reviews/CREATE_REVIEWS'
const UPDATE_REVIEW='reviews/UPDATE'
const DELETE_REVIEW = 'reviews/DELETE'

const delete_review_action = (id) =>{
    return {
        type:DELETE_REVIEW,
        id
    }
}

const update_review_action = (payload) =>{
    return {
        type:UPDATE_REVIEW,
        payload
    }
}

const create_review_action = (payload) => {
    return {
        type:CREATE_REVIEW,
        payload
    }
}

const get_review_action = (payload) =>{
    return{
        type:GET_REVIEWS,
        payload
    }
}

export const delete_review_thunk = (id) => async dispatch =>{
    const response = await fetch(`/api/reviews/${id}`, {
        method:"DELETE",
        headers:{"Content-Type":"application/json"},
    })
    if(response.ok){
        dispatch(delete_review_action(id))
    }
}

export const update_review_thunk = (id, review) => async dispatch =>{
    const response = await fetch (`/api/reviews/${id}`,{
        method:'PUT',
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(review)
    })
    if(response.ok){
        const data = await response.json()
        dispatch(update_review_action(data))
        return data
    }
}

export const create_review_thunk = (id, review) => async dispatch =>{
    const response = fetch(`/api/services/${id}/reviews`, {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(review)
    })
    if(response.ok){
        const data = await response.json()
        dispatch(create_review_action())
        return data
    }
}

export const get_reviews_thunk= (id) => async dispatch =>{
    const response = await fetch(`/api/reviews?service_type_id=${id}`)
    if(response.ok){
        const data =  await response.json()
        dispatch(get_review_action(data))
        return data
    }
}

const initialState={}

 const reviewReducer = (state=initialState, action) =>{
     switch (action.type) {
        case DELETE_REVIEW:
            let deleteState= {...state}
            delete deleteState[action.id]
            return deleteState
        case UPDATE_REVIEW:
            let updatedState = {...state}
            updatedState[action.payload.id]=action.payload
            return updatedState
         case GET_REVIEWS:
           let newState = {}             
           action.payload.reviews.forEach(element => {
            newState[element.id]=element
           })
            return newState
        case CREATE_REVIEW:
            let newRevState= {...state}
            newRevState[action.payload.id]=action.payload
            return newRevState
        default:
            return state
    }
}

export default reviewReducer