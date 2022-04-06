import { Component } from '@angular/core';
import { ScreenshotService } from '../screenshot.service';

@Component({
  selector: 'app-iframe',
  templateUrl: './iframe.component.html',
  styleUrls: ['./iframe.component.css']
})
export class IframeComponent {

  constructor(public screenshotService: ScreenshotService) { }

  makeScreenshot(): void {
    this.screenshotService.makeScreenshot();
  }

  makeIframeScreenshot(): void {
    const iframe = document.getElementsByTagName('iframe')[0];
    this.screenshotService.makeIframeScreenshot(iframe);
  }
}
