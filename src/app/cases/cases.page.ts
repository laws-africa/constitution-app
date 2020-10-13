import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import * as Data from '../../assets/data/data.json';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.page.html',
  styleUrls: ['./cases.page.scss'],
})
export class CasesPage implements OnInit {
  data: any = (Data as any).default;
  cases: [];

  constructor(private router: Router, private navCtrl: NavController) { }

  ngOnInit() {
    this.cases = this.data.cases;
  }

  navigateToDetails(id: any) {
    this.navCtrl.navigateForward('tabs/cases/detail/' + id);
  }
}
