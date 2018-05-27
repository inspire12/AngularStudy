import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {HttpClient} from '@angular/common/http';

// assets/data/book.json
interface IBook {
  bauthor: string;
  bdate: string;
  btranslator: string;
  bpublisher: string;
  btitle: string;
  bprice: number;
  bisbn: string;
  bimgurl: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

    displayedColumns = ['bisbn', 'btitle', 'bauthor', 'bprice'];
  dataSource;
  books: IBook[];
    constructor(private http: HttpClient) {
    this.http.get<IBook[]>('assets/data/book.json')
      .subscribe(res => {
        this.books = res;
        this.dataSource = new MatTableDataSource<IBook>(this.books);
      });
  }

  ngOnInit() {
  }

}
