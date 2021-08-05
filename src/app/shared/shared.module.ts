import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NotFoundComponent } from 'src/app/shared/components/not-found/not-found.component';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
const sharedMComponents: any[] | Type<any> = [
  HeaderComponent,
  FooterComponent,
  NotFoundComponent,
];
@NgModule({
  declarations: [sharedMComponents],
  imports: [CommonModule, TranslateModule.forRoot()],
  exports: [sharedMComponents],
})
export class SharedModule {}
