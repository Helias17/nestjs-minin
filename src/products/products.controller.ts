import { Header, HttpStatus } from '@nestjs/common';
import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  Put,
  Redirect,
  HttpCode,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }

  @Get()
  // @Redirect('https://google.com', 301)
  getAll(): string[] {
    return this.productsService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string): string {
    return this.productsService.getById(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED) // response status code
  @Header('Cache-Control', 'none')
  create(@Body() CreateProductDto: CreateProductDto): CreateProductDto {
    return this.productsService.create(CreateProductDto);
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
