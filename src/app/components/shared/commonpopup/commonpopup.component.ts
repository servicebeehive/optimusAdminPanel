import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../../admin/withdraw-approval/withdraw-approval.component';

@Component({
  selector: 'app-commonpopup',
  templateUrl: './commonpopup.component.html',
  styleUrls: ['./commonpopup.component.scss']
})
export class CommonpopupComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CommonpopupComponent>,@Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
    console.log(this.data.animal)
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
