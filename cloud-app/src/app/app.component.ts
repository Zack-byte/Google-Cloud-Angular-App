import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'cloud-app';
  webApiUrl = environment.webapiurl;

  public ngOnInit(): void {
    document.addEventListener('mousemove', (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const anchor = document.getElementById('anchor');
      const rekt = anchor?.getBoundingClientRect();
      if (rekt != undefined) {
        const anchorX = rekt.left + rekt.width / 2;
        const anchorY = rekt.top + rekt.height / 2;

        const angleDeg = this.angle(mouseX, mouseY, anchorX, anchorY);

        const eyes = document.querySelectorAll('.eye');

        if (eyes != null) {
          eyes.forEach((eye: any) => {
            eye.style.transform = `rotate(${angleDeg + 90}deg)`;
          });
        }
      }
    });
  }

  public angle(cx: number, cy: number, ex: number, ey: number): number {
    const dy = ey - cy;
    const dx = ex - cx;
    const rad = Math.atan2(dy, dx);
    const deg = (rad * 180) / Math.PI;
    return deg;
  }
}
