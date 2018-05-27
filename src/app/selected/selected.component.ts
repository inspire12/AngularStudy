import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
  selector: 'app-selected',
  templateUrl: './selected.component.html',
  styleUrls: ['./selected.component.css']
})
export class SelectedComponent implements OnInit {
  books: IBook[];
  listOption: string[];
  constructor() {

  }
  // constructor(private http: HttpClient) {
  //   this.http.get< IBook[] > ('assets/data/book.json').subscribe(res => this.books = res);
  // }

  ngOnInit() {
    this.listOption = []
    this.listOption.push('카일 루든(Kyle Loudon)');
    this.listOption.push('권기경, 박용우');
  }

}
