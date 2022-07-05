import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToolbarPrincipalComponent } from './toolbar-principal.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [ToolbarPrincipalComponent],
  exports: [ToolbarPrincipalComponent]
})
export class ToolbarPrincipalComponentModule {}