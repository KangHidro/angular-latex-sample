import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LatexViewerComponent } from './latex-viewer/latex-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

    LatexViewerComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
