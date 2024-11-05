import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
  selector: 'app-tittle',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './tittle.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TittleComponent implements OnInit {

  ngOnInit(): void { }

}
