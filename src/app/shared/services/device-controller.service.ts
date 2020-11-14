import { Injectable } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Injectable({
  providedIn: 'root'
})
export class DeviceControllerService {

  constructor(public deviceService : DeviceDetectorService) { }
}
