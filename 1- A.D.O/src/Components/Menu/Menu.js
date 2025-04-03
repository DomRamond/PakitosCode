import React from "react"
import "./styles.css"

export default function Menu(){
    return (
        <div className="main-menu">
            <div className="container-icon">
                <img src={require("../../Icons/appIcon.png")} height={45} width={50}/>
                <h1 className="title-menu">A.D.O</h1>
            </div>
        </div>
    )
}