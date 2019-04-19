import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  // 模块的描述 个人理解
@NgModule({
  declarations: [],
  imports: [
       CommonModule,
       RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
