import { Component, OnInit } from '@angular/core';
import * as Help from "../../assets/data/help.json"

@Component({
  selector: 'app-help',
  templateUrl: './help.page.html',
  styleUrls: ['./help.page.scss'],
})
export class HelpPage implements OnInit {
  help: any = (Help as any).default;
  constructor() { }

  ngOnInit() {
  }

}
