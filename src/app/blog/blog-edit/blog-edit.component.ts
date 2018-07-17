import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2'
@Component({
  selector: 'blog-edit',
  styleUrls: ['./blog-edit.component.scss'],
  templateUrl: './blog-edit.component.html'
})

export class BlogEditComponent{
  title;
  blog_id;
  form: FormGroup;
  successalert: '';
  erroralert: '';

  constructor(
    private apollo: Apollo, 
    private router: Router, 
    private http: Http, 
    private activatedRoute: ActivatedRoute,
    formBuilder: FormBuilder,
  ) {
      this.form = formBuilder.group({
        title: [''],
        content: ['']
      });
  }

  ngOnInit() {
    this.title = "Edit blog";

    this.activatedRoute.params.subscribe(paramsId => {
      this.blog_id = paramsId.id;
    });

    this.http.get("/api/blog/edit/"+this.blog_id).
      map((response) => response.json()).
      subscribe((data) => {
        console.log(data);

        if(data.status == true){
          this.form.setValue({title: data.data.title, content: data.data.content});
        }else{
          return false;
        }
        
    })

  }

  update(){
    console.log(this.form.value);

    var data = {
      title: this.form.value.title,
      content: this.form.value.content
    }

    this.http.post("/api/blog/edit/"+this.blog_id, data)
    .map((response) => response.json())
    .subscribe(res => {
        console.log(res);
        this.successalert = res.message;
        Swal('Success', res.message, 'success')
      }, (err) => {
        console.log(err);
        this.erroralert = err;
        Swal('Oops..', err, 'error')
      }
    )


  }

  // create(data){
  //   console.log(data);

  //   this.http.post('/api/blog', data)
  //     .subscribe(res => {
  //         let id = res['_id'];
  //         this.router.navigate(['/test']);
  //       }, (err) => {
  //         console.log(err);
  //       }
  //     );
  // }

}
