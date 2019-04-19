import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// 当form表单加FormGroup属性时报错 Can't bind to 'formGroup' since it isn't a known property of 'form'
// 导入ReactiveFormsModule

// 模板
import { MyCompComponent } from './my-comp/my-comp.component';
import { HomeModuleComponent } from './home-module/home-module.component';
import { SiginComponent } from './sigin/sigin.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // http
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';

// ** 配置 angular i18n **//
// import { registerLocaleData } from '@angular/common';
// import zh from '@angular/common/locales/zh';
// registerLocaleData(zh);
@NgModule({
  declarations: [
    AppComponent,
    SiginComponent,
    MyCompComponent,
    HomeModuleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    ReactiveFormsModule
  ],
  // providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
