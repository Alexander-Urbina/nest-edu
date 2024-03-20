import {
  Controller,
  Get,
  Post,
  Req,
  Redirect,
  Query,
  Param,
  Body,
  ValidationPipe,
  UsePipes,
} from '@nestjs/common';
import { Request } from 'express';
import { Observable, of } from 'rxjs';
import { CreateVideoDto } from './create-vide.dto';

@Controller('videos')
export class VideosController {
  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() createVideoDto: CreateVideoDto) {
    console.log(createVideoDto);
    return 'This action adds a new video';
  }

  @Get()
  findAll(@Req() req: Request) {
    console.log(req.body);
    return 'This action returns all videos';
  }

  @Get('ab*cd')
  findAll2(@Req() req: Request) {
    console.log(req.body);
    return 'This route uses a wildcard';
  }

  @Get('last')
  @Redirect('https://docs.nestjs.com', 302)
  findLast(@Query('version') version) {
    console.log({ version });
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }

  @Get('async')
  async findSome(): Promise<string[]> {
    return [];
  }

  @Get('observable')
  findObservable(): Observable<string[]> {
    return of([]);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log(id);
    return `This action returns a #${id} video`;
  }
}
