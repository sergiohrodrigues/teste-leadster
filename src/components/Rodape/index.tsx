import Image from "next/image";
import logo from '../Cabecalho/logo.png'
import { styled } from "styled-components";
import { FaLinkedinIn, FaFacebookF,  } from 'react-icons/fa'
import { TfiInstagram } from 'react-icons/tfi'

const FooterContainer = styled.footer`
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding-bottom: 2rem;
`

const LogoContainer = styled.div`
    text-align: center;
    p{
        color: #505050;
    }
`

const ListaLinks = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4rem;
    margin-top: 2rem;
    ul{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        text-align: center;
        span{
            min-width: 143px;
            font-weight: bold;
            font-size: 1.2rem;
            color: #505050;
            text-align: center;
        }
        li{
            color: #505050;
            strong{
                font-weight: bold;
            }
        }
        .redes-sociais{
            display: flex;
            gap: 1rem;
            justify-content: center;
            svg{
                padding: 1rem;
                font-size: 1rem;
                background-color: lightgray;
                border-radius: 1rem;
            }
        }
    }
    @media screen and (min-width: 1024px){
        width: 100%;
        gap: 0;
        flex-direction: row;
        justify-content: space-evenly;
        ul{
            text-align: left;
            span{
                text-align: left;
            }
            li:hover{
                cursor: pointer;
                text-decoration: underline gray;
            }
            .redes-sociais{
            justify-content: flex-start;
        }
        }
    }
`

const FooterDireitosReservados = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    p{
        font-size: 0.8rem;
        text-align: center;
    }
    span{
        font-weight: bold;
        color: #3887fd;
    }
    @media screen and (min-width: 1024px){
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        span:hover{
            cursor: pointer;
            text-decoration: underline #3887fd;
        }
    }
`

export default function Rodape(){
    return(
        <FooterContainer>
            <LogoContainer>
                <Image src={logo} alt="Logo Leadster" />
                <p>Transformando visitantes em clientes.</p>
            </LogoContainer>
            <ListaLinks>
                <ul>
                    <span>Links Principais</span>
                    <li>Home</li>
                    <li>Ferramenta</li>
                    <li>Preços</li>
                    <li>Contato</li>
                </ul> 
                <ul>
                    <span>Cases</span>
                    <li>Geração de Leads B2B</li>
                    <li>Geração de Leads em Software</li>
                    <li>Geração de Leads em Imobiliária</li>
                    <li>Cases de Sucesso</li>
                </ul> 
                <ul>
                    <span>Materiais</span>
                    <li>Blog</li>
                    <li>Parceria com Agências</li>
                    <li>Guia definitivo do Marketing</li>
                    <li>Materiais Gratuitos</li>
                </ul> 
                <ul>
                    <span>Siga a Leadster</span>
                    <li className="redes-sociais">
                        <FaLinkedinIn />
                        <FaFacebookF />
                        <TfiInstagram />
                    </li>
                    <li><strong>E-mail:</strong> contato@leadster.com.br</li>
                    <li><strong>Telefone:</strong> (42) 99828-9851</li>
                </ul> 
            </ListaLinks>

            <hr />

            <FooterDireitosReservados>
                <p>Copyright © 2015-2022 Todos os direitos reservados | <span>Leadster</span></p>
                <p>Rua José Loureiro, 464 - Centro - Curitiba PR - CEP: 80010-000 | Termos de uso</p>
            </FooterDireitosReservados>
        </FooterContainer>
    )
}