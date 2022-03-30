import { Component, OnInit } from '@angular/core';
import { ChildComponent } from '../../classes/child-component';
import { CommonService } from '../../services/common.service';
import { Keys } from '../../enums/keys';

@Component({
  selector: 'app-cohort',
  templateUrl: './cohort.component.html',
  styleUrls: ['./cohort.component.scss']
})
export class CohortComponent extends ChildComponent implements OnInit {

  constructor(commonService: CommonService) {
    super(true, false, commonService, Keys.COHORT);
  }

  override getMessage(): string {
    return this.checkIfEndDateDiffers() || this.checkIfStartDateDiffers()
      ? `${this.commonService.startDate} ${this.commonService.endDate}`
      : 'noop';
  }

  ngOnInit(): void {
    this.onInit();
  }
}
