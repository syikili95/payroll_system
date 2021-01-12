import React, { Suspense, useCallback, useContext, useEffect } from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { AuthContext } from '../components/Auth';
import firebaseConfig from '../components/Firebase';
import Loader from '../components/Loader';

const SignInCard = styled.article`
    // background-color: white;
    padding: 2rem;
    width: 60rem;
    height: 25rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 0.3rem;
`

const LeftSignInCard = styled.article`
    padding-right: 2rem;
    border-right: 1px solid;
    padding-top: 5rem;
    color:white;
`

const InputField = styled.input`
    border:none;
    padding:1rem;
    border-radius : 2rem;
    width:-webkit-fill-available;
    margin-bottom:1rem;  

    &:hover {
    }
 `

const LoginButton = styled.button`
    background-color : white;
    width : 50%;
    padding:1rem;
    border:none;
    border-radius : 2rem;
    transition : width 0.3s;

    &:hover{
        width: 100%;
        transition : width 0.3s;
        cursor : pointer;
    }
 `

const ForgotPassword = styled.a`
    color : white;
    display: flex;
    justify-content: flex-end;
 `

const HelloHeading = styled.h1`
    margin-bottom: 0;
    color: white;
 `

const SignInHeading = styled.h2`
    color: white;
    margin-bottom: 2rem;
    margin-top: 0;
    font-size:1rem;
 `

const Welcome = styled.h1`
    font-size:1.5rem;
    margin-bottom:0;
 `

const StaffHRHeading = styled.h2`
    font-size:1.3rem;
    margin-bottom:1rem;
    margin-top:0;
`

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

    useEffect(() => {
        document.body.classList.add('sign-in');

        return function cleanup() {
            document.body.classList.remove('sign-in');
        }

    });

    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to="/"></Redirect>
    }

    return (
        <div>
            <Suspense fallback={<Loader></Loader>}>
                <SignInCard className="row">
                    <LeftSignInCard className="col" aria-label="Staff and HR Management.">
                        <Welcome>Welcome to TimeLog</Welcome>
                        <StaffHRHeading>Staff and HR Management</StaffHRHeading>
                        <span>Get a clear view of holidays, flex, absence, purchase expenses and travel expenses for each employee.</span>
                    </LeftSignInCard>
                    <form className="col pl-3" onSubmit={handleLogin} aria-label="Sign In form.">
                        <HelloHeading>Hello!</HelloHeading>
                        <SignInHeading>Sign In to your account</SignInHeading>
                        <InputField aria-label="Email" placeholder="Email" name="email" type="email"></InputField>
                        <InputField aria-label="Password" placeholder="Password" name="password" type="password"></InputField>
                        <ForgotPassword to="/signup" aria-label="Forgot password?" href="">Forgot Password?</ForgotPassword>
                        <p style={{ textAlign: "center" }}><LoginButton type="submit" >Sign In</LoginButton></p>
                        <div style={{ textAlign: "center" }}>
                            <span style={{ color: "white" }}>Don't have an account? </span>
                            <Link to="/signup" aria-label="Sign up now.">Sign Up now.</Link>
                        </div>
                    </form>
                </SignInCard>
            </Suspense>
        </div>
    )
}


export default withRouter(SignIn);