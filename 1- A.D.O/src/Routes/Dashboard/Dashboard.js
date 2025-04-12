import React from "react";
import Menu from "../../Components/Menu/Menu";
import "./styles.css"

export default function Dashboard(){
    return (
        <div className="main">
            <Menu item_active={1}/>
        </div>
    )
}