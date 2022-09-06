// import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
import * as api from '../api';

export const signIn = (formData, navigate) => async (dispatch) => {
    // const navigate = useNavigate()
    try {
        const { data } = await api.signIn(formData)
        dispatch({type:'AUTH', data})

        navigate('/');
    } catch (error) {
        console.log(error.message); 
    }

}


export const signUp = (formData, navigate) => async (dispatch) => {

    // const navigate = useNavigate()
    try {
        const { data } = await api.signUp(formData)
        dispatch({type:'AUTH', data})

        navigate('/');
    } catch (error) {
        console.log(error.message); 
    }

}
