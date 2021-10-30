import { SelectionModel } from "@angular/cdk/collections";
import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
export interface PeriodicElement {
  planname: string;
  no: number;
  status: boolean;
  contractmonth: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { no: 1, planname: "Silver", status: false, contractmonth: "22/09/2021" },
  { no: 2, planname: "Gold", status: true, contractmonth: "22/09/2021" },
  { no: 3, planname: "Diamond", status: true, contractmonth: "22/09/2021" },
];
@Component({
  selector: "app-posteddatatable",
  templateUrl: "./posteddatatable.component.html",
  styleUrls: ["./posteddatatable.component.scss"],
})
export class PosteddatatableComponent implements OnInit {
  public checked: boolean = true;
  constructor() {}

  ngOnInit(): void {}

  displayedColumns: string[] = [
    "no",
    "name",
    "ContractMonth",
    "status",
    "symbol",
  ];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? "deselect" : "select"} all`;
    }
    return `${this.selection.isSelected(row) ? "deselect" : "select"} row ${
      row.no + 1
    }`;
  }
}
