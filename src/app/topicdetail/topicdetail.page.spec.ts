import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TopicdetailPage } from './topicdetail.page';

describe('TopicdetailPage', () => {
  let component: TopicdetailPage;
  let fixture: ComponentFixture<TopicdetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicdetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TopicdetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
