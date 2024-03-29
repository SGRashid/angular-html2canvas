import { Component } from '@angular/core';
import { ScreenshotService } from '../screenshot.service';

@Component({
  selector: 'app-iframe-case2',
  templateUrl: './iframe-case2.component.html',
  styleUrls: ['./iframe-case2.component.css']
})
export class IframeCase2Component {

  constructor(public screenshotService: ScreenshotService) { }

  makeScreenshot = (): void => this.screenshotService.makeScreenshot();

  makeIframeScreenshot = (): void => {

    const iframeList = document.getElementsByTagName('iframe');
    if (iframeList.length) {
      Array.from(iframeList)
        .forEach(iframe => iframe.removeAttribute('sandbox'));
    }

    this.screenshotService.makeScreenshot();
    
  }

}
