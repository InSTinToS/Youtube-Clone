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
    user: IUser | null;
  }

  interface IUserOnQueryArguments {
    _id: string;
  }

  interface ICategory {
    __typename: 'Category';
    _id: string;
    label: string;
  }

  interface IUser {
    __typename: 'User';
    _id: string;
    avatar: string;
  }

  interface IMutation {
    __typename: 'Mutation';
    updateCategories: Array<ICategory> | null;
    addCategories: Array<ICategory> | null;
    deleteCategories: IDeletedCount | null;
    addUser: IUser | null;
    updateUser: IUser | null;
    deleteUser: IUser | null;
  }

  interface IUpdateCategoriesOnMutationArguments {
    updatedCategories: Array<ICategoryToUpdate>;
  }

  interface IAddCategoriesOnMutationArguments {
    newCategories: Array<ICategoryToAdd>;
  }

  interface IDeleteCategoriesOnMutationArguments {
    categoriesToDelete: Array<ICategoryToUpdate>;
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

  interface ICategoryToUpdate {
    _id: string;
    label: string;
  }

  interface ICategoryToAdd {
    label: string;
  }

  interface IDeletedCount {
    __typename: 'DeletedCount';
    deletedCount: number | null;
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
