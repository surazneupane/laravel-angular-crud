import { Injectable } from '@angular/core';
import {Comment} from '../../components/comments/comment';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as GLOBAL from 'globals';


@Injectable({
  providedIn: 'root'
})
export class CommentService {

  API_URL = GLOBAL.API_URL;

  constructor(private httpClient:HttpClient) { }

  getAllComment():Observable<Comment[]>
  {
   return  this.httpClient.get<Comment[]>(this.API_URL+'comments');
  }

  insertComment(comment:Comment):Observable<Comment>
  {
    return this.httpClient.post<Comment>(this.API_URL+'comments',comment);
  }

  deleteComment(id:number):Observable<Comment>
  {
  return  this.httpClient.delete<Comment>(this.API_URL+'comments/'+id);
  }
}
