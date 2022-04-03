import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.css']
})
export class NewComponentComponent implements OnInit {

  constructor() { }

  isOn = false;

  ngOnInit(): void {
  }

  // @ViewChild('screen') screen: ElementRef;
  @ViewChild('canvas') canvas: ElementRef | undefined = undefined;
  @ViewChild('downloadLink') downloadLink: ElementRef | undefined = undefined;

  makeScreenShot(): void {
    html2canvas(document.body)
      .then(canvas => {
        this.canvas.nativeElement.src = canvas.toDataURL();
        this.downloadLink.nativeElement.href = canvas.toDataURL('img/png');
        this.downloadLink.nativeElement.download = 'marble-diagram.png';
        this.downloadLink.nativeElement.click();
      })
  }

}
