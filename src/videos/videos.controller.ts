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
import { CreateVideoDto } from './dto/create-video.dto';
import { VideoService } from './videos.service';
import { Video } from './interfaces/videos';

@Controller('videos')
export class VideosController {
  constructor(private _videoService: VideoService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async create(@Body() createVideoDto: CreateVideoDto) {
    this._videoService.create(createVideoDto);
    console.log(createVideoDto);
    return 'This action adds a new video';
  }

  @Get()
  async findAll(@Req() req: Request): Promise<Video[]> {
    console.log(req.body);
    return this._videoService.findAll();
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
