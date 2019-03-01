import { NgModule } from "@angular/core";
import {
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatButtonModule,
  MatListModule,
  MatBadgeModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule,

  MatCheckboxModule,
  MatRadioModule
} from "@angular/material";

@NgModule({
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    MatBadgeModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,

    MatCheckboxModule,
    MatRadioModule,
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    MatBadgeModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,

    MatCheckboxModule,
    MatRadioModule,
  ]
})
export class MaterialModule {}
