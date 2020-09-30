import { Component, OnInit } from '@angular/core';
import * as Data from "../../assets/data/data.json"

@Component({
  selector: 'app-topics',
  templateUrl: './topics.page.html',
  styleUrls: ['./topics.page.scss'],
})
export class TopicsPage implements OnInit {
  data: any = (Data as any).default;
  topics: [];
  constructor() { }

  ngOnInit() {
    this.topics = this.data.topics;
  }

}
