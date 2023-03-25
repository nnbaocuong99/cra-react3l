import { AxiosResponse } from "axios";
import { API_BRAND_PREFIX } from "config/api-consts";
// import { API_PRODUCT_PREFIX } from "config/api-consts";
// import { kebabCase, url } from "@react3l/react3l-common/helpers";
import { BASE_API_URL } from "config/consts";
import { kebabCase } from "lodash";
import { Brand, BrandFilter } from "models/Brand";
import { Status, StatusFilter } from "models/Status";
import { Repository } from "react3l-common";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { KeyType } from "services/list-service";
import nameof from "ts-nameof.macro";

export declare function url(baseURL: string, ...urls: string[]): string;
export class BrandRepository extends Repository {
  constructor() {
    super();
    this.baseURL = BASE_API_URL + "/" + API_BRAND_PREFIX;
  }

  public count = (brandFilter?: BrandFilter): Observable<number> => {
    return this.http
      .post<number>(kebabCase(nameof(this.count)), brandFilter)
      .pipe(map((response: AxiosResponse<number>) => response.data));
  };

  public list = (brandFilter?: BrandFilter): Observable<Brand[]> => {
    return this.http
      .post<Brand[]>(kebabCase(nameof(this.list)), brandFilter)
      .pipe(Repository.responseMapToList<Brand>(Brand));
  };

  public singleListStatus = (): Observable<Status[]> => {
    return this.http
      .post<Status[]>(
        kebabCase(nameof(this.singleListStatus)),
        new StatusFilter()
      )
      .pipe(Repository.responseMapToList<Brand>(Brand));
  };
  public filterListStatus = (): Observable<Status[]> => {
    return this.http
      .post<Status[]>(
        kebabCase(nameof(this.filterListStatus)),
        new StatusFilter()
      )
      .pipe(Repository.responseMapToList<Brand>(Brand));
  };

  public export = (filter: any): Observable<AxiosResponse<any>> => {
    return this.http.post("export", filter, {
      responseType: "arraybuffer",
    });
  };

  public bulkDelete = (idList: KeyType[]): Observable<void> => {
    return this.http
      .post(kebabCase(nameof(this.bulkDelete)), idList)
      .pipe(map((response: AxiosResponse<void>) => response.data));
  };

  public get = (id: number | string): Observable<Brand> => {
    return this.http
      .post<Brand>(kebabCase(nameof(this.get)), { id })
      .pipe(Repository.responseMapToModel<Brand>(Brand));
  };

  public create = (brand: Brand): Observable<Brand> => {
    return this.http
      .post<Brand>(kebabCase(nameof(this.create)), brand)
      .pipe(Repository.responseMapToModel<Brand>(Brand));
  };

  public update = (brand: Brand): Observable<Brand> => {
    return this.http
      .post<Brand>(kebabCase(nameof(this.update)), brand)
      .pipe(Repository.responseMapToModel<Brand>(Brand));
  };

  public save = (brand: Brand): Observable<Brand> => {
    return brand.id ? this.update(brand) : this.create(brand);
  };
}
export const brandRepository = new BrandRepository();
