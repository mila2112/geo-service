import {
  GeoLocationService,
  geoLocationServiceInstance,
} from '../geo-location/geo-location.service';

export class GeoLocationSDK {
  constructor(private readonly geoLocationService: GeoLocationService) {}

  async getLocationByIp(ip: string) {
    try {
      return this.geoLocationService.getLocationByIp(ip);
    } catch (error) {
      throw new Error(`Error while fetching data: ${error.message}`);
    }
  }
}

export const geoLocationSDKInstance = new GeoLocationSDK(
  geoLocationServiceInstance,
);
