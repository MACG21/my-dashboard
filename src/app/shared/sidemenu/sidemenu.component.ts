import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, type OnInit } from '@angular/core';
import { routes } from '../../app.routes';
import { RouterModule } from '@angular/router';
import ChangeDetectionComponent from '../../dashboard/pages/change-detection/change-detection.component';

@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [
    CommonModule, RouterModule
  ],
  templateUrl: './sidemenu.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidemenuComponent implements OnInit {

  public menuItems = routes

  .map((route) => route.children ?? [])
  .flat()
  .filter((route) => route && route.path)
  .filter((route) => !route.path?.includes(':'))
  .map((route) => ({
    path: route.path,
    title: route.title || ''
  }));

  ngOnInit(): void {
    console.log(this.menuItems);
  }


}

