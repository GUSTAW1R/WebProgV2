import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Expens } from './expens.model';

@Injectable({
  providedIn: 'root'
})
export class ExpensService {
  selectedExpens: Expens;
  expensList: Expens[];
  url = 'http://localhost:44307/api/Expens';
  constructor(private http: HttpClient) { }
  GetExpenses(): Observable<Expens[]> {
    return this.http.get<Expens[]>(this.url);
  }
  ExpensesExists(ID: number): Observable<Expens> {
    return this.http.get<Expens>(this.url + "/" + ID);
  }
  PostExpenses(Expens: Expens): Observable<Expens> {
    console.log(Expens)
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    this.http.post(this.url, Expens, httpOptions).subscribe(q => console.log(q));
    return this.http.post<Expens>(this.url, Expens, httpOptions);
  }
  PutExpenses(id: number, Expens: Expens): Observable<Expens> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<Expens>(this.url + "/" + id, Expens, httpOptions);
  }
  DeleteExpenses(id: number): Observable<number> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.delete<number>(this.url + "/" + id, httpOptions);
  }
  getResult(text: string): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    const data: any = {
    "text": text
    };
    return this.http.post('http://localhost:44307/api/Search/?text=' + text, <JSON>data, httpOptions)
  }
}
