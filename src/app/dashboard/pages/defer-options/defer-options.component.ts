import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
  selector: 'app-defer-options',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './defer-options.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DeferOptionsComponent implements OnInit {

  ngOnInit(): void { }

}
