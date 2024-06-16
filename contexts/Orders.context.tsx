import { Order } from "@/dtos/Order.dto";
import { Rider } from "@/dtos/Rider.dto";
import { OrderOrchestrator } from "@/lib";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import Swal from "sweetalert2";

export type OrdersContextProps = {
  orders: Array<Order>;
  pickup: (order: Order) => void;
};

export const OrdersContext = createContext<OrdersContextProps>(
  // @ts-ignore
  {}
);

export type OrdersProviderProps = {
  children: ReactNode;
};

export function OrdersProvider(props: OrdersProviderProps) {
  const [orders, setOrders] = useState<Array<Order>>([]);

  useEffect(() => {
    const orderOrchestrator = new OrderOrchestrator();
    const listener = orderOrchestrator.run();
    listener.on("order", (order) => {
      setOrders((prev) => [...prev, order]);
    });
  }, []);

  const pickup = (order: Order) => {
    if (order.state === 'READY') {
      order.state = 'DELIVERED'
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "El pedido no está listo",
      });
    }
  };



  const context = {
    orders,
    pickup,
  };

  return (
    <OrdersContext.Provider value={context}>
      {props.children}
    </OrdersContext.Provider>
  );
}

export const useOrders = () => useContext(OrdersContext);
