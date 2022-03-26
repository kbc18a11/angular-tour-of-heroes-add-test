import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { HeroSearchComponent } from './hero-search.component';
import { HeroService } from '../hero.service';
import { HEROES } from '../mock-heroes';

describe('HeroSearchComponent', () => {
  let component: HeroSearchComponent;
  let fixture: ComponentFixture<HeroSearchComponent>;
  let heroService;
  let getHeroesSpy: jasmine.Spy;

  beforeEach(waitForAsync(() => {
    heroService = jasmine.createSpyObj('HeroService', ['getHeroes']);
    getHeroesSpy = heroService.getHeroes.and.returnValue(of(HEROES));
    TestBed
      .configureTestingModule({
        declarations: [HeroSearchComponent, HeroSearchComponent],
        imports: [RouterTestingModule.withRoutes([])],
        providers: [{ provide: HeroService, useValue: heroService }]
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
  });
});
