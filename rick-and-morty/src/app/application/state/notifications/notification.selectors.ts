import { createFeatureSelector, createSelector } from "@ngrx/store";
import { NotificationState } from "..";

/**
 * Archivo que contiene los selectores del estado de las notificaciones.
 *
 * Un selector es una funcion que nos permite obtener un valor de una parte
 * del estado de la aplicacion. En este caso, los selectores nos permiten
 * obtener el estado de las notificaciones y la lista de notificaciones.
 *
 * Los selectores se definen utilizando la funcion createSelector de la libreria
 * @ngrx/store.
 *
 * La funcion createSelector recibe dos argumentos:
 * - El primer argumento es un selector que nos permite obtener el estado de
 *   las notificaciones.
 * - El segundo argumento es una funcion que nos permite obtener el valor que
 *   queremos obtener del estado de las notificaciones.
 *
 * La funcion createSelector devuelve un selector que nos permite obtener el
 * valor que queremos del estado de las notificaciones.
 *
 * En este archivo, se definen dos selectores:
 * - selectNotificationState: nos permite obtener el estado de las notificaciones.
 * - selectAllNotifications: nos permite obtener la lista de notificaciones.
 */
export const selectNotificationState = createFeatureSelector<NotificationState>('notifications');

export const selectAllNotifications = createSelector(
  selectNotificationState,
  (state) => state.notifications
)