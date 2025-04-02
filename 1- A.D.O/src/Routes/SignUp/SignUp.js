import React, { useState, useEffect } from "react";
import "./styles.css"
import "./mobileStyles.css"
import { BsEnvelope, BsEyeFill, BsEyeSlashFill } from "react-icons/bs"
import { Link } from "react-router-dom"
import { getAuth } from "firebase/auth";
import { createUser } from "./Autentication"
import { createDocs } from "./CreateDocs";

export default function SignUp() {

    const [form, setForm] = useState({
        name_congregation: '',
        city: '',
        state: '',
        name_responsible: '',
        phone: '',
        email: '',
        cpf: '',
        password: { value: '', visible: false }
    })

    useEffect(() => {
        console.log(getAuth().currentUser)
    }, [])

    const handleConfirm = (email, password, form) => {
        createUser(email, password)
            .then(res => {
                createDocs(form, res.user.uid)
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="main-sign">
            <h1 className="title-sign">Cadastre-se</h1>

            <form className="container-form-sign" onSubmit={(event) => event.preventDefault()}>

                <div className="container-input-sign">
                    <span className="title-input-sign">Congregação</span>
                    <input placeholder="Nome da Congregação"
                        value={form.name_congregation}
                        onChange={event => setForm(prev => ({ ...prev, name_congregation: event.target.value }))}
                    />
                </div>

                <div className="container-input-sign">
                    <span className="title-input-sign">Cidade</span>
                    <input placeholder="Digite sua Cidade"
                        value={form.city}
                        onChange={event => setForm(prev => ({ ...prev, city: event.target.value }))}
                    />
                </div>

                <div className="container-input-sign">
                    <span className="title-input-sign">Estado</span>
                    <input placeholder="Ex: RJ"
                        value={form.state}
                        onChange={event => setForm(prev => ({ ...prev, state: event.target.value }))}
                        maxLength={2}
                        autoCapitalize="characters"
                    />
                </div>

                <div className="container-input-sign">
                    <span className="title-input-sign">Responsável</span>
                    <input placeholder="Nome do Responsável"
                        value={form.name_responsible}
                        onChange={event => setForm(prev => ({ ...prev, name_responsible: event.target.value }))}
                    />
                </div>

                <div className="container-input-sign">
                    <span className="title-input-sign">Telefone</span>
                    <input placeholder="Ex: +55XXxxxxxxxxx"
                        value={form.phone}
                        onChange={event => setForm(prev => ({ ...prev, phone: event.target.value }))}
                    />
                </div>

                <div className="container-input-sign">
                    <span className="title-input-sign">E-mail</span>
                    <input placeholder="Insira seu e-mail"
                        value={form.email}
                        onChange={event => setForm(prev => ({ ...prev, email: event.target.value }))}
                    />
                </div>

                <div className="container-input-sign">
                    <span className="title-input-sign">CPF</span>
                    <input placeholder="Ex: 68754893578"
                        value={form.cpf}
                        onChange={event => setForm(prev => ({ ...prev, cpf: event.target.value }))}
                        type="number"
                    />
                </div>

                <div className="container-input-sign">
                    <span className="title-input-sign">Senha</span>

                    <div className="container-password">
                        <input placeholder="Insira a senha de 6 dígitos"
                            value={form.password.value}
                            onChange={event => setForm(prev => ({ ...prev, password: { ...prev.password, value: event.target.value } }))}
                            maxLength={6}
                            type={form.password.visible ? 'text' : 'password'}
                        />
                        <span
                            onClick={() => setForm(prev => ({ ...prev, password: { ...prev.password, visible: !prev.password.visible } }))}
                            style={{ position: 'absolute', right: 8, top: 3 }}
                        >
                            {!form.password.visible
                                ? <BsEyeFill color="gray" size={22} />
                                : <BsEyeSlashFill color="gray" size={22} />}
                        </span>
                    </div>
                </div>

                <button className="button-confirm-sign"
                    onClick={() => handleConfirm(form.email, form.password.value, form)}
                >Cadastrar</button>

                <Link to="/signIn" className="has-account-label" >Já possui uma conta? Faça login</Link>

                <div className="container-help-sign">
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                        <span className="separator-sign"></span>
                        <span className="help-label-sign">Em caso de dúvidas, entre em contato abaixo</span>
                        <span className="separator-sign"></span>
                    </div>
                    <BsEnvelope size={30} color="rgb(182, 182, 182)" className="icon-email-sign" />
                </div>

            </form>
        </div>
    )
}