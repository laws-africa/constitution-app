import { Component, OnInit } from '@angular/core';
import * as Constitution from '../../assets/data/constitution.json';
import * as TOC from '../../assets/data/toc.json';

@Component({
	selector: 'app-constitution',
	templateUrl: './constitution.page.html',
	styleUrls: ['./constitution.page.scss']
})
export class ConstitutionPage implements OnInit {
	toc: any = (TOC as any).default;
	constitution: any = (Constitution as any).default;
	navigate: any;

	constructor() {
		this.sideMenu();
	}

	ngOnInit() { }

	sideMenu() {
		let menuList = TOC.toc.map((menu, i) => {
			return (
				{
					title: menu.title,
					url: menu.url
					// icon  : "home"
				}
			)
		});

		this.navigate = menuList;
	}
}
