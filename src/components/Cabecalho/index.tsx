import Image from 'next/image'
import logo from './logo.png'
import assento from './asset-header.png'
import { styled } from 'styled-components'

const CabecalhoContainer = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
        padding: 1.5rem 0;
    }
    @media screen and (min-width: 768px){
        img{
            padding: 2rem 0;
        }
    }
`

const CabecalhoSection = styled.section`
    width: 100%;
    text-align: center;
    padding: 4rem 0;
    background-color: #d5efff;
    .exclusivo{
        border: 2px solid #3887fd;
        padding: 0.5rem 1rem;
        border-radius: 2rem 2rem 2rem 0;
        color: #3887fd;
        font-size: 0.7rem;
        font-weight: 600;
        width: auto;
    }
    h2{
        font-size: 1.2rem;
        letter-spacing: 0.1rem;
        font-weight: 600;
        margin: 1rem 0 0.5rem 0;
        color: #505050;
    }
    h3{
        font-size: 2.2rem;
        font-weight: 700;
        color: #3887fd;
        position: relative;
        width: 300px;
        margin: 0 auto;
        img{
            position: absolute;
            top: -0.3rem;
            right: 0.8%;
            width: 30px;
            height: 20px;
            padding: 0;
        }
    }
    hr{
        width: 300px;
        margin-top: 1rem;
    }
    .cor{
        font-size: 0.5rem;
        color: red;
        display: block;
        width: 271px;
        margin: 0 auto;
        text-align: left;
    }
    p{
        margin-top: 1rem;
        color: #5d5d5d;
        font-weight: 600;
        padding: 0 0.5rem;
        strong{
            font-weight: 900;
        }
    }

    @media screen and (min-width: 768px){
        padding: 7rem 0;
        .exclusivo{
            font-size: 1rem;
        }
        h2{
            font-size: 2.5rem;
            margin: 1.5rem 0;
        }
        h3{
            font-size: 5rem;
            letter-spacing: 0.1rem;
            width: 700px;
            img{
                width: 60px;
                height: 40px;
            }
        }
        .cor{
            width: 638px;
            font-size: 0.8rem;
        }
        hr{
            width: 700px;
        }
        p{
            font-size: 1.1rem;
        }
    }
    @media screen and (min-width: 1024px){
        h2{
            margin: 2rem 0 0.5rem 0;
        }
    }
`

export default function Cabecalho(){
    return(
        <CabecalhoContainer>
            <Image src={logo} alt="logo leadster" />
            <CabecalhoSection>
                <span className='exclusivo'>WEBINARS EXCLUSIVOS</span>
                <h2>Menos Conversinha,</h2>
                <h3>
                    Mais Conversão
                    <Image src={assento} alt='logo como assento da letra O'/>
                </h3>
                <span className='cor'>#2c83fb -{'>'} #1f76f0 (-45%)</span>
                <hr />
                <p>Conheça as estratégias que <strong>mudaram o jogo</strong> e como aplicá-las no seu negócio</p>
            </CabecalhoSection>
        </CabecalhoContainer>
    )
}