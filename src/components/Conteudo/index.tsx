import { useMemo } from 'react'
import { styled } from "styled-components"
import imagem from './imagem.png'
import { useEffect, useState } from "react"
import itens from '../../itens.json'
import { Card } from '../Card'
import ModalCard from './ModalCard'

const ConteudoContainer = styled.main`
    padding: 4rem 0;
    hr{
        margin-top: -0.5rem;
        width: 90%;
    }
    @media screen and (min-width: 1024px){
        hr{
            width: 80%;
        }
    }
`

const FiltroContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 0 2rem 0;
    gap: 2rem;
    width: 90%;
    min-width: 282px;
    margin: 0 auto;
    @media screen and (min-width: 849px){
        width: 95%;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    @media screen and (min-width: 1024px){
        width: 80%;
        justify-content: space-between;
    }
`

const ListaFiltros = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5rem;
    @media screen and (min-width: 768px){
        justify-content: normal;
    }
    @media screen and (min-width: 1024px){}
`

const Item = styled.li`
    font-size: 0.8rem;
    border: 1px solid;
    border-radius: 2rem;
    padding: 0.5rem;
    cursor: context-menu;
    
    @media screen and (min-width: 1024px){
        &:hover{
            cursor: context-menu;
            color: #3887fd;
            border: 1px solid #3887fd;
        }
    }
`

const OrdenadorContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    span{
        font-weight: 700;
        color: #000;
    }
    select{
        padding: 0.5rem;
        border-radius: 0.5rem;
        font-weight: 700;
        outline: none;
    }
    option{
        border-radius: 0.5rem;
        font-weight: 700;
    }
`

const ListaItens = styled.ul`
    width: 90%;
    margin: 2rem auto 0 auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;

    @media screen and (min-width: 768px){
        flex-direction: row;
        flex-wrap: wrap;
    }
    @media screen and (min-width: 768px){

    }
`

const BotoesProximaPagina = styled.div`
    display: flex;
    justify-content: center;
`

export default function Conteudo(){
    const opcoes = ["Agências", "Chatbot", "Marketing Digital", "Geração de Leads", "Mídia Paga"]
    const ordenador = ["Data de Publicação"]
    const [modalOpen, setModalOpen] = useState(false)

    const [categoria, setCategoria] = useState('')

    interface Categorias {
        titulo: string,
        video: string
    }

    const [itemTal, setItemTal] = useState<Categorias[]>([])

    useEffect(() => {

        switch (categoria) {
            case 'Agências': setItemTal(itens.agencias)
            break;
            case 'Chatbot': setItemTal(itens.chatbot)
            break
            case 'Marketing Digital': setItemTal(itens.marketingdigital)
            break
            case 'Geração de Leads': setItemTal(itens.geracaodeleads)
            break
            case 'Mídia Paga': setItemTal(itens.midiapaga) 
            break
            default : setItemTal([])
        }
    },[categoria])

    console.log(modalOpen)

    return(
        <ConteudoContainer>
            <FiltroContainer>
                <ListaFiltros>
                    {opcoes.map((opcao, index) => (
                        <Item 
                            onClick={() => setCategoria(opcao)} 
                            key={index}
                            style={{backgroundColor: categoria === opcao ? '#3887fd' : '', color : categoria === opcao ? '#fff' : ''}}
                        >
                            {opcao}
                        </Item>
                    ))}
                </ListaFiltros>
                <OrdenadorContainer>
                    <span>Ordenar por</span>
                    <select>
                        <option value=""></option>
                        {ordenador.map((item, index) => (
                            <option key={index} value={item}>{item}</option>
                        ))}
                    </select>
                </OrdenadorContainer>
            </FiltroContainer>
            <hr />
            <ListaItens>
                {itemTal.map((item, index) => (
                    <Card key={index} item={item} imagem={imagem} setModalOpen={setModalOpen}/>
                ))}
            </ListaItens>
            <hr />
            <BotoesProximaPagina>
                <span>Página</span>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
            </BotoesProximaPagina>
            <ModalCard />
        </ConteudoContainer>
    )
}