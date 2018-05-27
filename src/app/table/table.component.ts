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
  isClick = [];
  @Input() bookCategory: string;

  constructor(private http: HttpClient) {
    this.ngCallJson('book');
  }
  ngTest(): void {
    console.log('ngtest');
  }

  ngShowParagraph (index: number) {
    this.isClick[index] = (this.isClick[index] + 1) % 2;
    console.log(this.isClick);
  }

  ngClickParagraph (paragraph: string, index: number, pIndex: number) {
    console.log(paragraph, index, pIndex);
    const node = document.createElement("div");
    const textNode = document.createTextNode(paragraph);
    node.appendChild(textNode);
    const el: HTMLElement = document.getElementById('appendCanvas');
    el.appendChild(node);

    return paragraph;
  }

  ngClickCanvasButton() {
    console.log('ngClickButton');
  }

  ngCallJson(bookName: string) {
    console.log('json2');
    this.http.get<IBook[]>('assets/data/' + bookName + '.json')
      .subscribe(res => {
        res.sort((a, b) => { // 오름차순 date
          if (a.bdate === b.bdate) { return 0; } return a.bdate > b.bdate ? 1 : -1;
        });
        this.books = res;
        // click function
        this.isClick = [];
        for (let i = 0; i < res.length; i++) {
            this.isClick.push(0);
        }
        this.dataSource = new MatTableDataSource<IBook>(this.books);
      });
  }
  ngOnInit() {
    this.ngCallJson('book');
  }

}
