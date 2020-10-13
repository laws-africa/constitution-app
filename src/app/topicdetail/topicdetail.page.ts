import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import * as Data from '../../assets/data/data.json';

@Component({
  selector: 'app-topicdetail',
  templateUrl: './topicdetail.page.html',
  styleUrls: ['./topicdetail.page.scss'],
})
export class TopicdetailPage implements OnInit {
  data: any = (Data as any).default;
  topic: { title: '', summary: '', content: '', cases: []};
  linkedCases: [] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private location: Location) {}

  ngOnInit() {
    console.log(this.navCtrl);
    this.route.params.subscribe(params => {
      this.topic = this.data.topics.find((topic) => topic.id === params.id);

      for (const caseId of this.topic.cases) {
        const linkedCase = this.topic.cases.find((id) => id === caseId);
        this.linkedCases.push(linkedCase);
      }
    });
  }
}
