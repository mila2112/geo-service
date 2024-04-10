import { geoLocationSDKInstance } from './sdk/geo-location-sdk';

async function getLocation() {
  try {
    const location = await geoLocationSDKInstance.getLocationByIp('8.8.8.8');
    console.log(location);
  } catch (error) {
    console.error(error.message);
  }
}
