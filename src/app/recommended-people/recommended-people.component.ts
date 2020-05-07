import { Component, OnInit, Input } from "@angular/core";
import { RecPeople } from "../models/rec-people.model";

@Component({
  selector: "recommended-people",
  templateUrl: "recommended-people.component.html",
  styleUrls: ["recommended-people.component.scss"],
})
export class RecommendedPeopleComponent implements OnInit {
  @Input() peopleData: RecPeople[];
  constructor() {}
  ngOnInit() {}
}
