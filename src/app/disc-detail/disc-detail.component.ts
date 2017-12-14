import 'rxjs/add/operator/switchMap';
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { Disc }        from '../models/disc';
import { DiscService } from '../services/disc.service';

@Component({
  selector: 'disc-detail',
  templateUrl: './disc-detail.component.html',
  styleUrls: ['./disc-detail.component.scss']
})


export class DiscDetailComponent implements OnInit {
  disc: Disc;

  constructor(
    private DiscService: DiscService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.DiscService.getDisc(+params.get('id')))
      .subscribe(disc => this.disc = disc);

  }
/*
  save(): void {
    this.DiscService.update(this.disc)
      .then(() => this.goBack());
  }
*/
  goBack(): void {
    this.location.back();
  }
}
