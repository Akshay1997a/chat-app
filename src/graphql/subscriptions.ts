/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      userName
      name
      status
      isVerified
      isDeactive
      avatar
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      userName
      name
      status
      isVerified
      isDeactive
      avatar
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      userName
      name
      status
      isVerified
      isDeactive
      avatar
      createdAt
      updatedAt
    }
  }
`;
export const onCreateRoom = /* GraphQL */ `
  subscription OnCreateRoom {
    onCreateRoom {
      id
      title
      description
      messages {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateRoom = /* GraphQL */ `
  subscription OnUpdateRoom {
    onUpdateRoom {
      id
      title
      description
      messages {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteRoom = /* GraphQL */ `
  subscription OnDeleteRoom {
    onDeleteRoom {
      id
      title
      description
      messages {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage {
    onCreateMessage {
      id
      parentId
      roomId
      roomType
      toPersonId
      toPersonEmail
      text
      markdown
      html
      files
      personId
      personEmail
      mentionedPeople
      mentionedGroups
      attachments
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage {
    onUpdateMessage {
      id
      parentId
      roomId
      roomType
      toPersonId
      toPersonEmail
      text
      markdown
      html
      files
      personId
      personEmail
      mentionedPeople
      mentionedGroups
      attachments
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage {
    onDeleteMessage {
      id
      parentId
      roomId
      roomType
      toPersonId
      toPersonEmail
      text
      markdown
      html
      files
      personId
      personEmail
      mentionedPeople
      mentionedGroups
      attachments
      createdAt
      updatedAt
    }
  }
`;
