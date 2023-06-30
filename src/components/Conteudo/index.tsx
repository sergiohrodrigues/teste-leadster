import { styled } from "styled-components"
import imagem from './imagem.png'
import { useEffect, useState } from "react"
import itens from '../../itens.json'
import { Card } from '../Card'
import ModalCard from './ModalCard'
import { itemClicado } from "@/states/atom"
import { useSetRecoilState } from 'recoil'
import { Iitem } from "@/interface/Item"
import SegundoConteudo from "./SegundoConteudo"

const ConteudoContainer = styled.main<{display : string}>`
    padding: 4rem 0;
    .modal-open{
        display: ${props => props.display};
        width: 100%;
        height: 100vh;
        position: fixed;
        inset: 0;
        background-color: #3887fd;
        opacity: 0.5;
        z-index: 90;
    }
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
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;
    @media screen and (min-width: 768px){
        gap: 0.5rem;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
    }
    @media screen and (min-width: 1024px){
    }
`

const BotoesProximaPagina = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
    span{
        font-weight: bold;
    }
    button{
        border: none;
        background-color: transparent;
    }
    button:hover{
        cursor: pointer;
    }
`

export default function Conteudo(){
    const opcoes = ["Agências", "Chatbot", "Marketing Digital", "Geração de Leads", "Mídia Paga"]
    const ordenador = ["Data de Publicação"]
    const [modalOpen, setModalOpen] = useState(false)

    const [categoria, setCategoria] = useState('Agências')

    const [categoriaFiltrada, setCategoriaFiltrada] = useState<Iitem[]>([])

    useEffect(() => {

        switch (categoria) {
            case 'Agências': setCategoriaFiltrada(itens.agencias)
            break;
            case 'Chatbot': setCategoriaFiltrada(itens.chatbot)
            break
            case 'Marketing Digital': setCategoriaFiltrada(itens.marketingdigital)
            break
            case 'Geração de Leads': setCategoriaFiltrada(itens.geracaodeleads)
            break
            case 'Mídia Paga': setCategoriaFiltrada(itens.midiapaga) 
            break
            default : setCategoriaFiltrada([])
        }
    },[categoria])

    useEffect(() => {
        disabledScrollBody(false)
    }, [])

    function disabledScrollBody(isDisable : boolean){
        if(typeof window !== undefined){
            document.body.style.overflow = isDisable ? 'hidden' : 'auto'
        }
    }

    const [itensPerPage, setItensPerPage] = useState(9)
    const [currentPage, setCurrentPage] = useState(0)
    const pages = Math.ceil(categoriaFiltrada.length / itensPerPage)
    const startIndex = currentPage * itensPerPage
    const endIndex = startIndex + itensPerPage
    const currentItens = categoriaFiltrada.slice(startIndex, endIndex)

    useEffect(() => {
        setCurrentPage(0)
    }, [itensPerPage])

    function mudarCategoria(opcao: string){
        setCategoria(opcao)
        setCurrentPage(0)
    }
    const setItemClicado = useSetRecoilState(itemClicado)

    function passarItemParaOModal(item: Iitem){
        setItemClicado(item)
    }

    return(
        <ConteudoContainer display={modalOpen ? 'block' : 'none'}>
            <div className="modal-open"></div>

            <FiltroContainer id="voltarAqui">

                <ListaFiltros>
                    {opcoes.map((opcao, index) => (
                        <Item 
                            onClick={() => mudarCategoria(opcao)} 
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
                {currentItens.map((item, index) => (
                    <Card key={index} item={item} imagem={imagem} setModalOpen={setModalOpen} disabledScrollBody={disabledScrollBody} passarItemParaOModal={passarItemParaOModal}/>
                ))}
            </ListaItens>

            <hr style={{marginTop:'1.5rem'}}/>

            <BotoesProximaPagina>
                <span>Página</span>
                {Array.from(Array(pages), (item, index) => (
                    <button 
                        key={index} 
                        value={index} 
                        onClick={e => setCurrentPage(Number((e.target as HTMLInputElement).value))}
                        style={{border: currentPage === index ? '2px solid blue' : '', color: currentPage === index ? 'blue' : '', fontWeight: currentPage === index ? 'bold' : ''}}
                    >
                        {index + 1}
                    </button>
                ))}
            </BotoesProximaPagina>

            <ModalCard modalOpen={modalOpen} setModalOpen={setModalOpen} disabledScrollBody={disabledScrollBody}/>

            <SegundoConteudo />
            
        </ConteudoContainer>
    )
}