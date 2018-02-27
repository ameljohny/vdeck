import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShareProfilePage } from './share-profile';

@NgModule({
  declarations: [
    ShareProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(ShareProfilePage),
  ],
})
export class ShareProfilePageModule {}
