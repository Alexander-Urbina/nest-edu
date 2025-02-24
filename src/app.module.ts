import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VideosController } from './videos/videos.controller';
import { AdminController } from './admin/admin.controller';
import { UsersModule } from './users/users.module';
import { VideoService } from './videos/videos.service';

@Module({
  imports: [UsersModule],
  controllers: [AppController, VideosController, AdminController],
  providers: [AppService, VideoService],
})
export class AppModule {}
