import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageFeedComponent } from './message-feed.component';

describe('MessageFeedComponent', () => {
  let component: MessageFeedComponent;
  let fixture: ComponentFixture<MessageFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
