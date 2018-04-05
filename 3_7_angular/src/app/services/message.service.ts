import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { Message } from '../shared/models/message';

@Injectable()
export class MessageService {
  private API = 'https://us-central1-demoapp-1779c.cloudfunctions.net/v1';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private subject = new Subject();

  get waiting() {
    return this.subject.asObservable();
  }

  constructor(private http: HttpClient) { }

  fetch(cname: string): Observable<Message[]> {
    return this.http.get<Message[]>(`${this.API}/channels/${cname}/messages`);
  }

  post (cname: string, body: string): Observable<Message> {
    return this.http.post<Message>(`${this.API}/channels/${cname}/messages`, {'body': body}, this.httpOptions);
  }

  notify() {
    this.subject.next();
  }
}
