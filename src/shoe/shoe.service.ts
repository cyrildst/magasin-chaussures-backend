import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Shoe } from './interfaces/shoe.interface';
import { CreateShoeDTO } from './dto/create-shoe.dto';

@Injectable()
export class ShoeService {
    constructor(@InjectModel('Shoe') private readonly shoeModel: Model<Shoe>) { }

  async addShoe(createShoeDTO: CreateShoeDTO): Promise<Shoe> {
    console.log(createShoeDTO);
    const newShoe = await new this.shoeModel(createShoeDTO);
    return newShoe.save();
  }  

  async getShoe(shoeID): Promise<Shoe> {
    const shoe = await this.shoeModel
      .findById(shoeID)
      .exec();
    return shoe;
  }

  async getShoes(): Promise<Shoe[]> {
    const shoes = await this.shoeModel.find().exec();
    return shoes;
  }

  async editShoe(shoeID, createShoeDTO: CreateShoeDTO): Promise<Shoe> {
    const editedShoe = await this.shoeModel
      .findByIdAndUpdate(shoeID, createShoeDTO, { new: true });
    return editedShoe;
  }
  async deleteShoe(shoeID): Promise<any> {
    const deletedShoe = await this.shoeModel
      .findByIdAndRemove(shoeID);
    return deletedShoe;
  }
}
