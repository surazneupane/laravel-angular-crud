import { Component, OnInit } from '@angular/core';
import { CommentService } from 'src/app/services/comment/comment.service';
import {Comment} from '../comments/comment';
import {MessageService} from '../../services/message/message.service';
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  constructor(private commentService:CommentService,private messageService :MessageService) { }

  comments : Comment[]=[];
  text:any;
  author:any;
  ngOnInit(): void {
    this.getAllComment();
  }

  getAllComment()
  {
    this.commentService.getAllComment().subscribe(commentResponcse=>{
      this.comments = commentResponcse;
      this.messageService.addMessage('All Comments Fetched','success');
    });
  }


  insertComment()
  {
      const comment = new Comment(this.text,this.author);
      this.commentService.insertComment(comment).subscribe(res=>{
        this.comments.push(res);
        this.messageService.addMessage('Comment Added Successfully','success');
      });
    }


    deleteComment(comment:Comment)
    {

      this.commentService.deleteComment(comment.id).subscribe(res=>{
        this.comments = this.comments.filter(c=>c.id !==res.id);
        this.messageService.addMessage('Comment Deleted Successfully','danger');
      });
    }
}
