import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import * as geoip from 'geoip-lite';

@Injectable()
export class GeoLocationService {
  getLocationByIp(ip: string) {
    if (!ip) {
      throw new BadRequestException('IP address is required');
    }

    const geoData = geoip.lookup(ip);

    if (!geoData) {
      throw new NotFoundException('No data found for this IP');
    }

    return {
      lat: geoData.ll[0],
      lng: geoData.ll[1],
      country: geoData.country,
      city: geoData.city,
    };
  }
}

export const geoLocationServiceInstance = new GeoLocationService();
