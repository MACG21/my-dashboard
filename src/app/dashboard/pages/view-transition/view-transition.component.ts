import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
  selector: 'app-view-transition',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './view-transition.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ViewTransitionComponent implements OnInit {

  ngOnInit(): void { }

}
