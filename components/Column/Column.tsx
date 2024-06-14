
import s from "./Column.module.scss";
import { Order } from "@/dtos/Order.dto";

export type ColumnProps = {
  orders: Array<Order>;
  title: string;
  onClick?: (order: Order,) => void;
};

export default function Column(props: ColumnProps) {
  return (

    <div className={s["pk-column"]}>
      <div className={s["pk-column__title"]}>
        <h3>{props.title}</h3>
      </div>
      {props.orders.map((order) => (
        <div
          key={order.id}
          onClick={() => props.onClick && props.onClick(order)}
          className={s["pk-card"]}
        >
          <div>
            <span>
              Orden: <b>{order.id}</b>
            </span>
          </div>
          <div>
            {order.items.map((item) => (
              <div className={s["comanda"]} key={item.id}>
                <div>{item.cantidad}</div>
                <div>{item.name}</div>
                <div>{item.image}</div>
              </div>
            ))}
          </div>
        </div>
      ))
      }
    </div >
  );
}
