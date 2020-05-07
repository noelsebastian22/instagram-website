import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CardComponent } from "./card/card.component";
import { HttpClientModule } from "@angular/common/http";
import { RecommendedPeopleComponent } from "./recommended-people/recommended-people.component";
import { PeopleComponent } from "./recommended-people/people/people.component";

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    RecommendedPeopleComponent,
    PeopleComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
