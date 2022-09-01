import {AUTH, LOGOUT} from '../constances/actionTypes'

const auth = (state = {authData:null}, action) => {
    switch (action.type) {
        case AUTH:
            localStorage.setItem('profile', JSON.stringify({...action?.data}))
            console.log(action?.data)
            return {...state, authData: action?.data};
        case LOGOUT:
            return ;
        default:
            return state;
    }

}

export default auth;