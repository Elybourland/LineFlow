export enum NotificationType {
    Info = 1,
    Warning = 2,
    Error = 3
}


export interface Notification {
    id: string,
    type: string,
    message: NotificationType
}