import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Router } from '@angular/router';
import { Http } from '@angular/http'

@Component({
  selector: 'test',
  styleUrls: ['./test.component.scss'],
  templateUrl: './test.component.html'
})

export class TestComponent{
  title;

  constructor(private apollo: Apollo, private router: Router, private http: Http) {
  }

  ngOnInit() {
    this.title = "gurpreet singh";
  }

  onclickSubmit(form){
      console.log(form);

      this.http.post('/api/test', form)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/test', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
