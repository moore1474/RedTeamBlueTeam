import { Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {

}

@Component({
  selector: 'app-player-info-component',
  templateUrl: './player-info-component.component.html',
  styleUrls: ['./player-info-component.component.css']
})
export class PlayerInfoComponentComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(PlayerInfoComponentComponentDialog, {
      width: '250px',
      data: {}
    });
}
}

export class PlayerInfoComponentComponentDialog {
  constructor(
    public dialogRef: MatDialogRef<PlayerInfoComponentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}