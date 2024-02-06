import { RegisterData } from "./types/RegisterData";
import { Сonfirmation } from "./types/Сonfirmation";

export const emailСonfirmationFetch = async (obj:RegisterData)=>{
    try {
      console.log(obj)
        const response = await fetch('/register/sendCode', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(obj),
        });
        
        const data = await response.json()
        return data
      } catch (error) {
        console.error('Ошибка сети', error);
      }

}

export const userRegistationFetch = async (obj:Сonfirmation) =>{
  try {
    console.log(obj)
    const response = await fetch('/register/verifyCode', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    });
    const data = await response.json()
    return data
   
  } catch (error) {
    console.error('Ошибка сети', error);
  }
}

