import Image from "next/image"
import { styled } from "styled-components"
import infosLeads from './infos-leads.png'
import ImagemTop10 from './top10.png'
import avaliacao from './avaliacao.webp'
import cartao from './cartao.webp'

const SegundoConteudoContainer = styled.section`
    margin-top: 4rem;
    background-color: #d5efff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    padding: 3rem 0;
    @media screen and (min-width: 1024px){
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 1rem;
    }
`

const PrimeiraDiv = styled.div`
    width: 90%;
    margin: 0 auto;
    text-align: center;
    img{
        width: 100%;
        max-width: 500px;
        height: 350px;
    }
    @media screen and (min-width: 1024px){
        max-width: 450px;
    }
`

const SegundaDiv = styled.div`
    width: 90%;
    margin: 0 auto;
    max-width: 450px;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    h2{
        color: #505050;
        font-weight: 500;
        font-size: 1.5rem;
        strong{
            font-weight: 900;
        }
    }
    p{
        color: #505050;
        strong{
            font-weight: bold;
        }
    }
    hr{
        margin-top: 0.5rem;
        width: 100%;
    }
    .demonstracao{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        button{
            width: 180px;
            background-color: #3887fd;
            border: none;
            border-radius: 2rem;
            padding: 1rem;
            color: #fff;
            font-weight: bold;
        }
        img{
            width: 150px;
            height: 50px;
        }

    }
    .media{
        margin-top: 1rem;
        display: flex;
        flex-direction: column;
        p{
            font-size: 0.7rem;
            span{
                font-weight: 800;
            }
        }
        div{
            p{
                display: flex;
                align-items: center;
            }
        }
        span{
            font-size: 0.6rem;
            color: #505050;
            display: flex;
            align-items: center;
            gap: 0.2rem;
            strong{
                font-weight: bold;
            }
        }
    }
    @media screen and (min-width: 768px){
        align-items: flex-start;
        h2{
            font-size: 2rem;
        }
        p{
            font-size: 1.2rem;
        }
        hr{
            width: 100%;
        }
        .demonstracao{
            flex-direction: row;
            img{
                width: 150px;
            }
        }
        .media{
            flex-direction: row;
            gap: 0.1rem;
            align-items: center;
            div{
                display: flex;
                align-items: center;
                gap: 0.2rem;
            }
        }
    }
`

export default function SegundoConteudo(){
    return(
        <SegundoConteudoContainer>

            <PrimeiraDiv>
                <Image src={infosLeads} alt="14 dias grátis de lead, bem mais vantagem que botão de whatsapp e formularios de contato" />
            </PrimeiraDiv>

            <SegundaDiv>
                <h2>Prontos para triplicar sua <br/><strong>Geração de Leads?</strong></h2>
                <p>Criação e ativação em <strong>4 minutos.</strong></p>
                <hr />
                <div className="demonstracao">
                    <button>VER DEMONSTRAÇÃO</button>
                    <Image src={ImagemTop10} alt="Top 10 apps mais usados"/>
                </div>
                <div className="media">
                    <div>
                        <p>
                            <Image src={cartao} alt="cartão de credito"/>
                            <strong> Não  </strong> é necessário Cartão de Crédito  | 
                        </p> <br/>
                    </div>
                    <div>
                        <span> <Image src={avaliacao} alt="Avaliação 4.9 de 5" /> 
                        <strong>4.9</strong>/5 média de staisfação.</span>
                    </div>
                </div>
            </SegundaDiv>

        </SegundoConteudoContainer>
    )
}