import { CommonService } from '../services/common.service';
import { Filter } from '../interfaces/common';
import { Keys } from '../enums/keys';

export abstract class ChildComponent {
  constructor(public eventIsDisabled = true,
              public datesAreDisabled = true,
              protected commonService: CommonService,
              protected filterKey: Keys) {
  }

  message = '';

  abstract getMessage(): string;

  setCurrentFilter(filter: Filter): void {
    this.commonService.currentFilter = filter;
    this.message = this.getMessage();
    this.commonService.componentFilters[this.filterKey] = filter;
  }

  checkIfEventDiffers(): boolean {
    return this.commonService.componentFilters[this.filterKey]?.event.value !==
      this.commonService.currentFilter.event.value;
  }

  checkIfStartDateDiffers(): boolean {
    return JSON.stringify(this.commonService.componentFilters[this.filterKey]?.startDate) !==
      JSON.stringify(this.commonService.currentFilter.startDate);
  }

  checkIfEndDateDiffers(): boolean {
    return JSON.stringify(this.commonService.componentFilters[this.filterKey]?.endDate) !==
      JSON.stringify(this.commonService.currentFilter.endDate);
  }
}
