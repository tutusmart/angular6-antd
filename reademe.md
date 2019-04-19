##1.如何开始
1.创建项目;
- 全局安装angular
```js
    npm install -g @angular/cli
```
- 新建项目
```js
  ng new angular-tour-of-heroes;
  cd angular-tour-of-heroes
  //然后输入命令 查看angular版本信息:
  ng --version
```
- 开始（监听）项目 （这个命令以后会常用）：
```js
    ng serve --open;
    //恭喜你，现在你已经可以输出自己的“hello，world”了。
```

## 2.常用命令
1.打开项目
```js
    ng serve --open
```
2.创建commponent
```js
    ng generate component componentName
```
3.创建service
```js
    ng generate service servicenName --module=app
```
4.创建路由
```js
    ng generate module app-routing --flat --module=app
```
5.启动或开始
```js
    ng serve --open
    ng serve --port 0 --open
```
6.发布
```js
    ng build --prod --base-href ../GBmono/
```
## 3.路由
1.创建一个简单路由;
- Add the AppRoutingModule
```js
    ng generate module app-routing --flat --module=app;
```
>app-routing
```js
import { RouterModule, Routes } from '@angular/router';
import { MyCompComponent } from './my-comp/my-comp.component';
import { SiginComponent } from './sigin/sigin.component';
import { HomeModuleComponent } from './home-module/home-module.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/sigin',
    pathMatch: 'full'// 针对控的path 必须指定full;
  },
  {
    path: 'sigin',
    component: SiginComponent,
  },
  {
    path: 'index',
    component: MyCompComponent,
  },
  {
    path: 'home',
    component: HomeModuleComponent,
  }
];

@NgModule({
  declarations: [],
  imports: [
       CommonModule,
       RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```
2.所有在组建中使用的路由必须在app.module中注册使用;
>app.module.ts
```js
import { MyCompComponent } from './my-comp/my-comp.component';
import { HomeModuleComponent } from './home-module/home-module.component';
import { SiginComponent } from './sigin/sigin.component';

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
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
```




