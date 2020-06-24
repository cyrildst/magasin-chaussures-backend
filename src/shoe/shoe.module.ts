import { Module } from '@nestjs/common';
import { ShoeService } from './shoe.service';
import { ShoeController } from './shoe.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ShoeSchema } from './schemas/shoe.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Shoe', schema: ShoeSchema }]),
  ],
  providers: [ShoeService],
  controllers: [ShoeController]
})
export class ShoeModule {}
