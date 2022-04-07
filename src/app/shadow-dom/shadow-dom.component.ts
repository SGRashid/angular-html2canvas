import { AfterViewInit, Component } from '@angular/core';
import { ScreenshotService } from '../screenshot.service';

@Component({
  selector: 'app-shadow-dom',
  templateUrl: './shadow-dom.component.html',
  styleUrls: ['./shadow-dom.component.css']
})
export class ShadowDomComponent implements AfterViewInit {

  constructor(public screenshotService: ScreenshotService) { }

  ngAfterViewInit(): void {

    class ShadowDOMElement extends HTMLElement { // (1)

      connectedCallback() {
        const shadow = this.attachShadow({mode: 'open'});
        shadow.innerHTML = '<p>Shadow DOM</p>';
      }
      
    }
      
      customElements.define("shadow-dom", ShadowDOMElement); // (2)
      const newElement = document.createElement('shadow-dom');
      document.body.appendChild(newElement);
  }

  makeScreenshot(): void {
    this.screenshotService.makeScreenshot();
  }

}
