const LOAD_SERVICES='services/LOAD_SERVICES'

const load_services_action=(payload) =>{
    return{
        type:LOAD_SERVICES,
        payload
    }
}

export const load_services_thunk = (service_type_id) => async dispatch => {
    const response = await fetch(`/api/services?service_type_id=${service_type_id}`)
    if(response.ok){
        const data = await response.json()
        dispatch(load_services_action(data))
        return data
    }
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