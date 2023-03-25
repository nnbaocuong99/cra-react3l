import { AxiosResponse } from "axios";
import { API_PRODUCT_PREFIX } from "config/api-consts";
// import { API_PRODUCT_PREFIX } from "config/api-consts";
// import { kebabCase, url } from "@react3l/react3l-common/helpers";
import { BASE_API_URL } from "config/consts";
import { kebabCase } from "lodash";
import { Brand, BrandFilter } from "models/Brand";
import { Product, ProductFilter } from "models/Product";
import { Repository } from "react3l-common";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import nameof from "ts-nameof.macro";
import { KeyType } from "services/list-service";

export declare function url(baseURL: string, ...urls: string[]): string;
export class ProductRepository extends Repository {
  constructor() {
    super();
    this.baseURL = BASE_API_URL + "/" + API_PRODUCT_PREFIX;
  }

  public count = (productFilter?: ProductFilter): Observable<number> => {
    return this.http
      .post<number>(kebabCase(nameof(this.count)), productFilter)
      .pipe(map((response: AxiosResponse<number>) => response.data));
  };

  public list = (productFilter?: ProductFilter): Observable<Product[]> => {
    return this.http
      .post<Product[]>(kebabCase(nameof(this.list)), productFilter)
      .pipe(Repository.responseMapToList<Product>(Product));
  };

  public filterListBrand = (brandFilter: BrandFilter): Observable<Brand[]> => {
    return this.http
      .post<Brand[]>(kebabCase(nameof(this.filterListBrand)), brandFilter)
      .pipe(Repository.responseMapToList<Brand>(Brand));
  };

  public singleListBrand = (brandFilter: BrandFilter): Observable<Brand[]> => {
    return this.http
      .post<Brand[]>(kebabCase(nameof(this.singleListBrand)), brandFilter)
      .pipe(Repository.responseMapToList<Brand>(Brand));
  };

  public filterListProductType = (
    brandFilter: BrandFilter
  ): Observable<Brand[]> => {
    return this.http
      .post<Brand[]>(kebabCase(nameof(this.filterListProductType)), brandFilter)
      .pipe(Repository.responseMapToList<Brand>(Brand));
  };

  public filterListCategory = (
    brandFilter: BrandFilter
  ): Observable<Brand[]> => {
    return this.http
      .post<Brand[]>(kebabCase(nameof(this.filterListCategory)), brandFilter)
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

  public get = (id: number | string): Observable<Product> => {
    return this.http
      .post<Product>(kebabCase(nameof(this.get)), { id })
      .pipe(Repository.responseMapToModel<Product>(Product));
  };

  public create = (brand: Brand): Observable<Brand> => {
    return this.http
      .post<Brand>(kebabCase(nameof(this.create)), brand)
      .pipe(Repository.responseMapToModel<Product>(Product));
  };

  public update = (brand: Brand): Observable<Brand> => {
    return this.http
      .post<Brand>(kebabCase(nameof(this.update)), brand)
      .pipe(Repository.responseMapToModel<Product>(Product));
  };

  public save = (brand: Brand): Observable<Brand> => {
    return brand.id ? this.update(brand) : this.create(brand);
  };
}
export const productRepository = new ProductRepository();
