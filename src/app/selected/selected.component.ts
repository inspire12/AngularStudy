import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-selected',
  templateUrl: './selected.component.html',
  styleUrls: ['./selected.component.css']
})
export class SelectedComponent implements OnInit {
  listOption: string[];
  constructor() {

  }
  // constructor(private http: HttpClient) {
  //   this.http.get< IBook[] > ('assets/data/book.json').subscribe(res => this.books = res);
  // }

  ngOnInit() {
    this.listOption = ['book', 'book2', 'book3'];
  }

}
