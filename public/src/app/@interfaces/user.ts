export interface User {
    _id: string;
    login: string;
    email: string;
    name?: string;
    registred: object;
    isLogged: boolean;
    lastOnline?: object;
}
