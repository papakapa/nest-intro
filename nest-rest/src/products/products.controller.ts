import {Controller, Get, Post, Param, Body, Delete, Put, HttpCode, HttpStatus, Header} from '@nestjs/common';
import {CreateProductDto} from "./dto/create-product.dto";
import {UpdateProductDto} from "./dto/update-product.dto";
import {ProductsService} from "./products.service";
import {Product} from "./schemas/products.schema";

@Controller('products')
export class ProductsController {

  constructor(private readonly productService: ProductsService) {

  }

  @Get()
  // @Redirect('https://google.com', 301)
  getAll(): Promise<Product[]> {
    return this.productService.getAll()
  }

  @Get(':id')
  getOne(@Param('id') id: string): Promise<Product> {
    return this.productService.getById(id)
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-Control', 'none')
  create(@Body() createProduct: CreateProductDto): Promise<Product> {
    return this.productService.create(createProduct);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Product> {
    return this.productService.remove(id);
  }

  @Put(':id')
  update(@Body() updateProduct: UpdateProductDto,@Param('id') id: string): Promise<Product> {
    return this.productService.update(id, updateProduct);
  }

}
