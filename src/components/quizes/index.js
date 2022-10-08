import {Age4ColorIdentificationQuestion} from './age-4-color-identification'

export const getQuiz = (age,subject)=>{
    if(age='4'){
        switch (subject) {
            case 'color-identification':
                return Age4ColorIdentificationQuestion;
            default:
                return [];
        }
    }
}