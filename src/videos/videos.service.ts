import { Injectable } from '@nestjs/common';
import { Video } from './interfaces/videos';

@Injectable()
export class VideoService {
  private readonly videos: Video[] = [
    {
      title: 'some title',
      description: 'description',
      url: 'url',
    },
  ];

  create(video: Video) {
    this.videos.push(video);
  }

  findAll(): Video[] {
    return this.videos;
  }
}
