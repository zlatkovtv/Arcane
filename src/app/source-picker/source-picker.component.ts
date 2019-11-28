import { Component, Input, OnInit, Inject } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material';

@Component({
	selector: 'app-source-picker',
	templateUrl: './source-picker.component.html',
	styleUrls: ['./source-picker.component.scss']
})
export class SourcePickerComponent implements OnInit {
	constructor(
		private _bottomSheetRef: MatBottomSheetRef<SourcePickerComponent>,
		@Inject(MAT_BOTTOM_SHEET_DATA) public sources: any[]) { }

	ngOnInit(): void {
		console.log({sources: this.sources});
	}

	pickSource(source: any): void {
		this._bottomSheetRef.dismiss(source);
		event.preventDefault();
	}
}
