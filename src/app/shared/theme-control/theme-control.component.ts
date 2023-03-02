import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-theme-control',
  templateUrl: './theme-control.component.html',
  styleUrls: ['./theme-control.component.css']
})
export class ThemeControlComponent implements OnInit {

  themeMode: string = localStorage.getItem("theme-mode") || "lgt";
  drkMode: boolean;
  LeftToRight: boolean;
  @Output('changeMode') changeMode: EventEmitter<string> = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
    this.themeMode == "lgt" ? this.setLight() : this.setDark();
    this.selectedLang(localStorage.getItem('language'));
    console.log(this.themeMode);

    this.changeMode.emit(this.themeMode == 'lgt' ? 'drk' : 'lgt')
  }
  setDark() {
    document.getElementById('theme-opt').setAttribute('href', './assets/css/style-dark.min.css');
    localStorage.setItem("theme-mode", "drk")
    this.changeMode.emit("lgt")

    this.drkMode = true
  }
  setLight() {
    document.getElementById('theme-opt').setAttribute('href', '../assets/css/style.min.css');
    localStorage.setItem("theme-mode", "lgt")
    this.changeMode.emit("drk")

    this.drkMode = false
  }

  selectedLang(lang: string): void {
    if (lang == "enLgt") {
      this.setLtr()
      localStorage.setItem("language", `${lang}`)
    } else if (lang == "arLgt") {
      this.setRtl()
      localStorage.setItem("language", `${lang}`)
    } else if (lang == "enDrk") {
      this.darkLtr()
      localStorage.setItem("language", `${lang}`)
    } else if (lang == "arDrk") {
      this.darkRtl()
      localStorage.setItem("language", `${lang}`)
    }
  }
  setRtl(): void {
    document.getElementById('theme-opt').setAttribute('href', '../assets/css/style-rtl.min.css');
    this.LeftToRight = false
  }
  setLtr(): void {
    document.getElementById('theme-opt').setAttribute('href', '../assets/css/style.min.css');
    this.LeftToRight = true
  }
  darkRtl(): void {
    document.getElementById('theme-opt').setAttribute('href', './assets/css/style-dark-rtl.min.css');
    this.LeftToRight = false
  }
  darkLtr(): void {
    document.getElementById('theme-opt').setAttribute('href', './assets/css/style-dark.min.css');
    this.LeftToRight = true
  }

}
