import React, { useCallback, useContext } from 'react';
import { Link, Redirect , withRouter } from 'react-router-dom';
import { AuthContext } from '../components/Auth';
import firebaseConfig from '../components/Firebase';

const SignIn = ({ history }) => {
    const handleLogin = useCallback(
        async event => {
            event.preventDefault();
            const { email, password } = event.target.elements;

            try {
                await firebaseConfig
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value);
                history.push('/');
            }
            catch (error) {
                alert(error);
            }
        }, [history]
    );

    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to="/"></Redirect>
    }

    return (
        <div>
            <form onSubmit={handleLogin}>
                <h1>Sign In</h1>
                <input placeholder="Email" name="email" type="email"></input>
                <input placeholder="Password" name="password" type="password"></input>
                <button type="submit" >SIGN IN</button>
                <Link to="/signup">SIGN UP NOW</Link>

            </form>
        </div>
    )
}


export default withRouter(SignIn);