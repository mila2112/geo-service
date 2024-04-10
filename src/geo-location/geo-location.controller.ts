import { Controller, Get, Query, HttpStatus } from '@nestjs/common';
import { GeoLocationService } from './geo-location.service';

@Controller('location')
export class GeoLocationController {
  constructor(private readonly geoLocationService: GeoLocationService) {}

  @Get()
  async getLocationByIp(@Query('ip') ip: string) {
    try {
      const location = this.geoLocationService.getLocationByIp(ip);
      return { status: HttpStatus.OK, data: location };
    } catch (error) {
      return { status: HttpStatus.INTERNAL_SERVER_ERROR, error: error.message };
    }
  }
}
