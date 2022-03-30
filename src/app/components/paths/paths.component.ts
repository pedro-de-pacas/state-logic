import { Component, OnInit } from '@angular/core';
import { ChildComponent } from '../../classes/child-component';
import { CommonService } from '../../services/common.service';
import { Keys } from '../../enums/keys';

@Component({
  selector: 'app-paths',
  templateUrl: './paths.component.html',
  styleUrls: ['./paths.component.scss']
})
export class PathsComponent extends ChildComponent implements OnInit {

  constructor(commonService: CommonService) {
    super(false, true, commonService, Keys.PATHS);
  }

  override getMessage(): string {
    return this.checkIfEventDiffers() ? this.commonService.currentFilter.event.title : 'noop' ;
  }

  ngOnInit(): void {
    this.onInit();
  }
}
