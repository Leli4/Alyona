import { Module } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { AuthorsController } from './authors.controller';
import { DataSourceModule } from 'src/datasource/datasource.module';


@Module({
  controllers: [AuthorsController],
  providers: [AuthorsService],
  imports: [DataSourceModule]
})
export class AuthorsModule {}
