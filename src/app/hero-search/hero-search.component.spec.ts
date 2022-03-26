import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, Subject } from 'rxjs';

import { HeroSearchComponent } from './hero-search.component';
import { CommonModule } from '@angular/common';
import { Hero } from '../hero';

describe('HeroSearchComponent', () => {
  let component: HeroSearchComponent;
  let fixture: ComponentFixture<HeroSearchComponent>;
  let testHeroes$!: Observable<Hero[]>;

  beforeEach(waitForAsync(() => {
    spyOn(Subject.prototype, 'pipe')
      .and.returnValue(testHeroes$);

    TestBed
      .configureTestingModule({
        declarations: [HeroSearchComponent],
        imports: [RouterTestingModule.withRoutes([]), CommonModule],
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
    expect(Subject.prototype.pipe).toHaveBeenCalled();
  });
});
