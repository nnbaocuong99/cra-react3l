import { GuidFilter, IdFilter, StringFilter } from "react3l-advanced-filters";
import { ModelFilter } from "react3l-common";

export class BrandFilter extends ModelFilter {
  public id?: IdFilter = new IdFilter();
  public code?: StringFilter = new StringFilter();
  public name?: StringFilter = new StringFilter();
  public statusId?: IdFilter = new IdFilter();
  public description?: StringFilter = new StringFilter();
  public rowId?: GuidFilter = new GuidFilter();
  public search?: string;
}
