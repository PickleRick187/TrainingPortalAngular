import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { UserService } from './shared/user.service';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { GridSlideComponent } from './home/grid-slide/grid-slide.component';
import { BgSlideComponent } from './home/bg-slide/bg-slide.component';
import { FooterComponent } from './home/footer/footer.component';
import { TryfadeComponent } from './home/tryfade/tryfade.component';

import { CoursesComponent } from './courses/courses.component';
import { JavaComponent } from './courses/programming/java/java.component';
import { AndroidComponent } from './courses/programming/android/android.component';
import { CplusComponent } from './courses/programming/cplus/cplus.component';
import { PythonComponent } from './courses/programming/python/python.component';
import { VbComponent } from './courses/programming/vb/vb.component';
import { CsharpProgrammingComponent } from './courses/programming/csharp-programming/csharp-programming.component';
import { ProgrammingComponent } from './courses/programming/programming.component';
import { WebdesignComponent } from './courses/webdesign/webdesign.component';
import { HtmlComponent } from './courses/webdesign/html/html.component';
import { CssComponent } from './courses/webdesign/css/css.component';
import { JavascriptComponent } from './courses/webdesign/javascript/javascript.component';
import { PhpComponent } from './courses/webdesign/php/php.component';
import { WordpressComponent } from './courses/webdesign/wordpress/wordpress.component';
import { AboutEohtrainingComponent } from './home/about-eohtraining/about-eohtraining.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RegistrationComponent,
    HomeComponent,
    NavbarComponent,
    GridSlideComponent,
    BgSlideComponent,
    FooterComponent,
    TryfadeComponent,
    CoursesComponent,
    JavaComponent,
    AndroidComponent,
    CplusComponent,
    PythonComponent,
    VbComponent,
    CsharpProgrammingComponent,
    ProgrammingComponent,
    WebdesignComponent,
    HtmlComponent,
    CssComponent,
    JavascriptComponent,
    PhpComponent,
    WordpressComponent,
    AboutEohtrainingComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      progressBar: true
    }
    )
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule { }
