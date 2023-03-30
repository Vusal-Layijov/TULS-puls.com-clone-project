export const create_membership_thunk  = (user_id, membership_id) => async dispatch =>{
    const response = await fetch (`/api/users/${user_id}`, {
        method:"PUT",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(membership_id)
    })
    if(response.ok){
        const data = await response.json()
        return data
    }
}