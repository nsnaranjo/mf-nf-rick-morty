import { createAction, props } from "@ngrx/store";
import { NotificationModel } from "../../../domain/models";

export const addNotification = createAction(
  '[Notification] Add Notification',
  props<{ notification: NotificationModel }>()
)

export const removeNotification = createAction(
  '[Notification] Remove Notification',
  props<{ id: string }>()
)