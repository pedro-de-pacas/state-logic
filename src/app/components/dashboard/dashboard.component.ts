import { Component, OnInit } from '@angular/core';
import { ChildComponent } from '../../classes/child-component';
import { CommonService } from '../../services/common.service';
import { Keys } from '../../enums/keys';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent extends ChildComponent implements OnInit {

  constructor(commonService: CommonService) {
    super(false, false, commonService, Keys.DASHBOARD);
  }

  override getMessage(): string {
    return this.checkIfEndDateDiffers() || this.checkIfStartDateDiffers() || this.checkIfEventDiffers()
      ? `${this.commonService.currentFilter.event.value} ${this.commonService.startDate} ${this.commonService.endDate}`
      : 'noop';
  }

  ngOnInit(): void {
    this.message = this.getMessage();
    this.commonService.componentFilters[this.filterKey] = this.commonService.currentFilter;
  }
}
