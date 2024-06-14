
import { Order } from "@/dtos/Order.dto";
import s from "./modal.module.scss"

import { ReactNode } from "react";

export type ModalProps = {
    open: boolean,
    back: () => void
    children: ReactNode
    order?: Order

}


export default function Modal(props: ModalProps) {
    if (!props.open) return null

    return (
        <><div className={s['background']}></div><section className={s['seccion']}>
            <div className={s['back']}><button onClick={props.back}>X</button></div>
            {props.children}

        </section></>)



}