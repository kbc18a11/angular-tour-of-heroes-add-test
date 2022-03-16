import { CommonModule } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { MessagesComponent } from './messages.component';

describe('MessagesComponent', () => {
  let component: MessagesComponent;
  let fixture: ComponentFixture<MessagesComponent>;

  const testMessages = [
    'HeroService: added hero w/ id=1',
    'HeroService: fetched heroes',
    'HeroService: added hero w/ id=2',
    'HeroService: fetched heroes',
  ]

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MessagesComponent],
      imports: [
        CommonModule
      ]
    })
      .compileComponents();
    fixture = TestBed.createComponent(MessagesComponent);
    component = fixture.componentInstance;
    component.messageService.messages = testMessages;

    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();

    // メッセージ一覧の表時の検証
    for (let i = 0; i < fixture.debugElement.queryAll(By.css('.message')).length; i++) {
      const messageElement = fixture.debugElement.queryAll(By.css('.message'))[i].nativeElement as HTMLDivElement;
      expect(messageElement).toBeTruthy();
      expect(messageElement.textContent).toBe(testMessages[i]);
    }
  });

  it('メッセージのクリア', () => {
    // クリア処理
    const clearButton = fixture.debugElement.query(By.css('.clear')).nativeElement as HTMLButtonElement;
    clearButton.click();
    fixture.detectChanges();

    // 検証
    expect(component.messageService.messages).toEqual([]);
    expect(fixture.debugElement.queryAll(By.css('.message'))).toEqual([]);
  });
});
