import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  Put,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {
  @Get()
  getAll(): string {
    return 'get all';
  }

  @Get(':id')
  getOne(@Param('id') id: string): string {
    return `get one + ${id}`;
  }

  @Post()
  create(@Body() CreateProductDto: CreateProductDto): string {
    return `Title ${CreateProductDto.title} Price ${CreateProductDto.price}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string): string {
    return `Remove product ${id}`;
  }

  @Put(':id')
  update(@Body() UpdateProductDto: UpdateProductDto, @Param('id') id: string) {
    return `Product ${id} was updated with data: Title ${UpdateProductDto.title} Price ${UpdateProductDto.price}`;
  }
}
