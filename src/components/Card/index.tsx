import Image, { StaticImageData } from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import { styled } from "styled-components";
import { FaPlay } from 'react-icons/fa'

const CardItem = styled.li<{display: string}>`
    box-shadow: 0 10px 10px 2px lightgray;
    border-radius: 1rem;
    max-width: 300px;
    position: relative;
    img{
        width: 100%;
    }
    p{
        font-weight: 900;
        color: #595959;
        padding: 1rem 2rem 1rem 1rem;
        text-align: left;
    }
    &:hover{
        p{
            cursor: context-menu;
            color: #3887fd;
        }
        span{
            position: relative;
            div{
                width: block;
                width: 100%;
                height: 204px;
                position: absolute;
                background-color: #3887fd;
                opacity: 0.5;
                z-index: 90;
            }
        }
    }
    svg{
        position: absolute;
        top: 20%;
        right: 30%;
        display: ${props => props.display};
        z-index: 100;
    }

    @media screen and (min-width: 1024px){
        max-width: 30%;
        position: relative;
        height: 300px;
        span{
            div{
                width: 280px;
                width: none;
            }
        }
        svg{
            position: absolute;
            top: 20%;
            right: 30%;
            display: ${props => props.display};
            z-index: 100;
        }
        svg:hover{
            cursor: pointer;
        }
    }
`

interface PropsConteudo {
    imagem: StaticImageData,
    item: {
        titulo: string;
        video: string;
    }
    setModalOpen: Dispatch<SetStateAction<boolean>>,
    disabledScrollBody: (isDisable: boolean) => void
}

export const Card = ({imagem, item, setModalOpen, disabledScrollBody}: PropsConteudo) => {
    const [playVideo, setPlayVideo] = useState(false)

    function ativarBotaoModal(){
        setPlayVideo(true)
    }
    
    function desativarBotaoModal(){
        setPlayVideo(false)
    }
    
    function abrirModal(){
        setModalOpen(true)
        disabledScrollBody(true)
    }

    return(
        <>
        <CardItem display={playVideo ? 'block' : 'none'} onMouseEnter={ativarBotaoModal} onMouseLeave={desativarBotaoModal}>
            <FaPlay  
                size={80} 
                color="#fff"
                onClick={abrirModal}
            />
            <span>
                <div></div>
                <Image src={imagem} alt={item.titulo} />
            </span>
            <p>{item.titulo}</p>
        </CardItem>
        </>
    )
}