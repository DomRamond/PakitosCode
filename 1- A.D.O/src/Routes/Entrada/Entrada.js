import React, { useEffect, useCallback, useState } from "react"
import Menu from "../../Components/Menu/Menu"
import "./styles.css"
import { IoSearch } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { GoDownload } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import Table from "./Table";

export default function Entrada() {

    const [yearFilter, setYearFilter] = useState(new Date().getFullYear())

    const generateYears = useCallback(() => {
        const current_year = new Date().getFullYear()
        const years = []

        for (let count = 0; count <= 5; count++) {
            years.push(<option value={current_year - count}>{current_year - count}</option>)
        }
        return years
    }, [])

    return (
        <div className="main">
            <Menu item_active={2} />

            <div className="container-main">

                <div className="container-header">

                    <span className="download-button">
                        <GoDownload size={20} color="#9095a0" />
                    </span>
                    <h1 className="title-page">Entrada de oradores à congregação</h1>

                    <select className="year-select" onChange={e => setYearFilter(e.target.value)}>
                        {generateYears()}
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
                    <Table filter={yearFilter} />
                </main>

            </div>


        </div>
    )
}