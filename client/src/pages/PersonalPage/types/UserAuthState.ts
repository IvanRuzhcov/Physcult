import User from "./User";

export default interface UserAuthState{
    user: User | undefined
    authChecked: boolean
}