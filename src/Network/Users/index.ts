import { API, graphqlOperation } from 'aws-amplify';
import {
    CreateUserInput,
    GetUserQueryVariables,
    UpdateUserInput,
} from '../../API';
import {
    createUser as createUserAPI,
    updateUser as updateUserAPI,
} from '../../graphql/mutations';
import { getUser as getUserAPI } from '../../graphql/queries';

export async function createUser(props: CreateUserInput) {
    return await API.graphql(graphqlOperation(createUserAPI, { input: props }));
}

export async function getUser(params: GetUserQueryVariables) {
    return await API.graphql({
        query: getUserAPI,
        variables: params,
    });
}

export async function updateUser(params: UpdateUserInput) {
    return await API.graphql(
        graphqlOperation(updateUserAPI, {
            input: params,
        })
    );
}
