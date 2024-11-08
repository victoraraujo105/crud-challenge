import { ChangeDetectionStrategy, Component } from '@angular/core';
import {TuiCardLarge, TuiCell, TuiHeader, TuiHeaderComponent, TuiLogoComponent, TuiNavigation} from '@taiga-ui/layout';
import {TuiAppearance, TuiButton, TuiDataList, TuiDropdown, TuiIcon, TuiTextfield, TuiTitle} from '@taiga-ui/core';
import {
  TuiAvatar,
  TuiButtonSelect,
  TuiChevron,
  TuiDataListWrapperComponent,
  TuiFade,
  TuiPagination
} from '@taiga-ui/kit';
import {TuiContext, TuiRepeatTimes, TuiStringHandler} from '@taiga-ui/cdk';
import {TuiTable, TuiTableDirective} from '@taiga-ui/addon-table';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {TuiInputModule} from '@taiga-ui/legacy';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    TuiHeaderComponent,
    TuiAppearance,
    TuiButton,
    TuiChevron,
    TuiAvatar,
    TuiLogoComponent,
    TuiIcon,
    TuiFade,
    TuiDropdown,
    TuiDataList,
    TuiNavigation,
    TuiCardLarge,
    TuiHeader,
    TuiTitle,
    TuiRepeatTimes,
    TuiTableDirective,
    TuiTable,
    TuiCell,
    TuiTextfield,
    CommonModule,
    FormsModule,
    TuiButtonSelect,
    TuiDataListWrapperComponent,
    TuiPagination,
    TuiInputModule
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent {
  entities: any[] = [];
  data: any;
  protected readonly items: {
    id: number;
    name: string;
    description: string;
    price: number;
    category: string
  }[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description for product 1',
      price: 100,
      category: 'Category 1'
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description for product 2',
      price: 200,
      category: 'Category 2'
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Description for product 3',
      price: 300,
      category: 'Category 3'
    },
    {
      id: 4,
      name: 'Product 4',
      description: 'Description for product 4',
      price: 400,
      category: 'Category 4'
    },
    {
      id: 5,
      name: 'Product 5',
      description: 'Description for product 5',
      price: 500,
      category: 'Category 5'
    },
    {
      id: 6,
      name: 'Product 6',
      description: 'Description for product 6',
      price: 600,
      category: 'Category 6'
    },
    {
      id: 7,
      name: 'Product 7',
      description: 'Description for product 7',
      price: 700,
      category: 'Category 7'
    },
    {
      id: 8,
      name: 'Product 8',
      description: 'Description for product 8',
      price: 800,
      category: 'Category 8'
    },
    {
      id: 9,
      name: 'Product 9',
      description: 'Description for product 9',
      price: 900,
      category: 'Category 9'
    },
    {
      id: 10,
      name: 'Product 10',
      description: 'Description for product 10',
      price: 1000,
      category: 'Category 10'
    }
  ];
  protected search = '';

  protected index = 4;
  protected length = 10;
  protected size = 10;

  protected readonly content: TuiStringHandler<TuiContext<number>> = ({$implicit}) =>
    `${$implicit} items per page`;

}
