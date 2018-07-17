import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Router } from '@angular/router';
import { Http } from '@angular/http'

@Component({
  selector: 'blog-new',
  styleUrls: ['./blog-new.component.scss'],
  templateUrl: './blog-new.component.html'
})

export class BlogNewComponent{
  title;

  constructor(private apollo: Apollo, private router: Router, private http: Http) {
  }

  ngOnInit() {
    this.title = "Add new blog";
  }

  create(data){

    this.http.post('/api/blog', data)
    .map((response) => response.json())
    .subscribe(res => {
        if(res.status == true){
          this.router.navigate(['/blog']);
        }else{
          alert(res.message);
        }
      }
    );
  }

}
