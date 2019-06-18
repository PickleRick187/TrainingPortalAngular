import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserComponent } from "./user/user.component";
import { RegistrationComponent } from "./user/registration/registration.component";
import { HomeComponent, HomeComponent } from "./home/home.component";
import { CoursesComponent } from "./courses/courses.component";

import { ProgrammingComponent } from "./courses/programming/programming.component";
import { CsharpProgrammingComponent } from "./courses/programming/csharp-programming/csharp-programming.component";
import { JavaComponent } from "./courses/programming/java/java.component";
import { CplusComponent } from "./courses/programming/cplus/cplus.component";
import { AndroidComponent } from "./courses/programming/android/android.component";
import { PythonComponent } from "./courses/programming/python/python.component";
import { VbComponent } from "./courses/programming/vb/vb.component";

import { WebdesignComponent } from "./courses/webdesign/webdesign.component";
import { HtmlComponent } from "./courses/webdesign/html/html.component";

import { CssComponent } from "./courses/webdesign/css/css.component";
import { JavascriptComponent } from "./courses/webdesign/javascript/javascript.component";
import { PhpComponent } from "./courses/webdesign/php/php.component";
import { WordpressComponent } from "./courses/webdesign/wordpress/wordpress.component";
import { AboutEohtrainingComponent } from "./home/about-eohtraining/about-eohtraining.component";



const routes: Routes = [
    {
      path: "home", component: HomeComponent,
    children: [
      {
        path: 'about-eoh-training', component: AboutEohtrainingComponent
      }
    ]
  },
  {
    path: "courses",
    component: CoursesComponent,
    children: [
          {
           path: "programming",
          component: ProgrammingComponent 
          },
          {
            path: "csharp-programming",
            component: CsharpProgrammingComponent
          },
          {
            path: "java",
            component: JavaComponent
          },
          {
            path: "android",
            component: AndroidComponent
          },
          {
            path: "cplusplus",
            component: CplusComponent
          },
          {
            path: "python",
            component: PythonComponent
          },
          {
            path: "vb",
            component: VbComponent
          },
          {
            path: 'webdesign',
            component: WebdesignComponent
          },
          {
            path: "html",
            component: HtmlComponent
          },
          {
            path: "css",
            component: CssComponent
          },
          {
            path: "javascript",
            component: JavascriptComponent
          },
          {
            path: "php",
            component: PhpComponent
          },
          {
            path: 'wordpress',
            component: WordpressComponent
          }
    ]
  },
  {
    path: "user",
    component: UserComponent,
    children: [{ path: "registration", component: RegistrationComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
