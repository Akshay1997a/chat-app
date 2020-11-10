import React, { useRef, useState } from 'react';
import { Form as BSForm, FormGroup as BSFormGroup } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import {
    AnimatedView,
    Avatar,
    Container,
    TextButton,
    Title,
    View,
} from '../../Components';
import { Button } from '../../Components/Buttons';
import Header from '../../Components/Header/Header';
import { colors } from '../../Styles';
import { Auth } from 'aws-amplify';
import { AWS_EXCEPTIONS } from '../../Types/AWS_CONSTANTS';
import {
    LoginFromProps,
    MODE_TYPE,
    SignupFromProps,
    VerificationFormProps,
} from '../../Types/Login/Login';

const USER = {
    email: 'test@gmail.com',
    password: 'Test@123',
};

function Login() {
    const [MODE, setMode] = useState<MODE_TYPE>('LOGIN');

    return (
        <Container>
            <Header />
            <LoginCard>
                {/* <Title>{MODE}</Title> */}
                {MODE === 'LOGIN' ? (
                    <LoginForm changeMode={(mode) => setMode(mode)} />
                ) : (
                    <SignupForm changeMode={(mode) => setMode(mode)} />
                )}
            </LoginCard>
        </Container>
    );
}

export default React.memo(Login);

const LoginForm = React.memo(({ changeMode }: LoginFromProps) => {
    const [emailId, setEmail] = useState('');
    const [emailErrMsg, setEmailErrMsg] = useState('');
    const [password, setPassword] = useState('');
    const [passwordErrMsg, setPasswordErrMsg] = useState('');
    const [isLoading, setLoading] = useState(false);
    const history = useHistory();

    const validate = () => {
        if (emailId === '') {
            return false;
        }
        if (password === '') {
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
                .then((res) => {
                    console.log(res);
                    window.location.href = '/dashboard';
                    setLoading(false);
                })
                .catch((err) => {
                    setLoading(false);
                    setEmailErrMsg(err.message);
                    console.log(err);
                });
        } else {
            setEmailErrMsg('Please enter you email id.');
            setLoading(false);
        }
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
                    <ErrorText>{emailErrMsg}</ErrorText>
                </FormGroup>
                <FormGroup>
                    <FormControl
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e: any) => setPassword(e.target.value)}
                    />
                    <ErrorText>{passwordErrMsg}</ErrorText>
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

const SignupForm = React.memo(({ changeMode }: SignupFromProps) => {
    const [emailId, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cnfPassword, setCnfPassword] = useState('');
    const [codeSent, setCodeSent] = useState(false);

    const [emailIdErr, setEmailIdErr] = useState('');
    const [passwordErr, setPasswordErr] = useState('');
    const [cnfPassErr, setCnfPassErr] = useState('');

    const validate = () => {
        setEmailIdErr('');
        setPasswordErr('');
        setCnfPassErr('');
        if (emailId === '') {
            setEmailIdErr('Please enter your email id.');
            return false;
        }
        if (password.length < 8) {
            setPasswordErr(
                'Password must contain more then or equal to 8 char.'
            );
            return false;
        }
        if (password !== cnfPassword) {
            setCnfPassErr('Password not matched');
            return false;
        }
        return true;
    };

    const sendCode = (e: any) => {
        e.preventDefault();
        setCodeSent(true);
        if (validate()) {
            // Auth.signUp({
            //     username: emailId,
            //     password,
            // })
            //     .then((res) => {
            //         setCodeSent(true);
            //     })
            //     .catch((err) => console.log(err));
        }
    };

    const handleSubmit = (res: any) => {
        if (res === 'SUCCESS') {
            alert('Success');
        }
    };

    return <ProfileSetupForm />;

    // eslint-disable-next-line no-unreachable
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
                        <ErrorText>{emailIdErr}</ErrorText>
                    </FormGroup>
                    <FormGroup>
                        <FormControl
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e: any) => setPassword(e.target.value)}
                        />
                        <ErrorText>{passwordErr}</ErrorText>
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

                        <ErrorText>{cnfPassErr}</ErrorText>
                    </FormGroup>
                    <FormGroup>
                        <Form.Check type="checkbox" label="Remember Me?" />
                    </FormGroup>
                    <Button type="submit" onClick={sendCode}>
                        Signup
                    </Button>
                </Form>
                <TextButton onClick={() => changeMode('LOGIN')}>
                    Already have an account?
                    <strong> Login</strong>
                </TextButton>
            </AnimatedView>
        );
    }
});

