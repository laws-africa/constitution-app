import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import * as Data from '../../assets/data/data.json';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.page.html',
  styleUrls: ['./topics.page.scss'],
})
export class TopicsPage implements OnInit {
  data: any = (Data as any).default;
  topics: [];

  constructor(private router: Router, private navCtrl: NavController) { }

  ngOnInit() {
    this.topics = this.data.topics;
  }
}
