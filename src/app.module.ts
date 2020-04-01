 import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';

import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://acarolsf:<password>@cluster0-9rwan.gcp.mongodb.net/test?retryWrites=true&w=majority'),
    // MongoClient.connect('mongodb+srv://user:<password>@cluster0-9rwan.gcp.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true }),
    TasksModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
