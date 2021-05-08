import { Component } from '@angular/core';

import { Column } from './components/table/column';
import { Element } from './element';
import { Employee } from './employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tableColumns: Array<Column> = [
    { columnDef: 'position', header: 'Position', cell: (element: Record<string, any>) => `${element['position']}` },
    { columnDef: 'name', header: 'Name', cell: (element: Record<string, any>) => `${element['name']}`, isLink: true, url: 'abc'},
    { columnDef: 'weight', header: 'Weight', cell: (element: Record<string, any>) => `${element['weight']}` },
    { columnDef: 'symbol', header: 'Symbol', cell: (element: Record<string, any>) => `${element['symbol']}` },
  ];

  dataSource: Array<Element> = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  ];
  
  anotherTableColumns: Array<Column> = [
    { columnDef: 'name', header: 'Name', cell: (element: Record<string, any>) => `${element['name']}` },
    { columnDef: 'role', header: 'Role', cell: (element: Record<string, any>) => `${element['role']}` },
    { columnDef: 'skills', header: 'Skills', cell: (element: Record<string, any>) => `${element['skills']}` },
  ];

  anotherDataSource: Array<Employee> = [
    { name: 'John', role: 'Fullstack Developer', skills: 'Angular, Typescript, React' },
    { name: 'Mile', role: 'Java Developer', skills: 'Java' },
    { name: 'Peter', role: 'DevOps', skills: 'AWS, GCP' }
  ]
}
