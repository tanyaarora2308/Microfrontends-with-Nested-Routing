import { Component, OnInit } from '@angular/core';
import { PostService } from '.././services/post.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  posts: any;

  constructor(private service: PostService) {}

  ngOnInit() {
    this.service.getPosts().subscribe((response) => {
      this.posts = response;
    });
  }
}
