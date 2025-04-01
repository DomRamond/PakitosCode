import React from "react";
import "./styles.css"
import { BsEnvelope } from "react-icons/bs"

export default function SignUp() {
    return (
        <div className="main-sign">
            <h1 className="title-sign">Cadastre-se</h1>

            <form className="container-form-sign">

                <div className="container-input-sign">
                    <span className="title-input-sign">Congregação</span>
                    <input placeholder="Nome da Congregação" />
                </div>

                <div className="container-input-sign">
                    <span className="title-input-sign">Cidade</span>
                    <input placeholder="Digite sua Cidade" />
                </div>

                <div className="container-input-sign">
                    <span className="title-input-sign">Estado</span>
                    <input placeholder="Ex: RJ" />
                </div>

                <div className="container-input-sign">
                    <span className="title-input-sign">Responsável</span>
                    <input placeholder="Nome do Responsável" />
                </div>

                <div className="container-input-sign">
                    <span className="title-input-sign">Telefone</span>
                    <input placeholder="Ex: +55XXxxxxxxxxx" />
                </div>

                <div className="container-input-sign">
                    <span className="title-input-sign">E-mail</span>
                    <input placeholder="Insira seu e-mail" />
                </div>

                <div className="container-input-sign">
                    <span className="title-input-sign">CPF</span>
                    <input placeholder="Ex: 68754893578" />
                </div>

                <div className="container-input-sign">
                    <span className="title-input-sign">Senha</span>
                    <input placeholder="Insira a senha de 4 dígitos" />
                </div>

                <button className="button-confirm-sign">Cadastrar</button>

                <span className="has-account-label">Já possui uma conta? Faça login</span>

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