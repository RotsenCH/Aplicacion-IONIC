import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CameraPageRoutingModule } from './camera-routing.module';
import { CameraPage } from './camera.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    IonicModule,
    CameraPageRoutingModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: CameraPage }])
  ],
  declarations: [CameraPage]
})
export class CameraPageModule {}
