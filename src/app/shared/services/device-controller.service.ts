import { Injectable } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Injectable({
  providedIn: 'root'
})
export class DeviceControllerService {
  //this service will be detect the device type
  constructor(public deviceService : DeviceDetectorService) { }
}
