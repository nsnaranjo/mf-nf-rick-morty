import { createReducer, on } from "@ngrx/store";
import { addNotification, removeNotification } from "./notification.actions";
import { NotificationModel } from "../../../domain/models";


export interface NotificationState {
  notifications: NotificationModel[]
}

export const initialState: NotificationState = {
  notifications: []
}

/**
 * Creates a reducer for the notifications state.
 *
 * The reducer handles the following actions:
 * - addNotification: adds a new notification to the state
 * - removeNotification: removes a notification from the state by its id
 *
 * Returns a new state with the updated notifications array.
 */
export const notificationReducer = createReducer(
  initialState,
  // When a new notification is added, create a new state with the new notification
  // added to the existing notifications array.
  on(addNotification, (state, { notification }) => ({
    ...state,
    notifications: [...state.notifications, notification]
  })),
  // When a notification is removed, create a new state with the notification
  // removed from the existing notifications array.
  on(removeNotification, (state, { id }) => ({
    ...state,
    notifications: state.notifications.filter(notif => notif.id !== id)
  }))
)
