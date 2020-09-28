import { Component, OnInit } from '@angular/core';
import * as Topics from "../../assets/data/topics.json"

@Component({
  selector: 'app-topics',
  templateUrl: './topics.page.html',
  styleUrls: ['./topics.page.scss'],
})
export class TopicsPage implements OnInit {
  topics: any = (Topics as any).default;

  constructor() { }

  ngOnInit() {
  }

}
