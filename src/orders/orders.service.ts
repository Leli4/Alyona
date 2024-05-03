import { Injectable } from '@nestjs/common';
import { Order } from './order.entity';
@Injectable()
export class OrdersService {
  private readonly orders: Order[] = [];

  create(order: Order): Order {
    this.orders.push(order);
    return order;
  }

  findAll(): Order[] {
    return this.orders;
  }

  findOne(id: number): Order {
    return this.orders.find(orders => orders.id === id);
  }

  update(id: number, updatedOrder: Order): Order {
    const index = this.orders.findIndex(orders => orders.id === id);
    this.orders[index] = updatedOrder;
    return updatedOrder;
  }

  remove(id: number): boolean {
    const index = this.orders.findIndex(orders => orders.id === id);
    if (index !== -1) {
      this.orders.splice(index, 1);
      return true;
    }
    return false;
  }
}