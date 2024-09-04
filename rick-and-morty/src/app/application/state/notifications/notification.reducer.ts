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
 * Reducer para el estado de las notificaciones.
 *
 * El reducer utiliza el operador "on" para escuchar las acciones
 * addNotification y removeNotification.
 *
 * Cuando se agrega una notificacion, se crea un nuevo estado que incluye
 * la notificacion en la lista de notificaciones.
 *
 * Cuando se elimina una notificacion, se crea un nuevo estado que excluye
 * la notificacion de la lista de notificaciones.
 */
export const notificationReducer = createReducer(
  initialState,

  on(addNotification, (state, { notification }) => ({
    ...state,
    notifications: [...state.notifications, notification]
  })),

  on(removeNotification, (state, { id }) => ({
    ...state,
    notifications: state.notifications.filter(notif => notif.id !== id)
  }))
)
