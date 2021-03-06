import { Component, Prop, Element, Event, EventEmitter, Method } from '@stencil/core';
// @ts-ignore
import DatePicker from '../../assets/air-datepicker';

@Component({
	tag: 'air-datepicker',
	styleUrl: 'air-datepicker.css'
})
export class AirDatePicker {
	@Prop() classes: string = '';
	@Prop() inline: boolean = false;
	@Prop() language: string = 'en'; // We are shipping English as a default language not Russian
	@Prop() startDate: Date = new Date();
	@Prop() firstDay: string = '';
	@Prop() weekends: Array<number> = [ 6, 0 ];
	@Prop() dateFormat: string = '';
	@Prop() altField: string = '';
	@Prop() altFieldDateFormat: string = '@';
	@Prop() toggleSelected: boolean = true;
	@Prop() keyboardNav: boolean = true;
	@Prop() position: string = 'bottom left';
	@Prop() offset: number = 12;
	@Prop() view: string = 'days';
	@Prop() minView: string = 'days';
	@Prop() showOtherMonths: boolean = true;
	@Prop() selectOtherMonths: boolean = true;
	@Prop() moveToOtherMonthsOnSelect: boolean = true;
	@Prop() showOtherYears: boolean = true;
	@Prop() selectOtherYears: boolean = true;
	@Prop() moveToOtherYearsOnSelect: boolean = true;
	@Prop() minDate: string = '';
	@Prop() maxDate: string = '';
	@Prop() disableNavWhenOutOfRange: boolean = true;
	@Prop() multipleDates: boolean | number = false;
	@Prop() multipleDatesSeparator: string = ';';
	@Prop() range: boolean = false;
	@Prop() todayButton: boolean = false;
	@Prop() clearButton: boolean = false;
	@Prop() showEvent: string = 'focus';
	@Prop() autoClose: boolean = false;
	@Prop() monthsField: string = 'monthsShort';
	@Prop() timepicker: boolean = false;
	@Prop() onlyTimepicker: boolean = false;
	@Prop() dateTimeSeparator: string = ' ';
	@Prop() timeFormat: string = '';
	@Prop() minHours: number = 0;
	@Prop() maxHours: number = 24;
	@Prop() minMinutes: number = 0;
	@Prop() maxMinutes: number = 59;
	@Prop() hoursStep: number = 1;
	@Prop() minutesStep: number = 1;

	@Event() onSelect!: EventEmitter;
	@Event() onShow!: EventEmitter;
	@Event() onHide!: EventEmitter;
	@Event() onChangeMonth!: EventEmitter;
	@Event() onChangeYear!: EventEmitter;
	@Event() onChangeDecade!: EventEmitter;
	@Event() onChangeView!: EventEmitter;
	@Event() onRenderCell!: EventEmitter;

	@Element() element!: HTMLStencilElement;

	private _picker: any;

