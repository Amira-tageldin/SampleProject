import { Component, OnInit } from '@angular/core';
import { Table } from '../../data/Table';
import { TableService } from './table.service';




@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'age'];
  dataSource: Table[];

  constructor(private tservice: TableService) { }

  ngOnInit() {
    this
      .tservice
      .getCharacters()
      .subscribe((data: Table[]) => {
        this.dataSource = data;
      });
  }

}
