import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-power-stats',
  templateUrl: './hero-power-stats.component.html',
  styleUrls: ['./hero-power-stats.component.css']
})
export class HeroPowerStatsComponent implements OnInit {
  @Input() hero?: Hero;
  constructor() { }

  ngOnInit(): void {
  }

}
