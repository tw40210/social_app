import { useNavigate } from 'react-router-dom';

export const signIn = () => async (dispatch) => {
    const navigate = useNavigate()
    try {
        navigate('/');
    } catch (error) {
        console.log(error.message); 
    }

}


export const signUp = () => async (dispatch) => {

    const navigate = useNavigate()
    try {
        navigate('/');
    } catch (error) {
        console.log(error.message); 
    }

}
