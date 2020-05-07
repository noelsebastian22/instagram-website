import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Card } from "./models/card.model";
import { RecPeople } from "./models/rec-people.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  galleryData: Card[];
  recommendedPeople: RecPeople[];
  constructor(private http: HttpClient) {}

  ngOnInit() {
    console.log("data ");
    this.http
      .get<Card[]>("../assets/config/cardData.json")
      .subscribe((resp: Card[]) => (this.galleryData = resp));
    this.http
      .get<RecPeople[]>("../assets/config/recommendedPeople.json")
      .subscribe((resp: RecPeople[]) => {
        this.recommendedPeople = resp;
      });
  }
}
