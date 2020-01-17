import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FirstTestPage } from './first-test.page';

describe('FirstTestPage', () => {
  let component: FirstTestPage;
  let fixture: ComponentFixture<FirstTestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstTestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FirstTestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
