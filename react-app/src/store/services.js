import { authenticate } from "./session"
const LOAD_SERVICES='services/LOAD_SERVICES'
const CREATE_SERVICE = 'services/CREATE_SERVICE'

const load_services_action=(payload) =>{
    return{
        type:LOAD_SERVICES,
        payload
    }
}

export const load_services_thunk = (service_type_id) => async dispatch => {
    console.log('after', service_type_id)
    const response = await fetch(`/api/services?service_type_id=${service_type_id}`)
    if(response.ok){
        const data = await response.json()
        dispatch(load_services_action(data))
        return data
    }
}

export const create_service_thunk = (service) => async dispatch =>{
    const response = await fetch('/api/services', {
        headers:{"Content-Type":"application/json"},
        method:'POST',
        body:JSON.stringify(service)
    })
    if (response.ok){
        const data = await response.json()
        
        return data
    }
}

export const update_sevice_thunk = (id, service) => async dispatch =>{
    const response = await fetch (`/api/services/${id}`,{
        method:'PUT',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(service)
    })
    if(response.ok){
        const data = await response.json()
        return data
    }
}

export const delete_service_thunk= (id) => async dispatch =>{
    console.log('from delete storeeeeeee ')
    const response = await fetch(`/api/services/${id}`,{
        method:'DELETE',
        headers:{"Content-Type":"application/json"}
    })
}

const initialState={
    all_services:{}
}
const serviceReducer = (state = initialState, action) =>{
    const newState = {...state}
    switch (action.type){
        case LOAD_SERVICES:
            const all_services={}
            action.payload.services.forEach(service => all_services[service.id]=service)
            return {
                ...state,
                all_services
            }
        default:
            return state
    }
}
export default serviceReducer