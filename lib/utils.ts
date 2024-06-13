import { Order } from "@/dtos/Order.dto";


export function getRandomId() {
  const length = 5;
  let result = "";
  const characters = "0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export function getRandomInterval(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function findOrder(orderId: any, orderList: Order[]) {
  const resultado = orderList.find((order) => order.id === orderId)
  return resultado
}

export function checkState(order: Order) {
  return order.state === 'READY'
}



//crear getrandomitem, etc
