import { Module } from '@nestjs/common';
import { BooksModule } from 'src/books/books.module';
import { AuthorsModule } from './authors/authors.module';
import { OrdersModule } from './orders/orders.module';
import { DataSourceModule } from './datasource/datasource.module';

@Module({
  imports: [BooksModule, AuthorsModule, OrdersModule, DataSourceModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

