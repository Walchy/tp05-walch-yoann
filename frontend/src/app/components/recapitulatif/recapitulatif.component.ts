import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Client} from "../../../../shared/models/Client";
import {HttpService} from "../../service/http.service";

@Component({
  selector: 'app-recapitulatif',
  templateUrl: './recapitulatif.component.html',
  styleUrls: ['./recapitulatif.component.scss']
})
export class RecapitulatifComponent implements OnInit {
  public client: Client;

  constructor(private route: ActivatedRoute, private httpService: HttpService) {}

  ngOnInit(): void {
    // this.route.queryParams.subscribe(params => {
    //   this.client = params as Client;
    // });

    this.httpService.GetClientData(this.client);
  }
}
