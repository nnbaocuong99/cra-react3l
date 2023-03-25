import {
  DateFilter,
  IdFilter,
  NumberFilter,
  StringFilter,
} from "react3l-advanced-filters";
import {
  Reducer,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";
import _ from "lodash";
import { Model, ModelFilter, OrderType } from "react3l-common";
import { finalize, forkJoin, Observable } from "rxjs";
import { webService } from "./web-service";
import { Moment } from "moment";
import { RowSelectionType } from "antd/lib/table/interface";
import { DEFAULT_TAKE } from "config/consts";

export enum ListActionType {
  SET = "SET",
}

export type KeyType = string | number;

export interface ListState<T extends Model> {
  list: T[];
  count: number;
}

export interface ListAction<T extends Model> {
  type: string;
  payload?: ListState<T>;
}

function listReducer<T>(state: ListState<T>, action: ListAction<T>) {
  switch (action.type) {
    case ListActionType.SET:
      return { ...action.payload };
    default:
      return state;
  }
}

export const listService = {
  /**
   * @param: getList: (filter: TFilter) => Observable<T[]>
   * @param: getCount: (filter: TFilter) => Observable<number>
   * @param: filter: TFilter
   * @param: initData: ListState<T>
   * */
  useList<T extends Model, TFilter extends ModelFilter>(
    getList: (filter: TFilter) => Observable<T[]>,
    getCount: (filter: TFilter) => Observable<number>,
    filter: TFilter,
    initData?: ListState<T>,
    autoCallListByChange: boolean = true
  ) {
    const [{ list, count }, dispatch] = useReducer<
      Reducer<ListState<T>, ListAction<T>>
    >(listReducer, initData ? initData : { list: [], count: 0 });

    const [loadingList, setLoadingList] = useState<boolean>(false);

    const defaultFilter = useMemo(() => {
      return { ...filter, skip: 0, take: 10 };
    }, [filter]);

    const [subscription] = webService.useSubscription();

    const handleLoadList = useCallback(() => {
      subscription.add(
        forkJoin([getList(filter), getCount(filter)])
          .pipe(finalize(() => setLoadingList(false)))
          .subscribe({
            next: (results: [T[], number]) =>
              dispatch({
                type: ListActionType.SET,
                payload: {
                  list: results[0],
                  count: results[1],
                },
              }),
          })
      );
    }, [filter, getCount, getList, subscription]);

    const handleResetList = useCallback(() => {
      subscription.add(
        forkJoin([getList(defaultFilter), getCount(defaultFilter)])
          .pipe(finalize(() => setLoadingList(false)))
          .subscribe({
            next: (results: [T[], number]) =>
              dispatch({
                type: ListActionType.SET,
                payload: {
                  list: results[0],
                  count: results[1],
                },
              }),
          })
      );
    }, [defaultFilter, getCount, getList, subscription]);

    useEffect(() => {
      if (filter && autoCallListByChange) {
        setLoadingList(true);
        handleLoadList();
      }
    }, [autoCallListByChange, filter, handleLoadList]);

    return {
      list,
      count,
      loadingList,
      setLoadingList,
      handleResetList,
      handleLoadList,
    };
  },

  /**
   *
   * @param: action?: (t: T) => Observable<T>,
   * @param: bulkAction?: (ids: KeyType[]) => Observable<void>,
   * @param: selectedKeys?: KeyType[],
   * @param: setSelectedRowKeys?: Dispatch<SetStateAction<KeyType[]>>,
   * @param: onUpdateListSuccess?: (item?: T) => void,
   * @param: handleResetList?: () => void
   */
  useRowSelection<T extends Model>(
    action?: (t: T) => Observable<T>,
    bulkAction?: (ids: KeyType[]) => Observable<void>,
    selectionType: RowSelectionType = "checkbox",
    initialRowKeys?: KeyType[],
    onUpdateListSuccess?: (item?: T) => void,
    handleResetList?: () => void
  ) {
    const [subscription] = webService.useSubscription();

    const [selectedRowKeys, setSelectedRowKeys] = useState<KeyType[]>(
      initialRowKeys ?? []
    );

    const canBulkAction = useMemo(
      () => selectedRowKeys.length > 0,
      [selectedRowKeys.length]
    );

    const handleAction = useCallback(
      (item: T) => {
        if (typeof action !== undefined) {
          subscription.add(
            action(item).subscribe({
              next: _res => {
                if (typeof onUpdateListSuccess === "function") {
                  onUpdateListSuccess(item); // sideEffect when update list successfully
                }
                setSelectedRowKeys(
                  (selectedRowKeys as number[]).filter(id => id !== item.id) // filter selectedRowKeys
                );
                handleResetList();
              },
            })
          );
        }
      },
      [
        subscription,
        action,
        onUpdateListSuccess,
        selectedRowKeys,
        handleResetList,
      ]
    );

    const handleBulkAction = useCallback(
      (keys?: KeyType[]) => {
        subscription.add(
          bulkAction(keys).subscribe({
            next: _res => {
              if (typeof onUpdateListSuccess === "function") {
                onUpdateListSuccess(); // sideEffect when update list successfully
              }
              setSelectedRowKeys([]);
              handleResetList();
            },
          })
        );
      },
      [
        subscription,
        bulkAction,
        onUpdateListSuccess,
        setSelectedRowKeys,
        handleResetList,
      ]
    );

    return {
      handleAction,
      handleBulkAction,
      canBulkAction,
      rowSelection: useMemo(
        () => ({
          onChange(selectedRowKeys: KeyType[]) {
            setSelectedRowKeys(selectedRowKeys);
          },
          type: selectionType,
        }),
        [selectionType]
      ),
      selectedRowKeys,
      setSelectedRowKeys,
    };
  },

  useLocalList<T extends Model, TFilter extends ModelFilter>(
    data: T[],
    filter?: TFilter
  ) {
    const [{ list, count }, dispatch] = useReducer<
      Reducer<ListState<T>, ListAction<T>>
    >(listReducer, {
      list: data,
      count: data ? data.length : 0,
    });

    const [loadingList, setLoadingList] = useState<boolean>(false);

    const { sortList, filterList } = this.useFilterList<T, TFilter>(filter);

    const handleFilter: (list: T[]) => T[] = useCallback(
      (list: T[]) => {
        if (filter === null) return list;
        return sortList(filterList(list));
      },
      [filter, sortList, filterList]
    );

    useEffect(() => {
      if (loadingList && data.length > 0) {
        const filteredList = handleFilter(data);
        dispatch({
          type: ListActionType.SET,
          payload: {
            list: filteredList,
            count: filteredList.length,
          },
        });
        setLoadingList(false);
      }
    }, [data, loadingList, handleFilter]);

    return {
      list,
      count,
      loadingList,
      setLoadingList,
    };
  },

  useFilterList<T extends Model, TFilter extends ModelFilter>(filter: TFilter) {
    const getLodashOrder = (orderType: any) => {
      if (orderType === OrderType.ASC) return "asc";
      if (orderType === OrderType.DESC) return "desc";
      return "desc";
    };

    // sortData by sortType and sortOrder
    const sortList = useCallback(
      (list: T[]) => {
        return _.chain(list)
          .orderBy(filter.orderBy, getLodashOrder(filter.orderType))
          .drop(filter?.skip ? filter.skip : 0)
          .take(filter?.take ? filter.take : DEFAULT_TAKE) //take
          .value();
      },
      [filter]
    );

    const filterList = useCallback(
      (list: T[]) => {
        Object.entries(filter).forEach(([fKey, fType]) => {
          // IdFilter
          if (fType instanceof IdFilter) {
            Object.entries(fType).forEach(([fTypeKey, fValue]) => {
              switch (fTypeKey) {
                case "equal":
                  list = list.filter((i: T) => {
                    const iValue: number = i[fKey] as number;
                    if (
                      typeof iValue === "number" &&
                      typeof fValue === "number"
                    ) {
                      return iValue === fValue;
                    }
                    return false;
                  });
                  break;
                case "notEqual":
                  list = list.filter((i: T) => {
                    const iValue: number = i[fKey] as number;
                    if (
                      typeof iValue === "number" &&
                      typeof fValue === "number"
                    ) {
                      return iValue !== fValue;
                    }
                    return false;
                  });
                  break;
                case "in":
                  list = list.filter((i: T) => {
                    const iValue: number = i[fKey] as number;
                    if (typeof iValue === "number" && Array.isArray(fValue)) {
                      return fValue.includes(iValue);
                    }
                    return false;
                  });
                  break;
                case "notIn":
                  list = list.filter((i: T) => {
                    const iValue: number = i[fKey] as number;
                    if (typeof iValue === "number" && Array.isArray(fValue)) {
                      return !fValue.includes(iValue);
                    }
                    return false;
                  });
                  break;
                default:
                  break;
              }
            });
          }

          // NumberFilter
          if (fType instanceof NumberFilter) {
            Object.entries(fType).forEach(([fTypeKey, fValue]) => {
              if (typeof fValue === "number") {
                switch (fTypeKey) {
                  case "equal":
                    list = list.filter((i: T) => {
                      const iValue: number = i[fKey] as number;
                      if (typeof iValue === "number") {
                        return iValue === fValue;
                      }
                      return false;
                    });
                    break;
                  case "notEqual":
                    list = list.filter((i: T) => {
                      const iValue: number = i[fKey] as number;
                      if (typeof iValue === "number") {
                        return iValue !== fValue;
                      }
                      return false;
                    });
                    break;
                  case "less":
                    list = list.filter((i: T) => {
                      const iValue: number = i[fKey] as number;
                      if (typeof iValue === "number") {
                        return iValue < fValue;
                      }
                      return false;
                    });
                    break;
                  case "lessEqual":
                    list = list.filter((i: T) => {
                      const iValue: number = i[fKey] as number;
                      if (typeof iValue === "number") {
                        return iValue <= fValue;
                      }
                      return false;
                    });
                    break;
                  case "greater":
                    list = list.filter((i: T) => {
                      const iValue: number = i[fKey] as number;
                      if (typeof iValue === "number") {
                        return iValue > fValue;
                      }
                      return false;
                    });
                    break;
                  case "greaterEqual":
                    list = list.filter((i: T) => {
                      const iValue: number = i[fKey] as number;
                      if (typeof iValue === "number") {
                        return iValue >= fValue;
                      }
                      return false;
                    });
                    break;
                  default:
                    break;
                }
              }
            });
          }

          // StringFilter
          if (fType instanceof StringFilter) {
            Object.entries(fType).forEach(([fTypeKey, fValue]) => {
              if (typeof fValue === "string") {
                switch (fTypeKey) {
                  case "equal":
                    list = list.filter((i: T) => {
                      const iValue: string = i[fKey];
                      if (typeof iValue === "string") {
                        return iValue === fValue;
                      }
                      return false;
                    });
                    break;
                  case "notEqual":
                    list = list.filter((i: T) => {
                      const iValue: string = i[fKey];
                      if (typeof iValue === "string") {
                        return iValue !== fValue;
                      }
                      return false;
                    });
                    break;
                  case "contain":
                    list = list.filter((i: T) => {
                      const iValue: string = i[fKey];
                      if (typeof iValue === "string") {
                        return iValue.indexOf(fValue) >= 0;
                      }
                      return false;
                    });
                    break;
                  case "notContain":
                    list = list.filter((i: T) => {
                      const iValue: string = i[fKey];
                      if (typeof iValue === "string") {
                        return iValue.indexOf(fValue) < 0;
                      }
                      return false;
                    });
                    break;
                  case "startWith":
                    list = list.filter((i: T) => {
                      const iValue: string = i[fKey];
                      if (typeof iValue === "string") {
                        return iValue.startsWith(fValue);
                      }
                      return false;
                    });
                    break;
                  case "notStartWith":
                    list = list.filter((i: T) => {
                      const iValue: string = i[fKey];
                      if (typeof iValue === "string") {
                        return !iValue.startsWith(fValue);
                      }
                      return false;
                    });
                    break;
                  case "endWith":
                    list = list.filter((i: T) => {
                      const iValue: string = i[fKey];
                      if (typeof iValue === "string") {
                        return iValue.endsWith(fValue);
                      }
                      return false;
                    });
                    break;
                  case "notEndWith":
                    list = list.filter((i: T) => {
                      const iValue: string = i[fKey];
                      if (typeof iValue === "string") {
                        return !iValue.endsWith(fValue);
                      }
                      return false;
                    });
                    break;
                  default:
                    break;
                }
              }
            });
          }

          // DateFilter
          // Convert item value and filter value into Moment-based time first
          if (fType instanceof DateFilter) {
            Object.entries(fType).forEach(([fTypeKey, fValue]) => {
              if (typeof fValue === "object" && fValue !== null) {
                switch (fTypeKey) {
                  case "equal":
                    list = list.filter((i: T) => {
                      const iValue: number = (i[fKey] as Moment)
                        ?.toDate()
                        .getTime();
                      const fMoment: number = (fValue as Moment)
                        ?.toDate()
                        .getTime();
                      if (
                        typeof iValue === "number" &&
                        typeof fMoment == "number"
                      ) {
                        return iValue === fMoment;
                      }
                      return false;
                    });
                    break;
                  case "notEqual":
                    list = list.filter((i: T) => {
                      const iValue: number = (i[fKey] as Moment)
                        ?.toDate()
                        .getTime();
                      const fMoment: number = (fValue as Moment)
                        ?.toDate()
                        .getTime();
                      if (
                        typeof iValue === "number" &&
                        typeof fMoment == "number"
                      ) {
                        return iValue !== fMoment;
                      }
                      return false;
                    });
                    break;
                  case "less":
                    list = list.filter((i: T) => {
                      const iValue: number = (i[fKey] as Moment)
                        ?.toDate()
                        .getTime();
                      const fMoment: number = (fValue as Moment)
                        ?.toDate()
                        .getTime();
                      if (
                        typeof iValue === "number" &&
                        typeof fMoment == "number"
                      ) {
                        return iValue < fMoment;
                      }
                      return false;
                    });
                    break;
                  case "lessEqual":
                    list = list.filter((i: T) => {
                      const iValue: number = (i[fKey] as Moment)
                        ?.toDate()
                        .getTime();
                      const fMoment: number = (fValue as Moment)
                        ?.toDate()
                        .getTime();
                      if (
                        typeof iValue === "number" &&
                        typeof fMoment == "number"
                      ) {
                        return iValue <= fMoment;
                      }
                      return false;
                    });
                    break;
                  case "greater":
                    list = list.filter((i: T) => {
                      const iValue: number = (i[fKey] as Moment)
                        ?.toDate()
                        .getTime();
                      const fMoment: number = (fValue as Moment)
                        ?.toDate()
                        .getTime();
                      if (
                        typeof iValue === "number" &&
                        typeof fMoment == "number"
                      ) {
                        return iValue > fMoment;
                      }
                      return false;
                    });
                    break;
                  case "greaterEqual":
                    list = list.filter((i: T) => {
                      const iValue: number = (i[fKey] as Moment)
                        ?.toDate()
                        .getTime();
                      const fMoment: number = (fValue as Moment)
                        ?.toDate()
                        .getTime();
                      if (
                        typeof iValue === "number" &&
                        typeof fMoment == "number"
                      ) {
                        return iValue >= fMoment;
                      }
                      return false;
                    });
                    break;
                  default:
                    break;
                }
              }
            });
          }
        });
        return list;
      },
      [filter]
    );

    return {
      sortList,
      filterList,
    };
  },
};
