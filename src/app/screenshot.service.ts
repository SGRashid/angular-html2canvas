import { Injectable } from '@angular/core';
import html2canvas from 'html2canvas';

@Injectable({
  providedIn: 'root'
})
export class ScreenshotService {

  constructor() { }

  makeScreenshot(): void {
    html2canvas(document.body).then(this.#createImage);
  }

  #createImage = (canvas: HTMLCanvasElement): void => {
    this.#downloadImage(canvas);
    // this.#showImage(canvas);
  }

  #downloadImage = (canvas: HTMLCanvasElement): void => {
    const fakeElement = document.createElement('a');
    // toDataURL defaults to png, so we need to request a jpeg, then convert for file download.
    fakeElement.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
    fakeElement.download = 'somefilename.jpg';
    fakeElement.click();
  }

  #showImage = (canvas: HTMLCanvasElement): void => {
    document.body.appendChild(canvas);
  }
}
