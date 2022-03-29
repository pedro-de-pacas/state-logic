import { Injectable } from '@angular/core';
import { ComponentFilter, Event, Filter } from '../interfaces/common';
import { Events, Keys } from '../enums/keys';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  constructor() {
  }

  get startDate() {
    return `${this.currentFilter.startDate.year}-${this.currentFilter.startDate.month}-${this.currentFilter.startDate.day}`;
  }

  get endDate() {
    return `${this.currentFilter.endDate.year}-${this.currentFilter.endDate.month}-${this.currentFilter.endDate.day}`;
  }

  readonly events: Event[] = [
    { title: 'Breakfast', value: Events.BREAKFAST },
    { title: 'Lunch', value: Events.LUNCH },
    { title: 'Dinner', value: Events.DINNER },
  ];

  currentFilter: Filter = {
    event: this.events[0],
    startDate: { year: 2022, month: 1, day: 1 },
    endDate: { year: 2022, month: 2, day: 1 },
  }

  componentFilters: ComponentFilter = {
    [Keys.DASHBOARD]: null,
    [Keys.COHORT]: null,
    [Keys.PATHS]: null,
  }
}
