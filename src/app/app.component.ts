import { Component, OnInit } from '@angular/core';
import { BanksListService } from './banks-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'BankListApp';
  banksList: any;
  StatusName = '';
  displayData = [{}];
  skip: number = 0;
  limit: number = 5;
  btnhide: boolean = false;
  bankListRes: any;

  constructor(private banksListService: BanksListService) { }

  ngOnInit() {
    this.getdetails('pageLoad', null, null);
  }

  getdetails(load: string, skip: number | null, limit: number | null) {
    this.banksList = this.banksListService.GetBankDetails();
    this.banksList.subscribe((res: any) => {
      res.sort((a: { name: string; }, b: { name: string; }) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
      for (let c of res) {
        this.banksListService.GetCountryName(c.countryId).subscribe((ress: any) => {
          c.countryName = ress.name;
        });
      }
      if (load == 'pageLoad') {
        this.displayData = res.slice(0, 5);
        this.btnhide = this.displayData.length <= 5 ? true : false;
      }
      else {
        this.displayData = res.slice(skip, limit);
        console.log(this.displayData.length);
        console.log(res.length);
        this.btnhide = (this.displayData.length != res.length) ? true : false;
      }
    });
  }

  loadMore(skip: number, limit: number) {
    this.skip = this.skip + skip;
    this.limit = this.limit + limit;
    this.bankListRes = this.getdetails('loadMore', this.skip, this.limit);
  }
}
