import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'blog-list',
  styleUrls: ['./blog-list.component.scss'],
  templateUrl: './blog-list.component.html'
})

export class BlogListComponent{
  title;
  blogs;

  constructor(private apollo: Apollo, private router: Router, private http: Http) {
  }

  ngOnInit() {
    this.title = "Blog List";

    this.bloglist();

  }

  bloglist(){

    this.http.get("/api/blog").
      map((response) => response.json()).
      subscribe((data) => {
        this.blogs = data;
    })
  }

  deleteBlog(id){
    this.http.delete("/api/blog/delete/"+id)
    .map((response) => response.json())
    .subscribe((data) => {
        if(data.status == true){
          this.bloglist();
        }else{
          alert(data.err);
        }
    })
  }

}
