import { Component, OnInit, Input } from '@angular/core';
import { Column } from './column';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent<T> implements OnInit {
  @Input()
  tableColumns: Array<Column> = [];

  @Input()
  dataSource: Array<T> = [];

  displayedColumns: Array<string> = [];

  constructor() {}

  ngOnInit(): void {
    this.displayedColumns = this.tableColumns.map((c) => c.columnDef);
  }
}
