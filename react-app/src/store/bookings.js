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