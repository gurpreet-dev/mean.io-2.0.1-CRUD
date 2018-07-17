import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Router } from '@angular/router';
import { Http } from '@angular/http'

@Component({
  selector: 'blog',
  styleUrls: ['./blog.component.scss'],
  templateUrl: './blog.component.html'
})

export class BlogComponent{
  title;

  constructor(private apollo: Apollo, private router: Router, private http: Http) {
  }

  ngOnInit() {
    this.title = "gurpreet singh";
  }

}
