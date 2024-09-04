import { createAction, props } from "@ngrx/store";
import { NotificationModel } from "../../../domain/models";

/**
 * Accion para agregar una notificacion
 *
 * Se encarga de agregar una notificacion al estado de la aplicacion.
 * La notificacion se pasa como parametro en la accion.
 *
 * @param notification: La notificacion a agregar al estado.
 */
export const addNotification = createAction(
  '[Notification] Add Notification', // Identificador de la accion
  props<{ notification: NotificationModel }>() // Parametros
)

/**
 * Accion para remover una notificacion
 *
 * Se encarga de remover una notificacion del estado de la aplicacion.
 * El identificador de la notificacion se pasa como parametro en la accion.
 *
 * @param id: El identificador de la notificacion a remover del estado.
 */
export const removeNotification = createAction(
  '[Notification] Remove Notification', // Identificador de la accion
  props<{ id: string }>() // Parametros
)