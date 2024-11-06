import { Component } from '@angular/core';
import {
  TuiAppearance,
  TuiButton,
  TuiDataListComponent, TuiDropdown,
  TuiDropdownOpen,
  TuiIcon,
  TuiOption,
  TuiTitle
} from '@taiga-ui/core';
import {TuiAvatar, TuiChevron, TuiFade} from '@taiga-ui/kit';
import {
  TuiCardLarge,
  TuiHeader,
  TuiHeaderComponent,
  TuiLogoComponent,
  TuiMainComponent,
  TuiNavComponent
} from '@taiga-ui/layout';
import {TuiRepeatTimes} from '@taiga-ui/cdk';

@Component({
  selector: 'app-product-list-cards',
  standalone: true,
  imports: [
    TuiAppearance,
    TuiAvatar,
    TuiButton,
    TuiCardLarge,
    TuiChevron,
    TuiDataListComponent,
    TuiDropdownOpen,
    TuiFade,
    TuiHeader,
    TuiHeaderComponent,
    TuiIcon,
    TuiLogoComponent,
    TuiMainComponent,
    TuiNavComponent,
    TuiOption,
    TuiRepeatTimes,
    TuiTitle,
    TuiDropdown
  ],
  templateUrl: './product-list-cards.component.html',
  styleUrl: './product-list-cards.component.css'
})
export class ProductListCardsComponent {

}
