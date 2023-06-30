import { styled } from "styled-components"
import { AiOutlineCloudDownload, AiOutlineClose } from 'react-icons/ai'
import { Dispatch, SetStateAction } from "react"
import { itemClicado } from "@/states/atom"
import { useRecoilValue } from 'recoil'

const ModalContainer = styled.dialog<{display: string}>`
    padding: 0;
    position: fixed;
    height: 100vh;
    width: 100vw;
    min-width: 300px;
    inset: 0;
    display: ${props => props.display};
    justify-content: center;
    align-items: center;
    z-index: 999;
    background-color: transparent;
    border: none;
    .botoes-download{
        display: none;
    }
    @media screen and (min-width: 1024px){
        .botoes-download{
            position: absolute;
            bottom: 0;
            left: 0;
            display: flex;
            flex-direction: column;
            background-color: #fff;
            gap: 0.5rem;
            padding: 1rem;
            button{
                padding: 0rem;
                border: none;
                display: flex;
                align-items: center;
                svg{
                    font-size: 1rem;
                    height: 100%;
                    padding: 0.5rem;
                }
                span{
                    padding: 0.5rem;
                    width: 100%;
                }
            }
            button:hover{
                cursor: pointer;
            }
        }
    }
    `

const ModalCardContainer = styled.section`
    background-color: #fff;
    border-radius: 1rem;
    width: 90%;
    min-width: 281px;
    display: flex;
    flex-direction: column;
    border-top: 5px solid #3887fd;
    gap: 1rem;
    padding: 1.5rem 0;
    position: relative;
    .fecharModal{
        position: absolute;
        top: 1%;
        right: 2%;
        color: black;
        font-size: 1.2rem;
    }
    h2{
        font-size: 1rem;
        color: #535353;
        font-weight: bold;
        padding: 0 2.5rem 1rem 2.5rem;
        text-align: center;
    }
    div{
        padding: 0 1rem;
        span{
            color: #535353;
            font-weight: bold;
        }
    }
    .botoes-modal{
            gap: 0.5rem;
            div{
                display: flex;
                flex-wrap: wrap;
                gap: 0.5rem;
                button{
                    border: none;
                    display: flex;
                    align-items: center;
                    padding: 0;
                    svg{
                        height: 100%;
                        font-weight: bold;
                    }
                    span{
                        height: 100%;
                        font-weight: 400;
                    }
                }
                button:hover{
                    cursor: pointer;
                }
            }
        }
        @media screen and (min-width: 768px){
            width: 60%;
            div{
                gap: 1rem;
                svg{
                    padding: 0.3rem;
                }
                span{
                    padding: 0.3rem;
                }
            }
    }
    @media screen and (min-width: 1024px){
        width: 40%;
        .fecharModal:hover{
            cursor: pointer;
        }
    }
`

interface Props {
    modalOpen: boolean,
    setModalOpen: Dispatch<SetStateAction<boolean>>,
    disabledScrollBody: (isDisable: boolean) => void
}


export default function ModalCard({modalOpen, setModalOpen, disabledScrollBody}: Props){

    const listaItemClicado = useRecoilValue(itemClicado)

    const fecharModal = () => {
        setModalOpen(false)
        disabledScrollBody(false)
    }
    return(
        <ModalContainer display={modalOpen ? 'flex': 'none'}>
            <ModalCardContainer>
                <AiOutlineClose className="fecharModal" onClick={fecharModal}/>
                <h2>{listaItemClicado.titulo}</h2>
                <iframe 
                    src={listaItemClicado.video} 
                    width='100%' 
                    height="300px"
                    frameBorder="0"
                />
                <div>
                    <span>Descrição</span>
                    <hr style={{marginTop: '0.5rem', width:'100%'}}/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                </div>
                <div className="botoes-modal">
                    <span>Downloads</span>
                    <hr style={{marginTop: '0.5rem', width:'100%'}}/>
                    <div>
                        <button>
                            <AiOutlineCloudDownload style={{backgroundColor:'#85ff4d'}}/>
                            <span style={{backgroundColor:'#bbf59f', color:'#359409'}}>Spreedsheet.xls</span>
                        </button>
                        <button>
                            <AiOutlineCloudDownload style={{backgroundColor:'#2866f8'}}/>
                            <span style={{backgroundColor:'#769fff', color:'#2866f8'}}>Document.doc</span>
                        </button>
                        <button>
                            <AiOutlineCloudDownload style={{backgroundColor:'#daff21'}}/>
                            <span style={{backgroundColor:'#eeff97', color:'#f9c045'}}>Presentation.ppt</span>
                        </button>
                    </div>
                </div>
            </ModalCardContainer>
            <div className="botoes-download">
                <button>
                    <AiOutlineCloudDownload style={{backgroundColor:'#85ff4d'}}/>
                    <span style={{backgroundColor:'#bbf59f', color:'#359409'}}>Spreedsheet.xls</span>
                </button>
                <button>
                    <AiOutlineCloudDownload style={{backgroundColor:'#2866f8'}}/>
                    <span style={{backgroundColor:'#769fff', color:'#2866f8'}}>Document.doc</span>
                </button>
                <button>
                    <AiOutlineCloudDownload style={{backgroundColor:'#daff21'}}/>
                    <span style={{backgroundColor:'#eeff97', color:'#f9c045'}}>Presentation.ppt</span>
                </button>
                <button>
                    <AiOutlineCloudDownload style={{backgroundColor:'#737373'}}/>
                    <span style={{backgroundColor:'#cacaca'}}>Folger.zip</span>
                </button>
            </div>
        </ModalContainer>
    )
}