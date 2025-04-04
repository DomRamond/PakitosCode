import React from "react"
import "./styles.css"
import { MdOutlineDashboard, MdOutlineOutbox } from "react-icons/md";
import { RiInboxArchiveLine } from "react-icons/ri";
import { PiFolderSimpleStarFill } from "react-icons/pi";
import { FaRegBell } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { GoGear } from "react-icons/go";

export default function Menu({ item_active }) {
    const navigate = useNavigate()

    const dynamic_styles = {
        containerColor: (number) => item_active === number && "#f2f2fd",
        itemColor: (number) => item_active === number && "#636AE8",
        itemWeight: (number) => item_active === number && "500",
    }
    return (
        <div className="main-menu">
            <div className="container-icon">
                <img src={require("../../Icons/appIcon.png")} height={45} width={50} alt="" />
                <h1 className="title-menu">A.D.O</h1>
            </div>

            <div className="container-painel">
                <span className="label-subtitle">Painel</span>

                <div className="container-item-menu"
                    style={{ backgroundColor: dynamic_styles.containerColor(1) }}
                    onClick={() => navigate("/dashboard")}
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
                    onClick={() => navigate("/entrada")}
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
                    onClick={() => navigate("/saida")}
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
                    onClick={() => navigate("/eventos-especiais")}
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

            <div className="separator"></div>

            <div className="container-painel">
                <span className="label-subtitle">Pessoal</span>

                <div className="container-item-menu"
                    style={{ backgroundColor: dynamic_styles.containerColor(5) }}
                    onClick={() => navigate("/notifications")}
                >
                    <FaRegBell size={24} className="icon-menu"
                        color={dynamic_styles.itemColor(5)}
                    />
                    <span className="label-item-menu"
                        style={{
                            color: dynamic_styles.itemColor(5),
                            fontWeight: dynamic_styles.itemWeight(5)
                        }}
                    >Notificações</span>
                </div>

                <div className="container-item-menu"
                    style={{ backgroundColor: dynamic_styles.containerColor(6) }}
                    onClick={() => navigate("/settings")}
                >
                    <GoGear size={24} className="icon-menu"
                        color={dynamic_styles.itemColor(6)}
                    />
                    <span className="label-item-menu"
                        style={{
                            color: dynamic_styles.itemColor(6),
                            fontWeight: dynamic_styles.itemWeight(6)
                        }}
                    >Configurações</span>
                </div>

            </div>
        </div>
    )
}