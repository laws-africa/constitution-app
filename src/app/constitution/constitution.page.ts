import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as Constitution from '../../assets/data/constitution.json';

@Component({
	selector: 'app-constitution',
	templateUrl: './constitution.page.html',
	styleUrls: ['./constitution.page.scss']
})
export class ConstitutionPage implements OnInit, AfterViewInit {
	constitution: any = (Constitution as any).default;
	navigate: any;
	newContent: any;
	@ViewChild('akn') aknView: ElementRef;

	constructor(private sanitized: DomSanitizer) { 
		this.newContent = this.sanitized.bypassSecurityTrustHtml(this.constitution.body);
	}

	ngOnInit() { this.sideMenu(); }

    ngAfterViewInit() {
		// handle clicking on anchors
		this.aknView.nativeElement.querySelectorAll('a[href^="#"]').forEach(a => {
		    a.addEventListener('click', e => {
		        e.preventDefault();
		        this.scroll(e.target.getAttribute('href').slice(1));
			});
		});
	}

	scroll(id) {
		let el = document.getElementById(id);
		el.scrollIntoView();
	}
	
	sideMenu() {
		let menuList = this.constitution.toc.map((toc, i) => {
			return (
				{
					title: toc.title,
					id: toc.id,
					children: toc.children
				}
			)
		});

		this.navigate = menuList;
	}
}
