import React from "react"
import "./styles.css"
import { MdOutlineDashboard, MdOutlineOutbox } from "react-icons/md";
import { RiInboxArchiveLine } from "react-icons/ri";
import { PiFolderSimpleStarFill } from "react-icons/pi";

export default function Menu({ item_active }) {
    const dynamic_styles = {
        containerColor: (number) => item_active === number && "#fff",
        itemColor: (number) => item_active === number && "purple",
        itemWeight: (number) => item_active === number && "500",
    }
    return (
        <div className="main-menu">
            <div className="container-icon"
            >
                <img src={require("../../Icons/appIcon.png")} height={45} width={50} alt="" />
                <h1 className="title-menu">A.D.O</h1>
            </div>

            <div className="container-painel">
                <span style={{ color: '#fff', fontWeight: 600 }}>Painel</span>

                <div className="container-item-menu"
                    style={{ backgroundColor: dynamic_styles.containerColor(1) }}
                >
                    <MdOutlineDashboard size={24}
                        className="icon-menu"
                        color={dynamic_styles.itemColor(1)}
                    />
                    <span className="label-item-menu"
                        style={{
                            color: dynamic_styles.itemColor(1),
                            fontWeight: dynamic_styles.itemWeight(1)
                        }}
                    >Dashboard</span>
                </div>

                <div className="container-item-menu"
                    style={{ backgroundColor: dynamic_styles.containerColor(2) }}
                >
                    <RiInboxArchiveLine size={24} className="icon-menu"
                        color={dynamic_styles.itemColor(2)}
                    />
                    <span className="label-item-menu"
                        style={{
                            color: dynamic_styles.itemColor(2),
                            fontWeight: dynamic_styles.itemWeight(2)
                        }}
                    >Entrada</span>
                </div>

                <div className="container-item-menu"
                    style={{ backgroundColor: dynamic_styles.containerColor(3) }}
                >
                    <MdOutlineOutbox size={24} className="icon-menu"
                        color={dynamic_styles.itemColor(3)}
                    />
                    <span className="label-item-menu"
                        style={{
                            color: dynamic_styles.itemColor(3),
                            fontWeight: dynamic_styles.itemWeight(3)
                        }}
                    >Saída</span>
                </div>

                <div className="container-item-menu"
                    style={{ backgroundColor: dynamic_styles.containerColor(4) }}
                >
                    <PiFolderSimpleStarFill size={24} className="icon-menu"
                        color={dynamic_styles.itemColor(4)}
                    />
                    <span className="label-item-menu"
                        style={{
                            color: dynamic_styles.itemColor(4),
                            fontWeight: dynamic_styles.itemWeight(4)
                        }}
                    >Eventos especiais</span>
                </div>
            </div>
        </div>
    )
}