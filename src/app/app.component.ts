import { Component } from '@angular/core';
import { ChildComponent } from './classes/child-component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  childComponent: ChildComponent | null = null;

  constructor() {}

  getComponent(childComponent: ChildComponent) {
    this.childComponent = childComponent;
  }
}

