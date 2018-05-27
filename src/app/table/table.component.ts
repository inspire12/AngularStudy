import {Component, Input, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {HttpClient} from '@angular/common/http';
import {IBook} from '../ibook';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  displayedColumns = ['bisbn', 'btitle', 'bauthor', 'bprice'];
  dataSource;
  books: IBook[];
  listOption = ['book', 'book2', 'book3'];
  @Input() bookCategory: string;

  constructor(private http: HttpClient) {
    this.ngCallJson('book');
  }
  ngTest(): void {
    console.log('ngtest');
  }

  ngCallJson(bookName: string) {
    if (bookName === undefined) {
      bookName = 'book';
    }
    this.http.get<IBook[]>('assets/data/' + bookName + '.json')
      .subscribe(res => {
        this.books = res.sort(function (a, b){
          return (a.bdate  < b.bdate) ? -1 : (a.bdate > b.bdate) ? 1 : 0;
        });
        this.dataSource = new MatTableDataSource<IBook>(this.books);
      });
  }

  ngCallJson2(bookName: string) {
    console.log('json2');
    this.http.get<IBook[]>('assets/data/' + bookName + '.json')
      .subscribe(res => {
        this.books = res;
        this.dataSource = new MatTableDataSource<IBook>(this.books);
      });
  }
  ngOnInit() {
    this.ngCallJson2('book');
  }

}
