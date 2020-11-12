/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  userName: string,
  name?: string | null,
  status?: string | null,
  isVerified?: boolean | null,
  isDeactive?: boolean | null,
  avatar?: string | null,
};

export type ModelUserConditionInput = {
  userName?: ModelStringInput | null,
  name?: ModelStringInput | null,
  status?: ModelStringInput | null,
  isVerified?: ModelBooleanInput | null,
  isDeactive?: ModelBooleanInput | null,
  avatar?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateUserInput = {
  id: string,
  userName?: string | null,
  name?: string | null,
  status?: string | null,
  isVerified?: boolean | null,
  isDeactive?: boolean | null,
  avatar?: string | null,
};

export type DeleteUserInput = {
  id?: string | null,
};

export type CreateRoomInput = {
  id?: string | null,
  title?: string | null,
  description?: string | null,
};

export type ModelRoomConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelRoomConditionInput | null > | null,
  or?: Array< ModelRoomConditionInput | null > | null,
  not?: ModelRoomConditionInput | null,
};

export type UpdateRoomInput = {
  id: string,
  title?: string | null,
  description?: string | null,
};

export type DeleteRoomInput = {
  id?: string | null,
};

export type CreateMessageInput = {
  id?: string | null,
  parentId?: string | null,
  roomId: string,
  roomType?: string | null,
  toPersonId?: string | null,
  toPersonEmail?: string | null,
  text?: string | null,
  markdown?: string | null,
  html?: string | null,
  files?: Array< string | null > | null,
  personId?: string | null,
  personEmail?: string | null,
  mentionedPeople?: Array< string | null > | null,
  mentionedGroups?: Array< string | null > | null,
  attachments?: Array< string | null > | null,
};

