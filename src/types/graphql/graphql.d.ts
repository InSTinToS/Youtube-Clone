// tslint:disable
// graphql typescript definitions

declare namespace GQL {
  interface IGraphQLResponseRoot {
    data?: IQuery | IMutation;
    errors?: Array<IGraphQLResponseError>;
  }

  interface IGraphQLResponseError {
    /** Required for all errors */
    message: string;
    locations?: Array<IGraphQLResponseErrorLocation>;
    /** 7.2.2 says 'GraphQL servers may provide additional entries to error' */
    [propName: string]: any;
  }

  interface IGraphQLResponseErrorLocation {
    line: number;
    column: number;
  }

  interface IQuery {
    __typename: 'Query';
    users: Array<IUser | null> | null;
    user: IUser | null;
  }

  interface IUserOnQueryArguments {
    _id: string;
  }

  interface IUser {
    __typename: 'User';
    _id: string;
    avatar: string | null;
  }

  interface IMutation {
    __typename: 'Mutation';
    addUser: IUser | null;
    updateUser: IUser | null;
    deleteUser: IUser | null;
  }

  interface IAddUserOnMutationArguments {
    user: IUserToAdd;
  }

  interface IUpdateUserOnMutationArguments {
    user: IUserToUpdate;
  }

  interface IDeleteUserOnMutationArguments {
    userId: string;
  }

  interface IUserToAdd {
    avatar: string;
  }

  interface IUserToUpdate {
    _id: string;
    avatar: string;
  }

  interface IUserToDelete {
    _id: string;
  }
}

// tslint:enable
