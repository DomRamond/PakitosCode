import React from "react"
import Menu from "../../Components/Menu/Menu"
import "./styles.css"
import { IoSearch } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { GoDownload } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import Checkbox from 'rc-checkbox';

export default function Entrada() {
    return (
        <div className="main">
            <Menu item_active={2} />

            <div className="container-main">

                <div className="container-header">

                    <span className="download-button">
                        <GoDownload size={20} color="#9095a0" />
                    </span>
                    <h1 className="title-page">Entrada de oradores à congregação</h1>

                    <select className="year-select">
                        <option>2025</option>
                    </select>

                    <button className="add-button">
                        Adicionar
                    </button>

                    <div className="container-search">
                        <IoSearch size={20} color="#171a1f" />
                        <input
                            placeholder="Pesquisar..."
                            className="input-search"
                        />
                    </div>

                    <span className="icon-notification">
                        <FaRegBell
                            size={22}
                            color="#6e7787"
                        />
                    </span>

                    <div className="container-profile">
                        <div className="profile-photo">

                        </div>
                        <span className="name-profile">João Henrique</span>

                        <IoIosArrowDown size={16} color="#6e7787" />
                    </div>

                </div>

                <main style={{ display: "flex", flexDirection: 'column', height: '100%' }}>
                    <table className="table-orators">
                        <thead className="header-table-orators">
                            <th className="header-item">DATA</th>
                            <th className="header-item">ORADOR</th>
                            <th className="header-item">CONGREGAÇÃO</th>
                            <th className="header-item">Nº TEMA</th>
                            <th className="header-item">CONFIRMADO</th>
                            <th className="header-item">CONTATO</th>
                            <th className="header-item">COMBUSTÍVEL</th>
                            <th className="header-item">EDITAR</th>
                        </thead>

                        <tbody className="body-table-orators">
                            <tb className="body-item">10 de Março</tb>
                            <tb className="body-item">Cleiton</tb>
                            <tb className="body-item">Oeste de Marataízes</tb>
                            <tb className="body-item">45</tb>
                            <tb className="body-item">SIM</tb>
                            <tb className="body-item">28-99933-3435</tb>
                            <tb className="body-item"><Checkbox /></tb>
                            <tb className="body-item">EDITAR</tb>
                        </tbody>
                    </table>
                </main>

            </div>


        </div>
    )
}