export type ModelMessageConditionInput = {
  parentId?: ModelIDInput | null,
  roomId?: ModelIDInput | null,
  roomType?: ModelStringInput | null,
  toPersonId?: ModelIDInput | null,
  toPersonEmail?: ModelStringInput | null,
  text?: ModelStringInput | null,
  markdown?: ModelStringInput | null,
  html?: ModelStringInput | null,
  files?: ModelStringInput | null,
  personId?: ModelIDInput | null,
  personEmail?: ModelStringInput | null,
  mentionedPeople?: ModelIDInput | null,
  mentionedGroups?: ModelStringInput | null,
  attachments?: ModelStringInput | null,
  and?: Array< ModelMessageConditionInput | null > | null,
  or?: Array< ModelMessageConditionInput | null > | null,
  not?: ModelMessageConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateMessageInput = {
  id: string,
  parentId?: string | null,
  roomId?: string | null,
  roomType?: string | null,
  toPersonId?: string | null,
  toPersonEmail?: string | null,
  text?: string | null,
  markdown?: string | null,
  html?: string | null,
  files?: Array< string | null > | null,
  personId?: string | null,
  personEmail?: string | null,
  mentionedPeople?: Array< string | null > | null,
  mentionedGroups?: Array< string | null > | null,
  attachments?: Array< string | null > | null,
};

export type DeleteMessageInput = {
  id?: string | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  userName?: ModelStringInput | null,
  name?: ModelStringInput | null,
  status?: ModelStringInput | null,
  isVerified?: ModelBooleanInput | null,
  isDeactive?: ModelBooleanInput | null,
  avatar?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelRoomFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelRoomFilterInput | null > | null,
  or?: Array< ModelRoomFilterInput | null > | null,
  not?: ModelRoomFilterInput | null,
};

export type ModelMessageFilterInput = {
  id?: ModelIDInput | null,
  parentId?: ModelIDInput | null,
  roomId?: ModelIDInput | null,
  roomType?: ModelStringInput | null,
  toPersonId?: ModelIDInput | null,
  toPersonEmail?: ModelStringInput | null,
  text?: ModelStringInput | null,
  markdown?: ModelStringInput | null,
  html?: ModelStringInput | null,
  files?: ModelStringInput | null,
  personId?: ModelIDInput | null,
  personEmail?: ModelStringInput | null,
  mentionedPeople?: ModelIDInput | null,
  mentionedGroups?: ModelStringInput | null,
  attachments?: ModelStringInput | null,
  and?: Array< ModelMessageFilterInput | null > | null,
  or?: Array< ModelMessageFilterInput | null > | null,
  not?: ModelMessageFilterInput | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser:  {
    __typename: "User",
    id: string,
    userName: string,
    name: string | null,
    status: string | null,
    isVerified: boolean | null,
    isDeactive: boolean | null,
    avatar: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser:  {
    __typename: "User",
    id: string,
    userName: string,
    name: string | null,
    status: string | null,
    isVerified: boolean | null,
    isDeactive: boolean | null,
    avatar: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser:  {
    __typename: "User",
    id: string,
    userName: string,
    name: string | null,
    status: string | null,
    isVerified: boolean | null,
    isDeactive: boolean | null,
    avatar: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateRoomMutationVariables = {
  input: CreateRoomInput,
  condition?: ModelRoomConditionInput | null,
};

export type CreateRoomMutation = {
  createRoom:  {
    __typename: "Room",
    id: string,
    title: string | null,
    description: string | null,
    messages:  {
      __typename: "ModelMessageConnection",
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateRoomMutationVariables = {
  input: UpdateRoomInput,
  condition?: ModelRoomConditionInput | null,
};

export type UpdateRoomMutation = {
  updateRoom:  {
    __typename: "Room",
    id: string,
    title: string | null,
    description: string | null,
    messages:  {
      __typename: "ModelMessageConnection",
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteRoomMutationVariables = {
  input: DeleteRoomInput,
  condition?: ModelRoomConditionInput | null,
};

export type DeleteRoomMutation = {
  deleteRoom:  {
    __typename: "Room",
    id: string,
    title: string | null,
    description: string | null,
    messages:  {
      __typename: "ModelMessageConnection",
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateMessageMutationVariables = {
  input: CreateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type CreateMessageMutation = {
  createMessage:  {
    __typename: "Message",
    id: string,
    parentId: string | null,
    roomId: string,
    roomType: string | null,
    toPersonId: string | null,
    toPersonEmail: string | null,
    text: string | null,
    markdown: string | null,
    html: string | null,
    files: Array< string | null > | null,
    personId: string | null,
    personEmail: string | null,
    mentionedPeople: Array< string | null > | null,
    mentionedGroups: Array< string | null > | null,
    attachments: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMessageMutationVariables = {
  input: UpdateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type UpdateMessageMutation = {
  updateMessage:  {
    __typename: "Message",
    id: string,
    parentId: string | null,
    roomId: string,
    roomType: string | null,
    toPersonId: string | null,
    toPersonEmail: string | null,
    text: string | null,
    markdown: string | null,
    html: string | null,
    files: Array< string | null > | null,
    personId: string | null,
    personEmail: string | null,
    mentionedPeople: Array< string | null > | null,
    mentionedGroups: Array< string | null > | null,
    attachments: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMessageMutationVariables = {
  input: DeleteMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type DeleteMessageMutation = {
  deleteMessage:  {
    __typename: "Message",
    id: string,
    parentId: string | null,
    roomId: string,
    roomType: string | null,
    toPersonId: string | null,
    toPersonEmail: string | null,
    text: string | null,
    markdown: string | null,
    html: string | null,
    files: Array< string | null > | null,
    personId: string | null,
    personEmail: string | null,
    mentionedPeople: Array< string | null > | null,
    mentionedGroups: Array< string | null > | null,
    attachments: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser:  {
    __typename: "User",
    id: string,
    userName: string,
    name: string | null,
    status: string | null,
    isVerified: boolean | null,
    isDeactive: boolean | null,
    avatar: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      userName: string,
      name: string | null,
      status: string | null,
      isVerified: boolean | null,
      isDeactive: boolean | null,
      avatar: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetRoomQueryVariables = {
  id: string,
};

export type GetRoomQuery = {
  getRoom:  {
    __typename: "Room",
    id: string,
    title: string | null,
    description: string | null,
    messages:  {
      __typename: "ModelMessageConnection",
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListRoomsQueryVariables = {
  filter?: ModelRoomFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRoomsQuery = {
  listRooms:  {
    __typename: "ModelRoomConnection",
    items:  Array< {
      __typename: "Room",
      id: string,
      title: string | null,
      description: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetMessageQueryVariables = {
  id: string,
};

export type GetMessageQuery = {
  getMessage:  {
    __typename: "Message",
    id: string,
    parentId: string | null,
    roomId: string,
    roomType: string | null,
    toPersonId: string | null,
    toPersonEmail: string | null,
    text: string | null,
    markdown: string | null,
    html: string | null,
    files: Array< string | null > | null,
    personId: string | null,
    personEmail: string | null,
    mentionedPeople: Array< string | null > | null,
    mentionedGroups: Array< string | null > | null,
    attachments: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMessagesQueryVariables = {
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMessagesQuery = {
  listMessages:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      parentId: string | null,
      roomId: string,
      roomType: string | null,
      toPersonId: string | null,
      toPersonEmail: string | null,
      text: string | null,
      markdown: string | null,
      html: string | null,
      files: Array< string | null > | null,
      personId: string | null,
      personEmail: string | null,
      mentionedPeople: Array< string | null > | null,
      mentionedGroups: Array< string | null > | null,
      attachments: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser:  {
    __typename: "User",
    id: string,
    userName: string,
    name: string | null,
    status: string | null,
    isVerified: boolean | null,
    isDeactive: boolean | null,
    avatar: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser:  {
    __typename: "User",
    id: string,
    userName: string,
    name: string | null,
    status: string | null,
    isVerified: boolean | null,
    isDeactive: boolean | null,
    avatar: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser:  {
    __typename: "User",
    id: string,
    userName: string,
    name: string | null,
    status: string | null,
    isVerified: boolean | null,
    isDeactive: boolean | null,
    avatar: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateRoomSubscription = {
  onCreateRoom:  {
    __typename: "Room",
    id: string,
    title: string | null,
    description: string | null,
    messages:  {
      __typename: "ModelMessageConnection",
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateRoomSubscription = {
  onUpdateRoom:  {
    __typename: "Room",
    id: string,
    title: string | null,
    description: string | null,
    messages:  {
      __typename: "ModelMessageConnection",
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteRoomSubscription = {
  onDeleteRoom:  {
    __typename: "Room",
    id: string,
    title: string | null,
    description: string | null,
    messages:  {
      __typename: "ModelMessageConnection",
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateMessageSubscription = {
  onCreateMessage:  {
    __typename: "Message",
    id: string,
    parentId: string | null,
    roomId: string,
    roomType: string | null,
    toPersonId: string | null,
    toPersonEmail: string | null,
    text: string | null,
    markdown: string | null,
    html: string | null,
    files: Array< string | null > | null,
    personId: string | null,
    personEmail: string | null,
    mentionedPeople: Array< string | null > | null,
    mentionedGroups: Array< string | null > | null,
    attachments: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMessageSubscription = {
  onUpdateMessage:  {
    __typename: "Message",
    id: string,
    parentId: string | null,
    roomId: string,
    roomType: string | null,
    toPersonId: string | null,
    toPersonEmail: string | null,
    text: string | null,
    markdown: string | null,
    html: string | null,
    files: Array< string | null > | null,
    personId: string | null,
    personEmail: string | null,
    mentionedPeople: Array< string | null > | null,
    mentionedGroups: Array< string | null > | null,
    attachments: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMessageSubscription = {
  onDeleteMessage:  {
    __typename: "Message",
    id: string,
    parentId: string | null,
    roomId: string,
    roomType: string | null,
    toPersonId: string | null,
    toPersonEmail: string | null,
    text: string | null,
    markdown: string | null,
    html: string | null,
    files: Array< string | null > | null,
    personId: string | null,
    personEmail: string | null,
    mentionedPeople: Array< string | null > | null,
    mentionedGroups: Array< string | null > | null,
    attachments: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
