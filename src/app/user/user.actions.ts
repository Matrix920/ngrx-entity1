import { createAction, createActionGroup, props } from "@ngrx/store";
import { User } from './user.model';
import { Update, EntityMap, EntityMapOne, Predicate } from '@ngrx/entity'

export const loadUsers = createAction('[User/API] Load Users', props<{users: User[]}>());

export const setUsers = createAction('[User/API] Set Users', props<{users: User[]}>());

export const addUser = createAction('[User/API] Add User', props<{user: User}>());

export const updateUsers = createAction('[User/API] Update Users', props<{updates: Update<User>[]}>())

export const updateUser = createAction("[User/API] Update User", props<{user: Update<User>}>())

export const mapUser = createAction('[User/API] Map User', props<{entityMap: EntityMap<User>}>())

export const mapUsers = createAction('[User/API] Map Users', props<{entityUsers: EntityMap<User>[]}>())

export const deleteUser = createAction('[User/API] Delete User', props<{id: string}>())

export const deletesUserByPredicate = createAction('[User/API] Delete Users By Predicate', props<{predicate: Predicate<User>}>());

export const clearUsers = createAction('[User/API] Clear Users');