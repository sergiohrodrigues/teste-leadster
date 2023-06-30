"use client"
import Cabecalho from "@/components/Cabecalho";
import Conteudo from "@/components/Conteudo";
import Rodape from "@/components/Rodape";
import { RecoilRoot } from 'recoil'

export default function Home() {
  return (
    <>
    <RecoilRoot>
      <Cabecalho />
      <Conteudo />
      <Rodape />
    </RecoilRoot>
    </>
  )
}
