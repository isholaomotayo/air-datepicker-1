/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
/* tslint:disable */

import '@stencil/core';




declare global {
  interface HTMLElement {
    componentOnReady?: () => Promise<this | null>;
  }

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}

  namespace StencilComponents {

    interface AirDatepicker {
      'altField': string;
      'altFieldDateFormat': string;
      'autoClose': boolean;
      'classes': string;
      'clear': () => void;
      'clearButton': boolean;
      'dateFormat': string;
      'dateTimeSeparator': string;
      'destroy': () => void;
      'disableNavWhenOutOfRange': boolean;
      'firstDay': string;
      'getElement': () => HTMLElement;
      'getSelectedDates': () => Date[];
      'hide': () => void;
      'hoursStep': number;
      'inline': boolean;
      'keyboardNav': boolean;
      'language': string;
      'maxDate': string;
      'maxHours': number;
      'maxMinutes': number;
      'minDate': string;
      'minHours': number;
      'minMinutes': number;
      'minView': string;
      'minutesStep': number;
      'monthsField': string;
      'moveToOtherMonthsOnSelect': boolean;
      'moveToOtherYearsOnSelect': boolean;
      'multipleDates': boolean | number;
      'multipleDatesSeparator': string;
      'next': () => void;
      'offset': number;
      'onlyTimepicker': boolean;
      'position': string;
      'prev': () => void;
      'range': boolean;
      'removeDate': (date: Date) => void;
      'selectDate': (date: Date) => void;
      'selectOtherMonths': boolean;
      'selectOtherYears': boolean;
      'setDate': (date: Date) => void;
      'setView': (view: string) => void;
      'show': () => void;
      'showEvent': string;
      'showOtherMonths': boolean;
      'showOtherYears': boolean;
      'startDate': Date;
      'timeFormat': string;
      'timepicker': boolean;
      'todayButton': boolean;
      'toggleSelected': boolean;
      'update': (field: string, value: any) => void;
      'view': string;
      'weekends': Array<number>;
    }
  }


    interface HTMLAirDatepickerElement extends StencilComponents.AirDatepicker, HTMLStencilElement {}

    var HTMLAirDatepickerElement: {
      prototype: HTMLAirDatepickerElement;
      new (): HTMLAirDatepickerElement;
    };
    

  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {
    'air-datepicker': JSXElements.AirDatepickerAttributes;
    }
  }

  namespace JSXElements {

    export interface AirDatepickerAttributes extends HTMLAttributes {
      'altField'?: string;
      'altFieldDateFormat'?: string;
      'autoClose'?: boolean;
      'classes'?: string;
      'clearButton'?: boolean;
      'dateFormat'?: string;
      'dateTimeSeparator'?: string;
      'disableNavWhenOutOfRange'?: boolean;
      'firstDay'?: string;
      'hoursStep'?: number;
      'inline'?: boolean;
      'keyboardNav'?: boolean;
      'language'?: string;
      'maxDate'?: string;
      'maxHours'?: number;
      'maxMinutes'?: number;
      'minDate'?: string;
      'minHours'?: number;
      'minMinutes'?: number;
      'minView'?: string;
      'minutesStep'?: number;
      'monthsField'?: string;
      'moveToOtherMonthsOnSelect'?: boolean;
      'moveToOtherYearsOnSelect'?: boolean;
      'multipleDates'?: boolean | number;
      'multipleDatesSeparator'?: string;
      'offset'?: number;
      'onOnChangeDecade'?: (event: CustomEvent) => void;
      'onOnChangeMonth'?: (event: CustomEvent) => void;
      'onOnChangeView'?: (event: CustomEvent) => void;
      'onOnChangeYear'?: (event: CustomEvent) => void;
      'onOnHide'?: (event: CustomEvent) => void;
      'onOnRenderCell'?: (event: CustomEvent) => void;
      'onOnSelect'?: (event: CustomEvent) => void;
      'onOnShow'?: (event: CustomEvent) => void;
      'onlyTimepicker'?: boolean;
      'position'?: string;
      'range'?: boolean;
      'selectOtherMonths'?: boolean;
      'selectOtherYears'?: boolean;
      'showEvent'?: string;
      'showOtherMonths'?: boolean;
      'showOtherYears'?: boolean;
      'startDate'?: Date;
      'timeFormat'?: string;
      'timepicker'?: boolean;
      'todayButton'?: boolean;
      'toggleSelected'?: boolean;
      'view'?: string;
      'weekends'?: Array<number>;
    }
  }

  interface HTMLElementTagNameMap {
    'air-datepicker': HTMLAirDatepickerElement
  }

  interface ElementTagNameMap {
    'air-datepicker': HTMLAirDatepickerElement;
  }
}
declare global { namespace JSX { interface StencilJSX {} } }

export declare function defineCustomElements(window: any): void;