import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
  selector: 'app-heavy-louders-slow',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './heavy-louders-slow.component.html',
  template: `
  <h1>Holitas</h1>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeavyLoudersSlowComponent implements OnInit {

  ngOnInit(): void { }

}
