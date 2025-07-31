import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { QuotePostService } from './quote_post.service';
import { CreateQuotePostDto } from './dto/create-quote_post.dto';
import { UpdateQuotePostDto } from './dto/update-quote_post.dto';

@Controller('quote-post')
export class QuotePostController {
  constructor(private readonly quotePostService: QuotePostService) {}

  @Post()
  create(@Body() createQuotePostDto: CreateQuotePostDto) {
    return this.quotePostService.create(createQuotePostDto);
  }

  @Get()
  findAll() {
    return this.quotePostService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.quotePostService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateQuotePostDto: UpdateQuotePostDto) {
    return this.quotePostService.update(+id, updateQuotePostDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.quotePostService.remove(+id);
  }
}
