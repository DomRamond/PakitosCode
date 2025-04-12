import React, { useEffect, useState } from "react"
import "./tableStyles.css"
import Checkbox from 'rc-checkbox';
import { TbTrashX } from "react-icons/tb";
import { AiOutlineSync } from "react-icons/ai";

export default function Table() {
    const [listThemes, setListThemes] = useState([])
    const [data, setData] = useState([
        {
            date: '10/04/2025',
            orator: 'Juninho',
            congregation: 'Oeste de Piúma',
            number_theme: 17,
            confirmed: true,
            contact: 28999745876,
            fuel: true
        },
        {
            date: '14/10/2025',
            orator: 'Zézinho',
            congregation: 'Norte de Vitória',
            number_theme: 63,
            confirmed: false,
            contact: 28999765324,
            fuel: false
        }
    ])

    // Gera dinamicamente a lista de números dos temas
    useEffect(() => {
        let list = []
        for (let index = 1; index <= 300; index++) {
            list.push(index)
        }
        setListThemes(list)
    }, [])

    const onChangeConfirm = (index) => {
        let list = [...data]
        list[index] = { ...list[index], confirmed: !list[index].confirmed }
        setData(list)
    }

    const onChangeFuel = (index) => {
        let list = [...data]
        list[index] = { ...list[index], fuel: !list[index].fuel }
        setData(list)
    }

    const onChangeThemeNumber = (index, value) => {
        let list = [...data]
        list[index] = { ...list[index], number_theme: value }
        setData(list)
    }

    return (
        <table className="table-orators">
            <thead className="header-table-orators">
                <th className="header-item" style={{ maxWidth: 120 }}>DATA</th>
                <th className="header-item">ORADOR</th>
                <th className="header-item">CONGREGAÇÃO</th>
                <th className="header-item" style={{ maxWidth: 75 }}>Nº TEMA</th>
                <th className="header-item" style={{ maxWidth: 150 }}>CONFIRMADO</th>
                <th className="header-item" style={{ maxWidth: 130 }}>CONTATO</th>
                <th className="header-item" style={{ maxWidth: 120 }}>COMBUSTÍVEL</th>
                <th className="header-item" style={{ maxWidth: 80 }}>EDITAR</th>
            </thead>

            <tbody className="body-table-orators">
                {data.map((item, index) => {
                    return (
                        <tr key={index} style={{ display: 'flex' }}>
                            <td style={{ fontWeight: 'bold', maxWidth: 120 }} className="body-item">{item.date}</td>
                            <td className="body-item">{item.orator}</td>
                            <td className="body-item">{item.congregation}</td>
                            <td className="body-item" style={{ maxWidth: 75 }}>
                                <select 
                                className="select-themes" 
                                value={item.number_theme} 
                                onChange={(e) => onChangeThemeNumber(index, e.target.value)}
                                
                                >
                                    {listThemes.map((theme, idx) => {
                                        return <option key={idx} value={theme}>{theme}</option>;
                                    })}
                                </select>
                            </td>
                            <td className="body-item" style={{ maxWidth: 150 }}>
                                <button className="button-confirmed"
                                    style={{ color: !item.confirmed && "red" }}
                                    onClick={() => onChangeConfirm(index)}
                                >{item.confirmed ? "SIM" : "NÃO"}</button>
                            </td>
                            <td style={{ color: '#636AE8', fontWeight: '500', maxWidth: 130 }} className="body-item">{item.contact}</td>
                            <td className="body-item" style={{ maxWidth: 120 }}><Checkbox checked={item.fuel} onChange={() => onChangeFuel(index)} /></td>
                            <td style={{ gap: 5, maxWidth: 80 }} className="body-item" >
                                <span>
                                    <TbTrashX size={28} color="#4076a2" />
                                </span>
                                <span>
                                    <AiOutlineSync size={26} color="#4076a2" />
                                </span>
                            </td>
                        </tr>
                    );
                })}
            </tbody>

        </table>
    )
}