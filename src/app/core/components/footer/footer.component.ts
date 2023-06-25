import { Component, OnInit } from '@angular/core';
import { AppService } from '@core/service/app.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(
    public appService: AppService,
  ) { }

  ngOnInit(): void { }

}
