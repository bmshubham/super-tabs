import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SuperTabs, SuperTabsController } from 'ionic2-super-tabs';

import { FirstPage } from './../first/first';
import { SecondPage } from '../second/second';
import { ThirdPage } from '../third/third';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(SuperTabs) superTabs: SuperTabs;

  page1: any = FirstPage;
  page2: any = SecondPage;
  page3: any = ThirdPage;

  constructor(public navCtrl: NavController, private superTabsCtrl: SuperTabsController) {}

  ngAfterViewInit() {
    // must wait for AfterViewInit if you want to modify the tabs instantly
    this.superTabsCtrl.setBadge('homeTab', 5);
  }
  
  slideToIndex(index: number) {
    this.superTabs.slideTo(index);
  }

  hideToolbar() {
    this.superTabsCtrl.showToolbar(false);
  }

  showToolbar() {
    this.superTabsCtrl.showToolbar(true);
  }

  onTabSelect(ev: any) {
    console.log('Tab selected', 'Index: ' + ev.index, 'Unique ID: ' + ev.id);
  }

}
