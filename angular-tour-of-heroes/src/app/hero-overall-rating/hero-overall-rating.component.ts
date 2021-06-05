import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-overall-rating',
  templateUrl: './hero-overall-rating.component.html',
  styleUrls: ['./hero-overall-rating.component.css']
})
export class HeroOverallRatingComponent implements OnInit {
  @Input() set hero(value: Hero) { this.calculateOverallRating(value) }
  overallRating?: number;
    calculateOverallRating(hero: Hero): void {
    this.overallRating = hero.powerStats.combat + hero.powerStats.speed + hero.powerStats.intelligence + hero.powerStats.strength;
    console.log(this.overallRating)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
