import s from "./Riders.module.scss";
import Rider from "@/bases/Rider";
import { useOrders } from "@/contexts/Orders.context";
import { useRiders } from "@/contexts/Riders.context";

export default function Riders() {
  const { riders } = useRiders();
  const { orders } = useOrders()

  function isOrderDelivered(orderWanted: string): boolean {

    const order = orders.find(order => order.id === orderWanted);
    return order?.state === 'DELIVERED'
  }

  return (
    <section className={s["pk-riders__container"]}>
      <div className={s["pk-riders"]}>
        <h3>Riders:</h3>
        {riders.map((rider) => {
          if (!isOrderDelivered(rider.orderWanted))
            return <Rider key={rider.orderWanted} {...rider}
            />
        }


        )}
      </div>
    </section>
  );
}