	componentDidLoad() {
		/**
		 * I dynamically load jQuery into application if it's not yet defined inside global
		 * scope. This eliminates an extra step if you don't have jQuery already and if you
		 * do we will just use yours.
		 */
		this.loadjQuery(() => {
			const $ = (window as any).jQuery;
			DatePicker(window, $);
			this.addEnglishTranslation($);
			this._picker = $(this.element.querySelector('input'))
				.datepicker({
					classes: this.classes,
					inline: this.inline,
					language: this.language,
					startDate: this.startDate,
					firstDay: this.firstDay,
					weekends: this.weekends,
					dateFormat: this.dateFormat,
					altField: this.altField,
					altFieldDateFormat: this.altFieldDateFormat,
					toggleSelected: this.toggleSelected,
					keyboardNav: this.keyboardNav,
					position: this.position,
					offset: this.offset,
					view: this.view,
					minView: this.minView,
					showOtherMonths: this.showOtherMonths,
					selectOtherMonths: this.selectOtherMonths,
					moveToOtherMonthsOnSelect: this.moveToOtherMonthsOnSelect,
					showOtherYears: this.showOtherYears,
					selectOtherYears: this.selectOtherYears,
					moveToOtherYearsOnSelect: this.moveToOtherYearsOnSelect,
					minDate: this.minDate,
					maxDate: this.maxDate,
					disableNavWhenOutOfRange: this.disableNavWhenOutOfRange,
					multipleDates: this.multipleDates,
					multipleDatesSeparator: this.multipleDatesSeparator,
					range: this.range,
					todayButton: this.todayButton,
					clearButton: this.clearButton,
					showEvent: this.showEvent,
					autoClose: this.autoClose,
					monthsField: this.monthsField,
					timepicker: this.timepicker,
					onlyTimepicker: this.onlyTimepicker,
					dateTimeSeparator: this.dateTimeSeparator,
					timeFormat: this.timeFormat,
					minHours: this.minHours,
					maxHours: this.maxHours,
					minMinutes: this.minMinutes,
					maxMinutes: this.maxMinutes,
					hoursStep: this.hoursStep,
					minutesStep: this.minutesStep,
					onSelect: (formattedDate: string, date: Date | Array<Date>, inst: Object) =>
						this.onSelect.emit({ formattedDate, date, inst }),
					onShow: (inst: Object, animationCompleted: boolean) =>
						this.onShow.emit({ inst, animationCompleted }),
					onHide: (inst: Object, animationCompleted: boolean) =>
						this.onHide.emit({ inst, animationCompleted }),
					onChangeMonth: (month: number, year: number) => this.onChangeMonth.emit({ month, year }),
					onChangeYear: (year: number) => this.onChangeYear.emit({ year }),
					onChangeDecade: (decade: number) => this.onChangeDecade.emit({ decade }),
					onChangeView: (view: string) => this.onChangeView.emit({ view }),
					onRenderCell: (date: Date, cellType: string) => this.onRenderCell.emit({ date, cellType })
				})
				.data('datepicker');
		});
	}

	@Method()
	public show() {
		this._picker.show();
	}

	@Method()
	public hide() {
		this._picker.hide();
	}

	@Method()
	public destroy() {
		this._picker.destroy();
	}

	@Method()
	public next() {
		this._picker.next();
	}

	@Method()
	public prev() {
		this._picker.prev();
	}

	@Method()
	public selectDate(date: Date) {
		this._picker.selectDate(date);
	}

	@Method()
	public removeDate(date: Date) {
		this._picker.removeDate(date);
	}

	@Method()
	public clear() {
		this._picker.clear();
	}

	@Method()
	public update(field: string, value: any) {
		this._picker.show(field, value);
	}

	@Method()
	public setView(view: string) {
		this._picker.view = view;
	}

	@Method()
	public setDate(date: Date) {
		this._picker.date = date;
	}

	@Method()
	public getElement(): HTMLElement {
		return this._picker.$el;
	}

	@Method()
	public getSelectedDates(): Array<Date> {
		return this._picker.selectedDates;
	}

	private loadjQuery(callback: () => void) {
		const jQuery = (window as any).jQuery;
		if (!jQuery) {
			const link = 'https://code.jquery.com/jquery-3.3.1.min.js';

			let element = document.createElement('script');
			element.setAttribute('type', 'text/javascript');
			element.setAttribute('src', link);
			element.onload = callback;
			(element as any).onreadystatechange = callback;
			document.head.appendChild(element);
		} else {
			callback();
		}
	}

	private addEnglishTranslation(jQuery: any) {
		jQuery.fn.datepicker.language['en'] = {
			days: [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ],
			daysShort: [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ],
			daysMin: [ 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa' ],
			months: [
				'January',
				'February',
				'March',
				'April',
				'May',
				'June',
				'July',
				'August',
				'September',
				'October',
				'November',
				'December'
			],
			monthsShort: [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ],
			today: 'Today',
			clear: 'Clear',
			dateFormat: 'mm/dd/yyyy',
			timeFormat: 'hh:ii aa',
			firstDay: 0
		};
	}
}
