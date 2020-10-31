import { Auth } from 'aws-amplify';
import React, { useState } from 'react';
import {
    Button as BSButton,
    Form as BSForm,
    FormGroup as BSFormGroup,
} from 'react-bootstrap';
import styled from 'styled-components';
import { AnimatedView, Container, TextButton, Title } from '../../Components';
import { colors } from '../../Styles';
import { MODE_TYPE, VerificationFormProps } from '../../types/Login/Login';
import './Login-style.scss';

function Login() {
    const [MODE, setMode] = useState<MODE_TYPE>('LOGIN');

    return (
        <Container>
            <LoginCard>
                {/* <Title>{MODE}</Title> */}
                {MODE === 'LOGIN' ? <LoginForm /> : <SignupForm />}
                <TextButton
                    onClick={() =>
                        setMode(MODE === 'LOGIN' ? 'REGISTER' : 'LOGIN')
                    }>
                    {MODE === 'LOGIN'
                        ? 'Already have an account? '
                        : "Don't have an account yet? "}
                    <strong>{MODE === 'LOGIN' ? 'Login' : 'Register'}</strong>
                </TextButton>
            </LoginCard>
        </Container>
    );
}

export default Login;

function LoginForm() {
    const [emailId, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e: any) => {
        e.preventDefault();
        Auth.signIn({
            username: emailId,
            password,
        })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => console.log(err));
    };

    return (
        <AnimatedView>
            <Title>LOGIN</Title>
            <Form>
                <FormGroup style={{}}>
                    <FormControl
                        type="email"
                        placeholder="User Name"
                        value={emailId}
                        onChange={(e: any) => setEmail(e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <FormControl
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e: any) => setPassword(e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <Form.Check type="checkbox" label="Remember Me?" />
                </FormGroup>
                <Button onClick={handleLogin}>Login</Button>
            </Form>
        </AnimatedView>
    );
}

function SignupForm() {
    const [emailId, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cnfPassword, setCnfPassword] = useState('');
    const [codeSent, setCodeSent] = useState(false);

    const sendCode = (e: any) => {
        e.preventDefault();
        if (password === cnfPassword) {
            Auth.signUp({
                username: emailId,
                password,
            })
                .then((res) => {
                    setCodeSent(true);
                })
                .catch((err) => console.log(err));
        }
    };

    const handleSubmit = (res: any) => {
        if (res === 'SUCCESS') {
            alert('Success');
        }
    };

    if (codeSent) {
        return <VerificationForm username={emailId} callback={handleSubmit} />;
    } else {
        return (
            <AnimatedView>
                <Title>REGISTER</Title>
                <Form>
                    <FormGroup style={{}}>
                        <FormControl
                            type="email"
                            placeholder="Enter email"
                            value={emailId}
                            onChange={(e: any) => setEmail(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormControl
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e: any) => setPassword(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormControl
                            type="password"
                            placeholder="Confirm Password"
                            value={cnfPassword}
                            onChange={(e: any) =>
                                setCnfPassword(e.target.value)
                            }
                        />
                    </FormGroup>
                    <FormGroup>
                        <Form.Check type="checkbox" label="Remember Me?" />
                    </FormGroup>
                    <Button type="submit" onClick={sendCode}>
                        Signup
                    </Button>
                </Form>
            </AnimatedView>
        );
    }
}

function VerificationForm({ username, callback }: VerificationFormProps) {
    const [code, setCode] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        Auth.confirmSignUp(username, code)
            .then((res) => callback(res))
            .catch((err) => callback(err));
    };

    const handleResend = (e: any) => {};

    return (
        <AnimatedView>
            <Title>VERIFICATION</Title>
            <Form>
                <FormGroup>
                    <FormControl
                        type="text"
                        placeholder="Enter code"
                        value={code}
                        onChange={(e: any) => setCode(e.target.value)}
                    />
                </FormGroup>
                <ResendButtonContainer>
                    <ResendButton onClick={handleResend}>RESEND</ResendButton>
                </ResendButtonContainer>
                <Button type="submit" onClick={handleSubmit}>
                    Verify
                </Button>
            </Form>
        </AnimatedView>
    );
}

const LoginCard = styled.div`
    position: absolute;
    width: 500px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 20px 50px;

    background: #ffffff;
    box-shadow: 4px 4px 50px rgba(0, 0, 0, 0.25);
    border-radius: 10px;

    transition: all 0.25s linear;
`;

const Form = styled(BSForm)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 20px 0px;
`;

const FormGroup = styled(BSFormGroup)`
    width: 100%;
`;

const FormControl = styled(BSForm.Control)`
    padding: 30px 20px;
`;

const Button = styled(BSButton)`
    width: 100%;
    background-color: ${colors.primary};
    padding: 15px;

    font-size: 24px;
`;
const ResendButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`;

const ResendButton = styled.p`
    color: ${colors.primary};
    font-weight: bold;
    cursor: pointer;
`;
