import { Item } from "@/dtos/Item.dto";
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

export function getRandomNumber() {
  return Math.floor(Math.random() * 5) + 1
}

export function getRandomItems() {
  let items: Item[] = []
  items.push(({ id: '1', name: 'Hamburguesas', image: '🍔', price: { amount: 9, currency: 'euros' }, cantidad: getRandomNumber() }))

  items.push(({ id: '2', name: 'Patatas', image: '🍟', price: { amount: 3.50, currency: 'euros' }, cantidad: getRandomNumber() }))

  items.push(({ id: '3', name: 'CocaColas', image: '🥤', price: { amount: 2.50, currency: 'euros' }, cantidad: getRandomNumber() }))


  return items
}



// { id: '1', name: 'patatas', image: 'https://img.huffingtonpost.es/files/og_thumbnail/uploads/2023/06/13/un-plato-de-patatas-fritas-8109.jpeg', price: { amount: 200, currency: 'euros' } }

//crear getrandomitem, etc
