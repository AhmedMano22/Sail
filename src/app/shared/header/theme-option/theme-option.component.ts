import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-theme-option',
  templateUrl: './theme-option.component.html',
  styleUrls: ['./theme-option.component.css']
})
export class ThemeOptionComponent implements OnInit {

  leftToRight: boolean = true;
  darkTheme: boolean = false;
  currentLang: string;
  constructor(public translate: TranslateService) { }

  ngOnInit(): void {

  }
  /**
   * Set dark theme
   */
  toggleLifeToRight() {
    this.leftToRight = !this.leftToRight
  }
  toggleDarkTheme() {
    this.darkTheme = !this.darkTheme
  }
  setDark() {
    document.getElementById('theme-opt').setAttribute('href', './assets/css/style-dark.min.css');
    this.toggleDarkTheme()
    this.leftToRight = true;
  }

  /**
   * Set light theme
   */
  setLight() {
    document.getElementById('theme-opt').setAttribute('href', '../assets/css/style.min.css');
    this.toggleDarkTheme()
    this.leftToRight = true;
  }

  /**
   * Set dark-rtl theme
   */
  darkRtl() {
    document.getElementById('theme-opt').setAttribute('href', '../assets/css/style-dark-rtl.min.css');
    this.toggleLifeToRight()
  }
  /**
   * Set dark-light theme
   */
  darkLtr() {
    document.getElementById('theme-opt').setAttribute('href', '../assets/css/style-dark.min.css');
    this.toggleLifeToRight()

  }
  /**
   * Set rtl theme
   */
  setRtl() {
    document.getElementById('theme-opt').setAttribute('href', '../assets/css/style-rtl.min.css');
    this.toggleLifeToRight()
    this.translate.use("ar")
  }
  /**
   * Set light theme
   */
  setLtr() {
    document.getElementById('theme-opt').setAttribute('href', '../assets/css/style.min.css');
    this.toggleLifeToRight()
    this.translate.use("en")

  }

}
