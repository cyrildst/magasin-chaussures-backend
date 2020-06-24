import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ShoeModule } from './shoe/shoe.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/shoes-store', { useNewUrlParser: true, useUnifiedTopology: true }),
    ShoeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
