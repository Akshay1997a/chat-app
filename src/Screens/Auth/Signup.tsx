import React, { useRef, useState } from 'react';
import { Form as BSForm, FormGroup as BSFormGroup } from 'react-bootstrap';
import styled from 'styled-components';
import { API, Auth, Storage, graphqlOperation } from 'aws-amplify';
import {
    AnimatedView,
    Title,
    TextButton,
    View,
    Avatar,
} from '../../Components';
import { Button } from '../../Components/Buttons';
import {
    SignupFromProps,
    VerificationFormProps,
} from '../../Types/Login/Login';
import { colors } from '../../Styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../../Redux/UserState/userActions';
import { createUser, updateUser } from '../../Network/Users';
import { CreateUserInput, UpdateUserInput } from '../../API';

type SIGNUP_MODES = 'REGISTRATION' | 'VERIFICATION' | 'PROFILE_SETUP';

export const SignupForm = React.memo(({ changeMode }: SignupFromProps) => {
    const [emailId, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cnfPassword, setCnfPassword] = useState('');

    const { id } = useSelector((state: any) => state.userInfo);
    const dispatch = useDispatch();

    const [errorMsg, setErrorMsg] = useState('');
    const [emailIdErr, setEmailIdErr] = useState('');
    const [passwordErr, setPasswordErr] = useState('');
    const [cnfPassErr, setCnfPassErr] = useState('');

    const [mode, setMode] = useState<SIGNUP_MODES>('REGISTRATION');

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
        if (cnfPassword === '') {
            setCnfPassErr('Please enter confirm password.');
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
        if (validate()) {
            Auth.signUp({
                username: emailId,
                password,
            })
                .then(async (res) => {
                    console.log(res);
                    const data: CreateUserInput = {
                        id: res.userSub,
                        userName: emailId,
                    };
                    await createUser(data);
                    dispatch(addUser({ id: res.userSub, userName: emailId }));
                    setMode('VERIFICATION');
                })
                .catch((err) => {
                    setErrorMsg(err.message);
                    console.log(err);
                });
        }
    };

    const handleSubmit = async (res: any) => {
        console.log(id);
        if (res === 'SUCCESS') {
            const data: UpdateUserInput = {
                id,
                isVerified: true,
            };
            await updateUser(data);
            setMode('PROFILE_SETUP');
        }
    };

    if (mode === 'VERIFICATION') {
        return <VerificationForm username={emailId} callback={handleSubmit} />;
    }

    if (mode === 'PROFILE_SETUP') {
        return <ProfileSetupForm />;
    }
    return (
        <AnimatedView>
            <Title>REGISTER</Title>
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
                        autoFocus={true}
                        placeholder="Enter email"
                        value={emailId}
                        onChange={(e: any) => setEmail(e.target.value)}
                    />
                    <SecondaryErrorText>{emailIdErr}</SecondaryErrorText>
                </FormGroup>
                <FormGroup>
                    <FormControl
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e: any) => setPassword(e.target.value)}
                    />
                    <SecondaryErrorText>{passwordErr}</SecondaryErrorText>
                </FormGroup>
                <FormGroup>
                    <FormControl
                        type="password"
                        placeholder="Confirm Password"
                        value={cnfPassword}
                        onChange={(e: any) => setCnfPassword(e.target.value)}
                    />

                    <SecondaryErrorText>{cnfPassErr}</SecondaryErrorText>
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
});

function VerificationForm({ username, callback }: VerificationFormProps) {
    const [code, setCode] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        Auth.confirmSignUp(username, code)
            .then((res) => callback(res))
            .catch((err) => callback(err));
        //callback('SUCCESS');
    };

    const handleResend = () => {};

    return (
        <AnimatedView>
            <Title>VERIFICATION</Title>
            <Form>
                <FormGroup>
                    <FormControl
                        type="text"
                        autoFocus={true}
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
    const [avatarUrl, setAvararUrl] = useState(
        require('../../assets/avatar.svg')
    );

    const { id } = useSelector((state: any) => state.userInfo);
    const dispatch = useDispatch();

    const readFile = (file: File) => {
        console.log(file);
        var reader = new FileReader();

        reader.onload = function (e) {
            try {
                setAvararUrl(e.target?.result);
                Storage.put(`avatar-${id}`, file)
                    .then((res: any) => {
                        console.log(res);
                    })
                    .catch((err) => console.log(err));
            } catch (e) {
                console.log(e);
            }
        };

        reader.readAsDataURL(file);
    };

    const handleSubmit = () => {
        const data: UpdateUserInput = {
            id,
            name: userName,
            status: userStatus,
        };
        API.graphql(
            graphqlOperation(updateUser, {
                input: data,
            })
        );
        dispatch(addUser({ name: userName, status: userStatus }));
    };

    return (
        <AnimatedView>
            <Title>PROFILE</Title>
            <Form>
                <View>
                    <AvatarEdit
                        src={avatarUrl}
                        alt="Avatar"
                        callback={readFile}
                    />
                </View>
                <FormGroup>
                    <FormControl
                        type="text"
                        autoFocus={true}
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

const AvatarEdit = ({ src, alt, callback }: any) => {
    const inputRef = useRef(null);

    const showUploadDialog = () => {
        const { current }: any = inputRef;
        current.click();
        //current.onClick((e:any) => console.log(e));
        // current.onChange((e:any) => {
        //     console.log(e);
        // });
        //console.log(current);
    };

    return (
        <AvatarContainer onClick={showUploadDialog}>
            <Avatar src={src} alt={alt} width="100%" height="100%" />
            <input
                ref={inputRef}
                type="file"
                accept="image/*"
                onChange={(e: any) => {
                    callback(e.target.files[0]);
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

export const Form = styled(BSForm)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 20px 0px;
`;

export const FormGroup = styled(BSFormGroup)`
    width: 100%;

    .form-check-label {
        color: ${(props) => props.theme.SECONDARY_TEXT_COLOR};
    }
`;

export const FormControl = styled(BSForm.Control)`
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
        border-color: ${() => colors.primary};
        box-shadow: none;
    }
`;

const ResendButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`;

export const ResendButton = styled.p`
    color: ${colors.primary};
    font-weight: bold;
    cursor: pointer;
`;

export const SecondaryErrorText = styled.small`
    color: red;
`;

export const PrimaryErrorText = styled.small`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: red;
`;