function VerificationForm({ username, callback }: VerificationFormProps) {
    const [code, setCode] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        // Auth.confirmSignUp(username, code)
        //     .then((res) => callback(res))
        //     .catch((err) => callback(err));
        callback('SUCCESS');
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

function ProfileSetupForm() {
    const [userName, setUserName] = useState('');
    const [userStatus, setUserStatus] = useState('');

    const handleSubmit = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {};

    return (
        <AnimatedView>
            <Title>PROFILE</Title>
            <Form>
                <View>
                    <AvatarEdit alt="Avatar" />
                </View>
                <FormGroup>
                    <FormControl
                        type="text"
                        placeholder="Enter name"
                        value={userName}
                        onChange={(e: any) => setUserName(e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <FormControl
                        type="text"
                        placeholder="Status"
                        value={userStatus}
                        onChange={(e: any) => setUserStatus(e.target.value)}
                    />
                </FormGroup>
                <Button type="submit" onClick={handleSubmit}>
                    Next
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

    background: ${(props) => props.theme.SECONDARY_BACKGROUND_COLOR};
    box-shadow: ${(props) => props.theme.SHADOW};
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

    .form-check-label {
        color: ${(props) => props.theme.SECONDARY_TEXT_COLOR};
    }
`;

const FormControl = styled(BSForm.Control)`
    padding: 30px 20px;
    /* margin: 10px 0px; */
    color: ${(props) => props.theme.SECONDARY_TEXT_COLOR};
    background: ${(props) => props.theme.SECONDARY_BACKGROUND_COLOR};
    transition: all 0.25s linear;

    &::placeholder {
        color: ${(props) => props.theme.SECONDARY_TEXT_COLOR};
    }

    &:focus {
        background: ${(props) => props.theme.SECONDARY_BACKGROUND_COLOR};
        color: ${(props) => props.theme.SECONDARY_TEXT_COLOR};
        border-color: ${(props) => colors.primary};
    }
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

const ErrorText = styled.small`
    color: red;
`;

const AvatarEdit = ({ currectSrc, alt }: any) => {
    const inputRef = useRef(null);
    const defaultAvatarUrl = require('../../assets/avatar.svg');
    const [src, setSrc] = useState(currectSrc);

    const showUploadDialog = (e: any) => {
        const { current }: any = inputRef;
        current.click();
        //current.onClick((e:any) => console.log(e));
        // current.onChange((e:any) => {
        //     console.log(e);
        // });
        //console.log(current);
    };

    const readFile = (file: any) => {
        var reader = new FileReader();

        reader.onload = function (e) {
            try {
                setSrc(e.target?.result);
            } catch (e) {
                console.log(e);
            }
        };

        reader.readAsDataURL(file);
    };

    return (
        <AvatarContainer onClick={showUploadDialog}>
            <Avatar
                src={typeof src !== 'undefined' ? src : defaultAvatarUrl}
                alt="Avatar"
            />
            <input
                ref={inputRef}
                type="file"
                accept="image/*"
                onChange={(e: any) => {
                    readFile(e.target.files[0]);
                }}
            />
        </AvatarContainer>
    );
};

const AvatarContainer = styled.div`
    position: relative;
    width: 150px;
    height: 150px;
    border-radius: 100%;
    border: none;
    overflow: hidden;
    margin: 20px;
    cursor: pointer;
    transition: all 0.25s linear;

    input {
        opacity: 0;
    }
`;
