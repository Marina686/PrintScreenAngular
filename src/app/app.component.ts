import { Component, ElementRef, ViewChild } from '@angular/core'; 
import html2canvas from 'html2canvas';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular';

  @ViewChild('screen') screen: ElementRef;
  @ViewChild('canvas') canvas: ElementRef;
  @ViewChild('downloadLink') downloadLink: ElementRef;

  downloadImage(){    
     html2canvas(this.screen.nativeElement).then(canvas => {
      this.canvas.nativeElement.src = canvas.toDataURL();
      this.downloadLink.nativeElement.href = canvas.toDataURL('image/png');
      this.downloadLink.nativeElement.download = 'marble-diagram.png';
      this.downloadLink.nativeElement.click();
    });
  }
}
