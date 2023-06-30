import { Iitem } from "@/interface/Item";
import { atom } from "recoil";

export const itemClicado = atom<Iitem>({
    key: 'itemClicado',
    default: {
        titulo: "",
        video: ""
    }
})