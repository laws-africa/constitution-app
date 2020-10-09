import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Data from "../../assets/data/data.json"

@Component({
  selector: 'app-topics',
  templateUrl: './topics.page.html',
  styleUrls: ['./topics.page.scss'],
})
export class TopicsPage implements OnInit {
  data: any = (Data as any).default;
  topics: [];
  initialTopics = [];
  
  constructor(private router: Router) { }

  ngOnInit() {
    this.initialTopics = this.data.topics.slice(0, 10);
    this.topics = this.data.topics.slice(10, this.data.topics.length);;
  }

  navigateToDetails(id: any) {
    this.router.navigateByUrl('tabs/topics/detail/' + id);
  }
}
