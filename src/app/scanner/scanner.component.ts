import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'qrtests-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.css']
})
export class ScannerComponent implements OnInit {

  constructor() { }

  gotRestuls: boolean = false;
  resultString: string;
  gotError: boolean = false;
  isScanning: boolean = false;
  buttonMessage: string = "Scan a QR Code";
  errorString: string;

  regExp: RegExp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;

  availableDevices: MediaDeviceInfo[];
  currentDevice: MediaDeviceInfo = null;

  hasDevices: boolean;

  ngOnInit(): void {
  }

  onReceiveQRCode(resultString: string) {
    this.resultString = resultString;
    this.gotRestuls = true;
    this.gotError = false;
    this.errorString = null;
    if(this.isUrl(resultString)){
      window.location.href = resultString;
    }
  }

  onScanError(errorString: string){
    this.gotError = true;
    this.gotRestuls = false;
    this.errorString = errorString;
  }

  toggleQRScanner() {
    if(this.isScanning) {
      this.buttonMessage = "Scan a QR Code";
      this.isScanning = false;
    } else {
      this.buttonMessage = "Close QR Scanner";
      this.isScanning = true;
    }
  }

  clearQRResults() {
    this.resultString = null;
  }

  onCamerasFound(devices: MediaDeviceInfo[]): void {
    this.availableDevices = devices;
    this.hasDevices = Boolean(devices && devices.length);
    console.log('Found Devices:', devices);

  }

  onDeviceSelectChange(selected: string) {
    console.log('Received selection:', selected);

    const device = this.availableDevices.find(x => x.deviceId === selected);
    this.currentDevice = device || null;
    console.log('Selected Device:', device);

  }

  deviceSelected(selected: string) {
    console.log('Device selected:', selected);
    const device = this.availableDevices.find(x => x.deviceId === selected);
    this.currentDevice = device || null;
    console.log('Selected Device:', this.currentDevice);
  }

  isUrl(test: string) : boolean{
    var validated = this.regExp.test(test);
    console.log('Is URL:', validated);
    return validated;
  }

}
