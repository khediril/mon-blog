import { Component } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'App component';
  posts: Array<Post> = [new Post("post1","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ante orci, rhoncus vitae gravida cursus, pulvinar vulputate lectus. Cras a sapien quam. Cras vel ex arcu. Aenean purus enim, mollis et ante ut, suscipit varius velit. Sed vehicula sed nulla in euismod. Cras tempor fringilla augue eu suscipit. Etiam et leo pharetra, fermentum est ac, auctor ipsum"), 
                           new Post("post2","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ante orci, rhoncus vitae gravida cursus, pulvinar vulputate lectus. Cras a sapien quam. Cras vel ex arcu. Aenean purus enim, mollis et ante ut, suscipit varius velit. Sed vehicula sed nulla in euismod. Cras tempor fringilla augue eu suscipit. Etiam et leo pharetra, fermentum est ac, auctor ipsum"),
                           new Post("post3","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ante orci, rhoncus vitae gravida cursus, pulvinar vulputate lectus. Cras a sapien quam. Cras vel ex arcu. Aenean purus enim, mollis et ante ut, suscipit varius velit. Sed vehicula sed nulla in euismod. Cras tempor fringilla augue eu suscipit. Etiam et leo pharetra, fermentum est ac, auctor ipsum")];
}
