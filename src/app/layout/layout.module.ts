import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { SettingComponent } from './setting/setting.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FooterComponent, HeaderComponent, MenuComponent, SettingComponent],
  exports: [FooterComponent, HeaderComponent, MenuComponent, SettingComponent]
})
export class LayoutModule { }
