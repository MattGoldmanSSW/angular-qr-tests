# QRTests

This project was created for testing the [zxing/ngx-scanner](https://www.npmjs.com/package/@zxing/ngx-scanner) and [ng-recaptcha](https://www.npmjs.com/package/ng-recaptcha) libraries in an Angular application.

As it requires access to the camera, HTTPS must be used (even for testing locally), as your browser will block access to the getUserMedia() call without it.

An SSL cert and key are included in the repo (even though they shouldn't be) so you can trust this cert if you don't have one or want to generate your own.



## Demo

A demo is available [here](https://goldieplaygroundstorage.z8.web.core.windows.net/) 

**Note 1**: This is a temporary playground and the demo may not be persisted.

**Note 2**: If using this on an iOS device, you *must* use Safari. Apple do not allow access to the camera from any other devices.

## Development server

Run `ng serve --ssl=true --sslKey=ssl\server.key --sslCert=ssl\server.cert` for a dev server. Navigate to `https://localhost:4200/`. The app will automatically reload if you change any of the source files.
