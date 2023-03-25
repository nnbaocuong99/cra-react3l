import {
  DateFilter,
  GuidFilter,
  IdFilter,
  NumberFilter,
  StringFilter,
} from "react3l-advanced-filters";
import { ModelFilter } from "react3l-common";

export class ProductFilter extends ModelFilter {
  public id?: IdFilter = new IdFilter();
  public code?: StringFilter = new StringFilter();
  public supplierCode?: StringFilter = new StringFilter();
  public name?: StringFilter = new StringFilter();
  public description?: StringFilter = new StringFilter();
  public scanCode?: StringFilter = new StringFilter();
  public eRPCode?: StringFilter = new StringFilter();
  public categoryId?: IdFilter = new IdFilter();
  public productTypeId?: IdFilter = new IdFilter();
  public supplierId?: IdFilter = new IdFilter();
  public brandId?: IdFilter = new IdFilter();
  public unitOfMeasureId?: IdFilter = new IdFilter();
  public unitOfMeasureGroupingId?: IdFilter = new IdFilter();
  public salePrice?: NumberFilter = new NumberFilter();
  public retailPrice?: NumberFilter = new NumberFilter();
  public taxTypeId?: IdFilter = new IdFilter();
  public statusId?: IdFilter = new IdFilter();
  public otherName?: StringFilter = new StringFilter();
  public technicalName?: StringFilter = new StringFilter();
  public note?: StringFilter = new StringFilter();
  public usedVariationId?: IdFilter = new IdFilter();
  public rowId?: GuidFilter = new GuidFilter();
  public productGroupingId?: IdFilter = new IdFilter();
  public search?: string;
  public createdAt?: DateFilter = new DateFilter();
}
