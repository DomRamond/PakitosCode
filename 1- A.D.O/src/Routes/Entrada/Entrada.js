import React from "react"
import Menu from "../../Components/Menu/Menu"
import "./styles.css"

export default function Entrada() {
    return (
        <div className="main">
            <Menu item_active={2} />

            <div className="container-main">

                <div className="container-header">
                    <h1 className="title-page">Entrada de oradores à congregação</h1>

                    <button className="add-button">
                        Adicionar
                    </button>
                </div>


            </div>

        </div>
    )
}