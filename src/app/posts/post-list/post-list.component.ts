import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  @Input() posts=[];
  delete1(a)
  {
    this.posts.splice(a,1);
  }

  constructor() { }

  ngOnInit() {
  }

}