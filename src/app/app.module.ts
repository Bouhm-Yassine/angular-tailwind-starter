import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { PreviewContainersComponent } from './preview-containers/preview-containers.component';
import { PreviewControlsComponent } from './preview-controls/preview-controls.component';
import { PreviewGeneralComponent } from './preview-general/preview-general.component';
import { PreviewTypographyComponent } from './preview-typography/preview-typography.component';

@NgModule({
  declarations: [
    AppComponent,
    PreviewContainersComponent,
    PreviewControlsComponent,
    PreviewGeneralComponent,
    PreviewTypographyComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
