import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { IBook } from '../ibook';

@Injectable()
export class HttpSupportService {

  books: IBook[];

  // Client에 의해 선택된 책의 정보 - 초기화
  selectedBook: IBook = {
    bauthor: '',
    bdate: '',
    btranslator: '',
    bpublisher: '',
    btitle: '',
    bprice: 0,
    bisbn: '',
    bimgurl: ''
  };

  constructor(private http: HttpClient) { }

  updateBooks: BehaviorSubject<IBook[]> = new BehaviorSubject<IBook[]>(this.books);

  // selectedBook에 대한 BehaviorSubject 객체 생성
  updateSelectedBook: BehaviorSubject<IBook> = new BehaviorSubject<IBook>(this.selectedBook);

  getJsonData(url: string, name: string, category: string, keyword: string) {
    this.http.get<IBook[]>(`${url}${name}`)
        .subscribe(res => {
           let tmp = null;
           // 도서종류와 검색어를 이용한 도서 데이터 Filtering 시작
           if ( category === 'all' ) {
             tmp = res.filter(function(item, idx, arr) {
               if (item.btitle.includes(keyword)) {
                 return true;
               } else {
                 return false;
               }
             });
           } else if ( category === 'country') {
             tmp = res.filter(function(item, idx, arr) {
               if(item.btitle.includes(keyword)) {
                 return true;
               } else {
                 return false;
               }
             }).filter(function(item, idx, arr) {
               if (item.btranslator === '') {
                 return true;
               } else {
                 return false;
               }
             });
           } else if ( category === 'foreign') {
             tmp = res.filter(function(item, idx, arr) {
               if (item.btitle.includes(keyword)) {
                 return true;
               } else {
                 return false;
               }
             }).filter(function(item, idx, arr) {
               if (item.btranslator !== '') {
                 return true;
               } else {
                 return false;
               }
             });
           }
          // 도서종류와 검색어를 이용한 도서 데이터 Filtering 끝
          this.updateBooks.next(tmp);
          //this.books = tmp;
          //console.log ( this.books );
        });
  }

  getBooks(): IBook[] {
    return this.books;
  }
}
