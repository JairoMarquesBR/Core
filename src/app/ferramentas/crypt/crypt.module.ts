import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CryptPageRoutingModule } from './crypt-routing.module';

import { CryptPage } from './crypt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CryptPageRoutingModule
  ],
  declarations: [CryptPage]
})
export class CryptPageModule {}
