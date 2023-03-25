import { Model } from "react3l-common/src/Model";

export class Product extends Model {
  public id?: number;

  public code?: string;

  public supplierCode?: string;

  public name?: string;

  public description?: string;

  public scanCode?: string;

  public eRPCode?: string;

  public categoryId?: number;

  public productTypeId?: number;

  public supplierId?: number;

  public brandId?: number;

  public unitOfMeasureId?: number;

  public unitOfMeasureGroupingId?: number;

  public salePrice?: number;

  public retailPrice?: number;

  public taxTypeId?: number;

  public statusId?: number = 1;

  public otherName?: string;

  public technicalName?: string;

  public note?: string;

  public isNew?: boolean;

  public usedVariationId?: number;

  public used?: boolean;

  public rowId?: string;

  public isPurchaseable?: boolean;

  public isSellable?: boolean;
}
