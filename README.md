# QRTests

This project was created for testing the [zxing/ngx-scanner](https://www.npmjs.com/package/@zxing/ngx-scanner) library in an Angular application.

As it requires access to the camera, HTTPS must be used (even for testing locally), as your browser will block access to the getUserMedia() call without it.

An SSL cert and key are included in the repo (even though they shouldn't be) so you can trust this cert if you don't have one or want to generate your own.

## Development server

Run `ng serve --ssl=true --sslKey=ssl\server.key --sslCert=ssl\server.cert` for a dev server. Navigate to `https://localhost:4200/`. The app will automatically reload if you change any of the source files.
