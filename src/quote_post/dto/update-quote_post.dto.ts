import { PartialType } from '@nestjs/mapped-types';
import { CreateQuotePostDto } from './create-quote_post.dto';

export class UpdateQuotePostDto extends PartialType(CreateQuotePostDto) {}
