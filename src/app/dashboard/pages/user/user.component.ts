import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './user.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UserComponent implements OnInit {

  ngOnInit(): void { }

}
