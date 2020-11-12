import React, { useState } from 'react';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import { AnimatedView, Title, TextButton } from '../../Components';
import { Button } from '../../Components/Buttons';
import { LoginFromProps } from '../../Types/Login/Login';
import {
    SecondaryErrorText,
    PrimaryErrorText,
    FormGroup,
    FormControl,
    Form,
} from './Signup';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getUser } from '../../graphql/queries';
import { useDispatch } from 'react-redux';
import { addUser } from '../../Redux/UserState/userActions';

export const LoginForm = React.memo(({ changeMode }: LoginFromProps) => {
    const [emailId, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errorMsg, setErrorMsg] = useState('');
    const [emailErrMsg, setEmailErrMsg] = useState('');
    const [passwordErrMsg, setPasswordErrMsg] = useState('');
    const [isLoading, setLoading] = useState(false);

    const dispatch = useDispatch();

    const validate = () => {
        if (emailId === '') {
            setEmailErrMsg('Please enter email id.');
            return false;
        }
        if (password === '') {
            setPasswordErrMsg('Please enter password.');
            return false;
        }
        return true;
    };

    const handleLogin = (e: any) => {
        e.preventDefault();
        setLoading(true);
        if (validate()) {
            Auth.signIn({
                username: emailId,
                password,
            })
                .then(async (res) => {
                    console.log(res);
                    console.log(res.username);
                    const data: any = await API.graphql({
                        query: getUser,
                        variables: { id: res.username },
                    });
                    dispatch(addUser(data.data.getUser));
                    console.log(data);
                    window.location.href = '/dashboard';
                    setLoading(false);
                })
                .catch((err) => {
                    setLoading(false);
                    setErrorMsg(err.message);
                    console.log(err);
                });
        } else {
            setLoading(false);
        }
    };

    return (
        <AnimatedView>
            <Title>LOGIN</Title>
            {errorMsg && (
                <PrimaryErrorText>
                    <FontAwesomeIcon icon={faExclamationCircle} />
                    {errorMsg}
                </PrimaryErrorText>
            )}
            <Form>
                <FormGroup style={{}}>
                    <FormControl
                        type="email"
                        placeholder="User Name"
                        value={emailId}
                        onChange={(e: any) => setEmail(e.target.value)}
                    />
                    <SecondaryErrorText>{emailErrMsg}</SecondaryErrorText>
                </FormGroup>
                <FormGroup>
                    <FormControl
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e: any) => setPassword(e.target.value)}
                    />
                    <SecondaryErrorText>{passwordErrMsg}</SecondaryErrorText>
                </FormGroup>
                <FormGroup>
                    <Form.Check type="checkbox" label="Remember Me?" />
                </FormGroup>
                <Button onClick={handleLogin} isLoading={isLoading}>
                    Login
                </Button>
            </Form>
            <TextButton onClick={() => changeMode('REGISTER')}>
                Don't have an account yet?
                <strong> Register</strong>
            </TextButton>
        </AnimatedView>
    );
});
