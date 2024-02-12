import { RegisterData } from "./RegisterData";

export interface Сonfirmation extends Omit<RegisterData, 'repeatPassword'> {
    verificationCode:string
}