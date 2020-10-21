import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import * as Data from '../../../assets/data/data.json';
import { filter, pairwise } from 'rxjs/operators';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  data: any = (Data as any).default;
  topic: { title: '', summary: '', content: '', cases: []};
  linkedCases: any[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private location: Location) {}

  ngOnInit() {
    console.log(this.router.getCurrentNavigation());

    this.route.params.subscribe(params => {
      this.topic = this.data.topics.find((topic) => topic.id === params.id);

      for (const caseId of this.topic.cases) {
        const linkedCase = this.data.cases.find((c) => c.id === caseId);
        this.linkedCases.push(linkedCase);
      }
    });
  }

  previous() {
    this.location.back();
  }
}
