import { Component, OnInit, Input } from "@angular/core";
import { RecPeople } from "src/app/models/rec-people.model";

@Component({
  selector: "app-people",
  templateUrl: "people.component.html",
  styleUrls: ["people.component.scss"],
})
export class PeopleComponent implements OnInit {
  @Input() peopleData: RecPeople;
  constructor() {}
  ngOnInit() {}
  public addToggle(peopleData: RecPeople): void {
    peopleData.added = !peopleData.added;
  }
}
