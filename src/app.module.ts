import { Module } from '@nestjs/common';
import { GeoLocationModule } from './geo-location/geo-location.module';

@Module({
  imports: [GeoLocationModule],
})
export class AppModule {}
