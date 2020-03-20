import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-bottom-section-header',
  templateUrl: './bottom-section-header.component.html',
  styleUrls: ['./bottom-section-header.component.scss']
})
export class BottomSectionHeaderComponent implements OnInit {

  @Input("title") title: string;
  @Input("prNotif") prNotif: number;
  @Input("dangerNotif") dangerNotif: number;
  constructor() { }

  ngOnInit(): void {
  }

}
