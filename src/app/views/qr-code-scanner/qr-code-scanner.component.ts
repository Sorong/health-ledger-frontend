import {Component, OnInit, ViewChild} from '@angular/core';
import {ZXingScannerComponent} from '@zxing/ngx-scanner';
import {Router} from '@angular/router';

import { Result } from '@zxing/library';

@Component({
  selector: 'app-qr-code-scanner',
  templateUrl: './qr-code-scanner.component.html',
  styleUrls: ['./qr-code-scanner.component.css']
})
export class QrCodeScannerComponent implements OnInit {

  constructor(private router: Router) { }

  @ViewChild('scanner')
  scanner: ZXingScannerComponent;

  hasCameras = false;
  hasPermission: boolean;

  availableDevices: MediaDeviceInfo[];
  selectedDevice: MediaDeviceInfo;

  ngOnInit(): void {

    this.scanner.camerasFound.subscribe((devices: MediaDeviceInfo[]) => {
      this.hasCameras = true;

      console.log('Devices: ', devices);
      this.availableDevices = devices;

      // selects the devices's back camera by default
      this.scanner.changeDevice(devices[0]);
      for (const device of devices) {
           if (/back|rear|environment/gi.test(device.label)) {
               this.scanner.changeDevice(device);
               this.selectedDevice = device;
               break;
           }
       }
    });

    this.scanner.camerasNotFound.subscribe((devices: MediaDeviceInfo[]) => {
      console.error('An error has occurred when trying to enumerate your video-stream-enabled devices.');
    });

    this.scanner.permissionResponse.subscribe((answer: boolean) => {
      this.hasPermission = answer;
    });

  }

  handleQrCodeResult(resultString: string) {
    console.log('Result: ', resultString);
    let obj = null;
    try {
      obj = JSON.parse(resultString);
    } catch(err) { console.log(err); }

    if(obj == null)
      return

    this.router.navigate(['./access-request-details', obj.publicKey, obj.name]);
  }

  onCancel() {
    this.router.navigate(['./access-requests']);
  }

  onSimulation() {
    let obj = {
      publicKey: "-----BEGIN PUBLIC KEY-----\nMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCMnPL4D3aOWGQ0PRAxF8cwi56D\nqmWFAe3lcOEEW+TI45IA8X2E+FkAcVuKrT+RFAzH7VoRy6bcFv52SP+dlgOp4JgX\njGEr8YNEGmVkNe3SYTZLUUMHjny5cTpA5Z2pvEKlmuTi2NL2r15oLDRk96D8l8FC\nuGhhfba3qqUwMHXOKwIDAQAB\n-----END PUBLIC KEY-----",
      name: "Tester"
    }

    this.handleQrCodeResult(JSON.stringify(obj));
  }

  onDeviceSelectChange(selectedValue: string) {
    console.log('Selection changed: ', selectedValue);
    this.selectedDevice = this.scanner.getDeviceById(selectedValue);
  }
}
