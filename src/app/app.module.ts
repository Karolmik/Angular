import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgxSnakeModule } from 'ngx-snake';
import { IntroPageComponent } from './intro-page/intro-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GamePageComponent } from './game-page/game-page.component';
import { HttpClientModule } from '@angular/common/http';
import { SortDataPipe } from './sort-data.pipe';
@NgModule({
  declarations: [
    AppComponent,
    IntroPageComponent,
    GamePageComponent,
    SortDataPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'login', component: IntroPageComponent },
      { path: 'game/:color', component: GamePageComponent },
      { path: '**', redirectTo: 'login' },
    ]),
    NgxSnakeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
