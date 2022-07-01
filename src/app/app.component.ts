import { Component, ViewChild, HostListener, HostBinding, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSidenav } from '@angular/material/sidenav';
import { MatTabChangeEvent } from '@angular/material/tabs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @HostBinding('class') className = '';

  activeTab: string;
  toggleControl = new FormControl(false);

  handleTabChange(tab: MatTabChangeEvent) {
    this.activeTab = tab.tab.ariaLabel;
  }
  ngOnInit(): void {
    this.toggleControl.valueChanges.subscribe((darkMode) => {
      const darkClassName = 'dark-mode';
      this.className = darkMode ? darkClassName : '';
    });
  }
}
