import db from "../../Database/InitFirestore"
import { Timestamp, setDoc, doc, query, where, collection, getDocs } from "firebase/firestore"
import { signOut } from "firebase/auth"
import auth from "../../Database/InitAuth"

const verifyExistRegister = (email, name_congregation) => {
    const congregations_ref = collection(db, "Congregations")
    return new Promise(async (resolve, reject) => {
        try {
            const q1 = query(congregations_ref, where("email", "==", email))
            const email_match = await getDocs(q1)
            const q2 = query(congregations_ref, where("name_congregation", "==", name_congregation))
            const name_match = await getDocs(q2)
            if (email_match.docs.length === 0 && name_match.docs.length === 0) {
                resolve({ create: true, exists: false })
            } else {
                resolve({ create: false, exists: true })
            }
        } catch (error) {
            reject({ message: error.message })
        }
    })
}

const createDocs = (data, uid) => {
    return new Promise(async (resolve, reject) => {
        verifyExistRegister(data.email, data.name_congregation)
            .then(async res => {
                if (res.create) {
                    try {
                        await setDoc(doc(db, "Congregations", uid), {
                            name_congregation: data.name_congregation.toUpperCase(),
                            city: data.city.toUpperCase(),
                            state: data.state.toUpperCase(),
                            name_responsible: data.name_responsible.toUpperCase(),
                            email: data.email,
                            phone: data.phone,
                            cpf: data.cpf,
                            createdAt: Timestamp.now()
                        })
                        await signOut(auth)
                        resolve({ sucess: true })
                    } catch (error) {
                        reject({ sucess: false, message: error.message })
                    }
                } else {
                    alert("E-mail / Congregação já cadastrada!")
                }
            })
            .catch(err => alert(err.message))


    })
}

export { createDocs }