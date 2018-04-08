import { Component, OnInit , Input} from '@angular/core';
import { Post } from '../post';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  @Input() posts : Array<Post>;
 /* post:Post = {
  	           title:'test2',
               content : 'test2',
               loveIts:0,
               created_at:new Date()};*/

  
  constructor() { }

  ngOnInit() {
  }

}
