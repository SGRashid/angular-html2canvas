import { Component, ViewChild, ElementRef } from '@angular/core';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent {

  constructor() { }

  ngOnInit(): void {
  }


  isOn = false;

  @ViewChild('canvas') canvas: ElementRef;
  @ViewChild('downloadLink') downloadLink: ElementRef;

  makeScreenShot(): void {
    this.isOn = !this.isOn;
    html2canvas(document.body)
      .then(canvas => {
        this.canvas.nativeElement.src = canvas.toDataURL();
        this.downloadLink.nativeElement.href = canvas.toDataURL('img/png');
        this.downloadLink.nativeElement.download = 'marble-diagram.png';
        this.downloadLink.nativeElement.click();
      })
  }

}
