import auth from "../../Database/InitAuth"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"

const createUser = (email, password) => {
    return new Promise((resolve, reject) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                signInWithEmailAndPassword(auth, email, password)
                    .then(() => resolve(userCredential))
                    .catch(error => reject(error.message))
            })
            .catch(error => {
                reject(error.message)
            })
    })
}

export { createUser }