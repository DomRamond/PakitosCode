import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import Menu from "../../Components/Menu/Menu";

export default function Main() {
    /*const navigation = useNavigate()
    useEffect(() => { 
        // Será executado apenas 1 vez assim que a tela for carregada
        navigation("/signUp")
    }, []
    )*/
    return (
        <div style={{
            backgroundColor: "#323842",
            display: "flex",
            flexDirection: "column",
            width: "100%",
            minHeight: "100dvh"
        }}>
            <Menu />

        </div>
    )
}