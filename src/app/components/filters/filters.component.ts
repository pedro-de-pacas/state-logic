import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { Event, Filter } from '../../interfaces/common';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent {

  @Input() eventIsDisabled = true;
  @Input() datesAreDisabled = true;
  @Output() filterIsChanged = new EventEmitter<Filter>();

  constructor(public commonService: CommonService) {
  }

  onSetEvent(event: Event) {
    this.filterIsChanged.emit({ ...this.commonService.currentFilter, event });
  }

  onSetStartDate(startDate: NgbDateStruct) {
    this.filterIsChanged.emit({ ...this.commonService.currentFilter, startDate });
  }

  onSetEndDate(endDate: NgbDateStruct) {
    this.filterIsChanged.emit({ ...this.commonService.currentFilter, endDate });
  }
}
