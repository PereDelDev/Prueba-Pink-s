import { Order } from "./Order.dto";

export type Rider = {
  orderWanted: string;
  pickup: (order?: Order) => void;
  deliver: (state?: boolean) => void
  delivered: boolean
};
