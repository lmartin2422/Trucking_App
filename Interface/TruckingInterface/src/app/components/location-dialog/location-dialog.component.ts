import { Component, Inject } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-location-dialog',
  // templateUrl: './location-dialog.component.html',
  // styleUrls: ['./location-dialog.component.css']
  template: `
  <h2 mat-dialog-title>Add a new location</h2>
  <mat-dialog-content>
    <!-- Your form or input field goes here -->
    <mat-form-field>
      <input matInput placeholder="Address">
      <input matInput placeholder="City">
      <input matInput placeholder="State">
      <input matInput placeholder="Zip Code">
    </mat-form-field>
  </mat-dialog-content>
  <mat-dialog-actions>
    <button mat-button (click)="onNoClick()">Cancel</button>
    <button mat-button [mat-dialog-close]="data" cdkFocusInitial>Add</button>
  </mat-dialog-actions>
  `
})
export class LocationDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<LocationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  
}
