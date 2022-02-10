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
    categories: Array<ICategory>;
    users: Array<IUser | null> | null;
  }

  interface ICategory {
    __typename: 'Category';
    _id: string;
    label: string;
  }

  interface IUser {
    __typename: 'User';
    _id: string;
    name: string;
    avatar: string;
  }

  interface IMutation {
    __typename: 'Mutation';
    addCategories: IAddCategoriesReturn | null;
    updateCategories: IUpdateCategoriesReturn | null;
    deleteCategories: IDeleteCategoriesReturn | null;
    addUsers: IAddUsersReturn | null;
    updateUsers: IUpdateUsersReturn | null;
    deleteUsers: IDeleteUsersReturn | null;
  }

  interface IAddCategoriesOnMutationArguments {
    params?: IAddCategoriesParams | null;
  }

  interface IUpdateCategoriesOnMutationArguments {
    params?: IUpdateCategoriesParams | null;
  }

  interface IDeleteCategoriesOnMutationArguments {
    params?: IDeleteCategoriesParams | null;
  }

  interface IAddUsersOnMutationArguments {
    params?: IAddUsersParams | null;
  }

  interface IUpdateUsersOnMutationArguments {
    params?: IUpdateUsersParams | null;
  }

  interface IDeleteUsersOnMutationArguments {
    params?: IDeleteUsersParams | null;
  }

  interface IAddCategoriesParams {
    returnAll?: boolean | null;
    categoriesToAdd?: Array<ICategoriesToAdd> | null;
  }

  interface ICategoriesToAdd {
    label: string;
  }

  interface IAddCategoriesReturn {
    __typename: 'AddCategoriesReturn';
    all: Array<ICategory> | null;
    addedData: Array<ICategory> | null;
  }

  interface IUpdateCategoriesParams {
    returnAll?: boolean | null;
    categoriesToUpdate?: Array<ICategoryToUpdate> | null;
  }

  interface ICategoryToUpdate {
    _id: string;
    label: string;
  }

  interface IUpdateCategoriesReturn {
    __typename: 'UpdateCategoriesReturn';
    all: Array<ICategory> | null;
    updatedData: Array<ICategory> | null;
  }

  interface IDeleteCategoriesParams {
    returnAll?: boolean | null;
    idsToDelete?: Array<string> | null;
  }

  interface IDeleteCategoriesReturn {
    __typename: 'DeleteCategoriesReturn';
    all: Array<ICategory> | null;
    deletedData: Array<ICategory> | null;
  }

  interface IAddUsersParams {
    returnAll?: boolean | null;
    usersToAdd?: Array<IUserToAdd> | null;
  }

  interface IUserToAdd {
    name: string;
    avatar: string;
  }

  interface IAddUsersReturn {
    __typename: 'AddUsersReturn';
    all: Array<IUser> | null;
    addedData: Array<IUser> | null;
  }

  interface IUpdateUsersParams {
    returnAll?: boolean | null;
    usersToUpdate?: Array<IUserToUpdate> | null;
  }

  interface IUserToUpdate {
    _id: string;
    name: string;
    avatar: string;
  }

  interface IUpdateUsersReturn {
    __typename: 'UpdateUsersReturn';
    all: Array<IUser> | null;
    updatedData: Array<IUser> | null;
  }

  interface IDeleteUsersParams {
    returnAll?: boolean | null;
    idsToDelete?: Array<string> | null;
  }

  interface IDeleteUsersReturn {
    __typename: 'DeleteUsersReturn';
    all: Array<IUser> | null;
    deletedData: Array<IUser> | null;
  }

  interface IUserToDelete {
    _id: string;
  }
}

// tslint:enable
