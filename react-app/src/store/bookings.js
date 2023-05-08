const GET_BOOKINGS = 'bookings/GET_BOOKINGS'

const get_bookings_action=(payload) =>{
    return {
        type:GET_BOOKINGS,
        payload
    }
}
// bookings thunk
export const get_bookings_thunk = () => async dispatch =>{
    const response = await fetch('/api/bookings')
    if(response.ok){
        const data = await response.json()
        dispatch(get_bookings_action(data))
        return data
    }
}


export const create_nbooking_thunk = (booking) => async dispatch =>{
    const response = await fetch('/api/bookings', {
        method:'POST',
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(booking)
    })
    if(response.ok){
        const data = await response.json()
        return data
    }
}
export const update_booking_thunk = (id, booking) => async dispatch =>{
    const response = await fetch(`/api/bookings/${id}`, {
        method:"PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(booking)
    })
    if (response.ok){
        const data = await response.json()
        return data
    }
}


export const delete_booking_thunk = (id) => async dispatch => {
    
    const response = await fetch(`/api/bookings/${id}`, {
        method: 'DELETE',
        headers: { "Content-Type": "application/json" }
    })
}

const initialState={
    all_bookings:{}
}

export default function bookingReducer(state=initialState, action) {
        let newState= {...state}
    switch(action.type){
        case GET_BOOKINGS:
            let all_bookings={}
            action.payload.bookings.forEach(booking => all_bookings[booking.id] = booking)
            return{
                ...state,
                all_bookings
            }
        default:
            return state
    }
}