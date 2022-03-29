import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Keys } from '../../enums/keys';
import { NavbarItem } from '../../interfaces/common';
import { filter, map, Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  $url: Observable<string>;

  constructor(public router: Router) {
    this.$url = this.router.events.pipe(
      filter(events => events instanceof NavigationEnd),
      map(events => (events as NavigationEnd).url.substring(1) || Keys.DASHBOARD)
    )
  }

  links: NavbarItem[] = [
    { title: 'Dashboard', url: Keys.DASHBOARD },
    { title: 'Cohort', url: Keys.COHORT },
    { title: 'Paths', url: Keys.PATHS },
  ];
}
