import { Events, Keys } from '../enums/keys';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

export interface NavbarItem {
  url: Keys;
  title: string;
}

export interface Event {
  title: string,
  value: Events,
}

export interface Filter {
  event: Event,
  startDate: NgbDateStruct,
  endDate: NgbDateStruct,
}

export type ComponentFilter = {
  [key in Keys]: Filter | null;
};
