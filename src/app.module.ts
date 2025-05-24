import { Module } from '@nestjs/common';
import { TodoModule } from './todo.module';

@Module({
  imports: [TodoModule],
  controllers: [],
})
export class AppModule {}
