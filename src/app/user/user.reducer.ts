import { EntityAdapter, EntityState, createEntityAdapter } from "@ngrx/entity";
import * as UserActions from './user.actions';
import { createReducer, on } from "@ngrx/store";
import { User } from "./user.model";

export interface State extends EntityState<User> {
  selectedUserId: string | null;
}

export function selectedUserId(a: User): string {
  return a.id;
}

export function sortByName(a: User, b: User): number {
  return a.name.localeCompare(b.name);
}

export const adapter: EntityAdapter<User> = createEntityAdapter<User> ({
  selectId: selectedUserId,
  sortComparer: sortByName
})

export const initialState: State = adapter.getInitialState({
  selectedUserId: null,
});

export const userReducer = createReducer(
  initialState,
  on(UserActions.addUser, (state, {user}) => {
    return adapter.addOne(user, state)
  }),
  on(UserActions.setUsers, (state, {users}) => {
    return adapter.addMany(users, state)
  }))

  export const getSelectedUserId = (state: State) => state.selectedUserId;

  const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal
  } = adapter.getSelectors();

  export const selectUserIds = selectIds;

  export const selectUserEntities = selectEntities;

  export const selectAllUsers = selectAll;

  export const selectUserTotal = selectTotal;