import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , Validators } from '@angular/forms';
import { ActivatedRoute  as Route , Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.component.html',
  styleUrls: ['./sigin.component.styl']
})
export class SiginComponent implements OnInit {
  validateForm: FormGroup;
  // public router: Router,属于依赖注入，1.内部实现先获取到contructor函数 2.将其toSting；3.解析到参数名称 4.获取其构造函数对象，并调用函数传递进来；
  constructor(private fb: FormBuilder, public router: Router, public location: Location, ) {}
  submitForm(e) {
    e.preventDefault();
    console.log(this.validateForm.controls.userName.value , this.validateForm.controls.password.value);
    // tslint:disable-next-line:forin
    for (const i in this.validateForm.controls) {
      const index = this.validateForm.controls[i].markAsDirty();
      const obj = this.validateForm.controls[i].updateValueAndValidity();
      console.log(obj , index);
    }
  }
  goback() {
      this.location.back();
  }
  forward() {
      this.location.forward();
  }
  navigate() {
      this.router.navigateByUrl('/index');
  }
  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }
}
