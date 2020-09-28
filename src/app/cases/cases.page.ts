import { Component, OnInit } from '@angular/core';
import * as Cases from "../../assets/data/cases.json"

@Component({
  selector: 'app-cases',
  templateUrl: './cases.page.html',
  styleUrls: ['./cases.page.scss'],
})
export class CasesPage implements OnInit {
  cases: any = (Cases as any).default;

  constructor() { }

  ngOnInit() {
  }

}
