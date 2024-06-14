import s from "./Kanban.module.scss";
import Column from "../Column";
import { useOrders } from "@/contexts/Orders.context";
import Modal from "../modal"
import { useState } from "react";
import { Order } from "@/dtos/Order.dto";

export default function Kanban() {
  const { orders } = useOrders();
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null)

  const handleOpenModal = (order: Order) => {
    setSelectedOrder(order);
    setIsOpen(true)
  }
  const handleCloseModal = () => {
    setIsOpen(false);
    setSelectedOrder(null)
  }


  return (
    <><Modal open={isOpen} back={() => handleCloseModal()}> {
      selectedOrder && (
        <><h3>Confirmación de la orden {selectedOrder.id}</h3>
          {selectedOrder.items.map((item) => (
            <ul className={s["comanda"]} key={item.id}>
              <li>{item.cantidad}</li>
              <li>{item.name}</li>
              <li>{item.image}</li>
            </ul>
          ))
          }
          <div className={s["modal-footer"]}>
            <button className={s["modal-footer__back"]} onClick={() => {
              if (selectedOrder.state === 'IN_PROGRESS') {
                selectedOrder.state = 'PENDING'

              } else if (selectedOrder.state === 'READY') {
                selectedOrder.state = 'IN_PROGRESS'
              }
              handleCloseModal()
            }
            }>Estado Anterior</button>
            <button className={s["modal-footer__confirm"]} onClick={() => {
              if (selectedOrder.state === 'PENDING') {
                selectedOrder.state = 'IN_PROGRESS'

              } else if (selectedOrder.state === 'IN_PROGRESS') {
                selectedOrder.state = 'READY'
              }
              handleCloseModal()
            }
            }>Confirmar</button></div>
        </>)
    }</Modal>
      <section className={s["pk-kanban"]}>
        <Column
          title="Pendiente"
          orders={orders.filter((i) => i.state === "PENDING")}
          onClick={(order) => {
            handleOpenModal(order)
          }} />

        <Column title="En preparación"
          orders={orders.filter((i) => i.state === "IN_PROGRESS")}
          onClick={(order) => {
            handleOpenModal(order)
          }} />
        <Column title="Listo" orders={orders.filter((i) => i.state === "READY")} />
      </section></>
  );
}
