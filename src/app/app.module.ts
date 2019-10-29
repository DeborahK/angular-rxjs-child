import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { Todo1Component } from "./todos/todo1.component";
import { Todo2Component } from "./todos/todo2.component";

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, Todo1Component, Todo2Component],
  bootstrap: [AppComponent]
})
export class AppModule {}
