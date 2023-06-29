import { styled } from "styled-components"
import { AiOutlineCloudDownload } from 'react-icons/ai'

const ModalContainer = styled.main`
    position: absolute;
    width: 100vw;
    height: 90vh;
    top: 5%;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    `

const ModalCardContainer = styled.section`
    background-color: gray;
    border-radius: 1rem;
    width: 90%;
    display: flex;
    flex-direction: column;
    border-top: 5px solid #3887fd;
    gap: 1rem;
    padding: 1.5rem 0;
    h2{
        font-size: 1rem;
        padding: 0 1.5rem;
        text-align: center;
    }
    div{
        padding: 0 1rem 0 1rem;
    }
    button{
        font-size: 0.7rem;
        /* background-color: red; */
        border: none;
        padding: 0 0;
        svg{
            height: 100%;
            text-align: left;
            background-color: lightblue;
        }
    }
`

export default function ModalCard(){
    return(
        <ModalContainer>
            <ModalCardContainer>
                <h2>Webinar: Como aumentar a Geração de Leads Qualificados do seu Site</h2>
                <iframe src="https://www.youtube.com/embed/9L9ZkGX1p_k" width='100%' height="300px"></iframe>
                <div>
                    <span>Descrição</span>
                    <hr style={{marginTop: '0.5rem', width:'100%'}}/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                </div>
                <div>
                    <span>Downloads</span>
                    <hr style={{marginTop: '0.5rem', width:'100%'}}/>
                    <AiOutlineCloudDownload/><button>Spreedsheet.xls</button>
                    <button><AiOutlineCloudDownload /> Document.doc</button>
                    <button ><AiOutlineCloudDownload /> Presentation.ppt</button>
                </div>
            </ModalCardContainer>
            {/* <div>
                <button>Spreedsheet.xls</button>
                <button>Document.doc</button>
                <button>Presentation.ppt</button>
                <button>Folger.zip</button>
            </div> */}
        </ModalContainer>
    )
}