import { OrdersService } from './orders.service';
import { Order } from './order.entity';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    findAll(): Order[];
    findOne(id: string): Order;
    create(createBook: Order): Order;
    update(id: string, updateBook: Order): Order;
    remove(id: string): boolean;
}
