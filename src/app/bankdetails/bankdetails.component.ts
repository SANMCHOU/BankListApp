import { Component, Injectable, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bankdetails',
  templateUrl: './bankdetails.component.html',
  styleUrls: ['./bankdetails.component.css']
})

@Injectable({
  providedIn: 'root'
})
export class BankdetailsComponent implements OnInit {
  @Input() banksObject: any;
  bankslink: any;
  bank: any;
  icon: any;

  ngOnInit(): void {
    this.bank = this.banksObject.name.toLowerCase();
    if (this.bank.includes('hdfc')) {
      this.bankslink = "https://www.hdfcbank.com/";
      this.icon = "../assets/HDFC.png";
    }
    if (this.bank.includes('hsbc')) {
      this.bankslink = "https://www.hsbc.co.uk/";
      this.icon = "../assets/HSBC.png";
    }
    if (this.bank.includes('federal')) {
      this.bankslink = "https://www.federalbank.co.in/";
      this.icon = "../assets/Federal.png";
    }
    if (this.bank.includes('barclays')) {
      this.bankslink = "https://www.barclays.co.uk/";
      this.icon = "../assets/barclays.jpg";
    }
    if (this.bank.includes('sbi')) {
      this.bankslink = "https://retail.onlinesbi.sbi/personal/";
      this.icon = "../assets/sbi.png";
    }
    if (this.bank.includes('lloyds')) {
      this.bankslink = "https://www.lloydsbank.com/";
      this.icon = "../assets/lloyds.png";
    }
  }

}