import { Component, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {

}

@Component({
  selector: 'player-info-component.component',
  templateUrl: 'player-info-component.component.html',
  styleUrls: ['player-info-component.component.css'],
})
export class PlayerInfoComponentComponent {
  constructor(
    public dialogRef: MatDialogRef<PlayerInfoComponentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}