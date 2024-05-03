import { Order } from './order.entity';
export declare class OrdersService {
    private readonly orders;
    create(order: Order): Order;
    findAll(): Order[];
    findOne(id: number): Order;
    update(id: number, updatedOrder: Order): Order;
    remove(id: number): boolean;
}
