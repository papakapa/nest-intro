import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ProductsModule} from "./products/products.module";
import {MongooseModule} from "@nestjs/mongoose";

@Module({
  imports: [
    ProductsModule,
    MongooseModule.forRoot('mongodb+srv://kirill:1111@cluster0.scct0.mongodb.net/nest-rest?retryWrites=true&w=majority')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
