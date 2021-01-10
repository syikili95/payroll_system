import React, { useCallback} from 'react';
import {withRouter} from "react-router-dom";
import firebaseConfig from '../components/Firebase';

const SignUp = ({history}) =>{
    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const {email , password} = event.target.elements;        

        try{
            await firebaseConfig
            .auth()
            .createUserWithEmailAndPassword(email.value , password.value);
            history.push("/")
        }
        catch(error) {
            alert(error);
        }
    } , [history]);

    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSignUp}>
                <input name="email" placeholder="Email" type="email"></input>
                <input name="password" placeholder="Password" type="password"></input>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default withRouter(SignUp);