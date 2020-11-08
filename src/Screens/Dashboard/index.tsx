import React from 'react';
import {
    faPaperPlane,
    faPencilAlt,
    faSearch,
    faSmile,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { Container } from '../../Components';
import Header from '../../Components/Header/Header';
import { TextInput } from '../../Components/Inputs/index';
import { colors, metrics } from '../../Styles';
import { Avatar } from '../../Components';
import { PeopleComponentProps } from '../../Types/People';

export function Dashboard() {
    const PeopleComponent = ({ displayName, status }: PeopleComponentProps) => (
        <PeopleContainer>
            <Avatar
                src={require('../../assets/avatar.svg')}
                alt="Avatar"
                width="60px"
                height="60px"
            />
            <PeopleDetails style={{ flex: 1 }}>
                <PeopleName>{displayName}</PeopleName>
                <StatusText>{status}</StatusText>
            </PeopleDetails>
            <PeopleDetails>
                <StatusText>12:00</StatusText>
            </PeopleDetails>
        </PeopleContainer>
    );

    const LeftPanelWrapper = () => (
        <LeftPanel>
            <PeopleHeader>
                <Avatar
                    src={require('../../assets/avatar.svg')}
                    alt="Avatar"
                    width="60px"
                    height="60px"
                    activeStatus="ACTIVE"
                />
                <div style={{ flex: 1 }}>
                    <PersonalName>Akshay Dighorikar</PersonalName>
                    <StatusText>Senior Developer</StatusText>
                </div>
                <a href="none">
                    <Icon size="lg" icon={faPencilAlt} />
                </a>
            </PeopleHeader>
            <SearchContainer>
                <TextInput
                    verient="primary"
                    placeholder="Search People..."
                    iconRight={<Icon size="lg" icon={faSearch} />}
                />
            </SearchContainer>
            <PeoplesListContainer>
                {Array.from({ length: 20 }, (v) => (
                    <PeopleComponent
                        displayName={'Akshay Dighorikar'}
                        status="Hi there! I am using NearMe"
                    />
                ))}
            </PeoplesListContainer>
        </LeftPanel>
    );

    const RightPanelWrapper = () => (
        <RightPanel>
            <PeopleHeader>
                <Avatar
                    src={require('../../assets/avatar.svg')}
                    alt="Avatar"
                    width="60px"
                    height="60px"
                    activeStatus="ACTIVE"
                />
                <div>
                    <PersonalName>Snehal Dighorikar</PersonalName>
                    <StatusText>Online</StatusText>
                </div>
            </PeopleHeader>
            <ChatContainer>
                {Array.from({ length: 10 }, (o) => (
                    <>
                        <Message verient="RECEIVER">
                            <ReceiversMessage>Hi!</ReceiversMessage>
                        </Message>
                        <Message verient="SENDER">
                            <SendersMessage>Hello</SendersMessage>
                        </Message>
                    </>
                ))}
            </ChatContainer>
            <Foot>
                <TextInput
                    iconLeft={<Icon icon={faSmile} size="lg" />}
                    placeholder="Type Messages..."
                />
                <SendButton>
                    <Icon
                        size="lg"
                        icon={faPaperPlane}
                        style={{ color: '#fff' }}
                    />
                </SendButton>
            </Foot>
        </RightPanel>
    );

    return (
        <Container>
            <Header />
            <CardContainer>
                <LeftPanelWrapper />
                <RightPanelWrapper />
            </CardContainer>
        </Container>
    );
}

const FlexDisplay = styled.div`
    display: flex;
    flex-direction: column;
`;

const CardContainer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: row;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    height: 80%;
    background-color: ${(props) => props.theme.SECONDARY_BACKGROUND_COLOR};
    box-shadow: ${(props) => props.theme.SHADOW};
    border-radius: ${metrics.baseRadius * 2}px;
    overflow: hidden;

    @media screen and (max-width: 1440px) {
        width: 100%;
        height: 100%;
        border-radius: 0px;
    }
`;

const LeftPanel = styled(FlexDisplay)`
    flex: 1;
    background-color: ${(props) => props.theme.PRIMARY_BACKGROUND_COLOR};
    //padding: 0px 20px;
    height: 100%;
    overflow: visible;
`;

const RightPanel = styled(FlexDisplay)`
    flex: 2;
`;

const PeopleHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px 20px;
    height: 90px;
`;

const PersonalName = styled.p`
    font-size: 20px;
    font-weight: bold;
    margin: 0px 20px;
    color: ${colors.primary};
    overflow-x: hidden;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    line-height: 28px;
`;

const StatusText = styled.div`
    font-size: 16px;
    margin: 0px 20px;
    color: ${(props) => props.theme.SECONDARY_TEXT_COLOR};

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
`;

const Icon = styled(FontAwesomeIcon)`
    color: ${(props) => props.theme.SECONDARY_TEXT_COLOR};
    //padding: 5px;
`;

const PeoplesListContainer = styled(FlexDisplay)`
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    overflow-y: auto;
    scrollbar-color: ${(props) =>
        colors.primary + ' ' + props.theme.PRIMARY_BACKGROUND_COLOR};
    scrollbar-width: thin;
`;

const PeopleDetails = styled.div`
    height: 100%;
    padding: 10px 0px;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const PeopleContainer = styled(PeopleHeader)`
    position: relative;
    cursor: pointer;

    &:hover {
        &::before {
            position: absolute;
            left: 0;
            top: 0;
            height: 100%;
            width: 5px;
            content: '';
            background-color: ${colors.primary};
            transition: all 0.25s linear;
        }
    }
`;

const PeopleName = styled(PersonalName)`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const SearchContainer = styled.div`
    padding: 0px 20px;
`;

const ChatContainer = styled.div`
    //display: flex;
    //flex-direction: column;
    padding: 0px 40px;
    flex: 1;
    overflow-x: hidden;
    overflow-y: auto;

    scrollbar-color: ${(props) =>
        colors.primary + ' ' + props.theme.SECONDARY_BACKGROUND_COLOR};
    scrollbar-width: thin;
`;

const Foot = styled(FlexDisplay)`
    flex-direction: row;
    width: 100%;
    //justify-content: center;
    align-items: center;
    height: 100px;
    padding: 0px 40px;
`;

const SendButton = styled.button`
    background-color: ${colors.primary};
    border-radius: 100%;
    width: 60px;
    height: 60px;
    border: none;
    margin-left: 20px;
    padding: 0px;
`;

interface MessageProps {
    verient: 'SENDER' | 'RECEIVER';
}

const Message = styled.div`
    display: flex;
    flex-direction: column;
    align-items: ${(props: MessageProps) =>
        props.verient === 'SENDER' ? 'flex-end' : 'flex-start'};
`;

const ReceiversMessage = styled.div`
    padding: 10px 20px;
    width: fit-content;
    background-color: ${(props) => props.theme.PRIMARY_BACKGROUND_COLOR};
    margin-bottom: 20px;
    color: ${(props) => props.theme.SECONDARY_TEXT_COLOR};
    max-width: 60%;
    word-wrap: break-word;

    border-top-left-radius: 0;
    border-bottom-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
`;

const SendersMessage = styled.div`
    padding: 10px 20px;
    width: fit-content;
    background-color: ${(props) => colors.primary};
    margin-bottom: 20px;
    color: #fff;
    max-width: 60%;
    word-wrap: break-word;

    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 10px;
`;
