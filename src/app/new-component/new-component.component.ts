import { Component, ElementRef, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';
import { ScreenshotService } from '../screenshot.service';

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.css']
})
export class NewComponentComponent {

  constructor(public screenshotService: ScreenshotService) { }

  isOn = false;

  @ViewChild('canvas') canvas: ElementRef;
  @ViewChild('downloadLink') downloadLink: ElementRef;

  makeScreenShot(): void {
    // html2canvas(document.body)
    //   .then(canvas => {
    //     this.canvas.nativeElement.src = canvas.toDataURL();
    //     this.downloadLink.nativeElement.href = canvas.toDataURL('img/png');
    //     this.downloadLink.nativeElement.download = 'marble-diagram.png';
    //     this.downloadLink.nativeElement.click();
    //   })
    this.screenshotService.makeScreenshot();
  }
}
