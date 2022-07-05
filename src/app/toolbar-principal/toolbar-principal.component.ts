import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'toolbar-principal',
  templateUrl: './toolbar-principal.component.html',
  styleUrls: ['./toolbar-principal.component.scss'],
})
export class ToolbarPrincipalComponent implements OnInit {
  @Input() title: string;

  constructor() { }

  ngOnInit() {}

}
