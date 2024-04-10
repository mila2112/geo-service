"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.geoLocationServiceInstance = exports.GeoLocationService = void 0;
var common_1 = require("@nestjs/common");
var geoip = require("geoip-lite");
var GeoLocationService = /** @class */ (function () {
    function GeoLocationService() {
    }
    GeoLocationService.prototype.getLocationByIp = function (ip) {
        if (!ip) {
            throw new common_1.BadRequestException('IP address is required');
        }
        var geoData = geoip.lookup(ip);
        if (!geoData) {
            throw new common_1.NotFoundException('No data found for this IP');
        }
        return {
            lat: geoData.ll[0],
            lng: geoData.ll[1],
            country: geoData.country,
            city: geoData.city
        };
    };
    GeoLocationService = __decorate([
        (0, common_1.Injectable)()
    ], GeoLocationService);
    return GeoLocationService;
}());
exports.GeoLocationService = GeoLocationService;
exports.geoLocationServiceInstance = new GeoLocationService();
