import { Controller, Get, Res, HttpStatus, Param, NotFoundException, Post, Body, Put, Query, Delete } from '@nestjs/common';
import { ShoeService } from './shoe.service';
import { CreateShoeDTO } from './dto/create-shoe.dto';
import { ValidateObjectId } from './shared/pipes/validate-object-id.pipes';

@Controller('shoe')
export class ShoeController {

    constructor(private shoeService: ShoeService) { }

    // Fetch a particular shoe using ID
    @Get('get/:shoeID')
    async getShoe(@Res() res, @Param('shoeID', new ValidateObjectId()) shoeID) {
        const shoe = await this.shoeService.getShoe(shoeID);
        if (!shoe) {
            throw new NotFoundException("Pair of shoes doesn't exist!");
        }
        return res.status(HttpStatus.OK).json(shoe);
    }

    // Fetch all posts
    @Get('get')
    async getShoes(@Res() res) {
        const shoes = await this.shoeService.getShoes();
        return res.status(HttpStatus.OK).json(shoes);
    }

    // Adding shoe using DTO object
    @Post('/post')
    async addShoe(@Res() res, @Body() createShoeDTO: CreateShoeDTO) {
        const newShoe = await this.shoeService.addShoe(createShoeDTO);
        return res.status(HttpStatus.OK).json({
            message: 'Pair of shoes has been added successfully!',
            post: newShoe,
        });
    }

    // Modify a pair of shoes using ID
    @Put('/edit')
    async editShoe(
        @Res() res,
        @Query('shoeID', new ValidateObjectId()) shoeID,
        @Body() createShoeDTO: CreateShoeDTO,
    ) {
        const editedShoe = await this.shoeService.editShoe(shoeID, createShoeDTO);
        if (!editedShoe) {
            throw new NotFoundException("Pair of shoes doesn't exist!");
        }
        return res.status(HttpStatus.OK).json({
            message: 'Pair of shoes has been successfully updated',
            post: editedShoe,
        });
    }

    // Delete a pair of shoes using ID
    @Delete('/delete')
    async deleteShoe(@Res() res, @Query('shoeID', new ValidateObjectId()) shoeID) {
        const deletedShoe = await this.shoeService.deleteShoe(shoeID);
        if (!deletedShoe) {
            throw new NotFoundException("Pair of shoes doesn't exist!");
        }
        return res.status(HttpStatus.OK).json({
            message: 'Pair of shoes has been deleted!',
            post: deletedShoe,
        });
    }

    // All Brands avaiable
    @Get('brands')
    getBrands(@Res() res) {
        const brands = ['Adidas', 'Nike', 'Reebook', 'Converse'];
        return res.status(HttpStatus.OK).json(brands);
    }

    // All colors avaiable
    @Get('colors')
    getColors(@Res() res) {
        const colors = ['blue', 'green', 'white', 'black','orange','pink','red','yellow','purple'];
        return res.status(HttpStatus.OK).json(colors);
    }

    // All types avaiable
    @Get('types')
    getTypes(@Res() res) {
        const types = ['Running', 'Relax', 'Sport', 'Classic'];
        return res.status(HttpStatus.OK).json(types);
    }

    // All materials avaiable
    @Get('materials')
    getMaterials(@Res() res) {
        const materials = ['Leather', 'Tissue', 'GoreTex', 'Plastic'];
        return res.status(HttpStatus.OK).json(materials);
    }
}
