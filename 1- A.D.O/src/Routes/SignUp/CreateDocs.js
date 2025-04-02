import db from "../../Database/InitFirestore"
import { Timestamp, setDoc, doc } from "firebase/firestore"
import { signOut } from "firebase/auth"
import auth from "../../Database/InitAuth"

const createDocs = (data, uid) => {
    return new Promise(async (resolve, reject) => {
        try {
            await setDoc(doc(db, "Congregations", uid), {
                name_congregation: data.name_congregation.toUpperCase(),
                city: data.city.toUpperCase(),
                state: data.state.toUpperCase(),
                name_responsible: data.name_responsible.toUpperCase(),
                phone: data.phone,
                cpf: data.cpf,
                createdAt: Timestamp.now()
            })
            await signOut(auth)
            resolve({ sucess: true })
        } catch (error) {
            reject({ sucess: false, message: error.message })
        }

    })
}

export { createDocs }