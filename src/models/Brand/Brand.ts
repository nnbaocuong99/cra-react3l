import { Model } from "react3l-common";

export class Brand extends Model {
  public id?: number;

  public code?: string;

  public name?: string;

  public statusId?: number = 1;

  public description?: string;

  public used?: boolean;

  public rowId?: string;
}
