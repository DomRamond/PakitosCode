import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"

export default function Main() {
    const navigation = useNavigate()
    useEffect(() => { 
        // Será executado apenas 1 vez assim que a tela for carregada
        navigation("/signUp")
    }, []
    )
    return (
        <div>
            <p>Essa é a tela de redirecionamento</p>
        </div>
    )
}