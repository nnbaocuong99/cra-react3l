import { Model, ModelFilter } from "react3l-common";
import { SortOrder } from "antd/lib/table/interface";
import { useCallback } from "react";
import { FilterAction, FilterActionEnum } from "./filter-service";

/* services to CRUD, import, export data in table */
export const tableService = {
  /**
   *
   * expose data and event handler for master table service
   * @param: filter: TFilter
   * @param: setFilter: (filter: TFilter) => void
   * @param: handleReloadList: any
   *
   * @return: { handleTableChange, handlePagination }
   *
   * */
  useTable<TFilter extends ModelFilter>(
    filter: TFilter,
    setFilter: (filter: TFilter) => void,
    handleReloadList?: any
  ) {
    const handleTableChange = useCallback(
      (...[, , sorter]) => {
        let newFilter = { ...filter }; // dont check pagination change because of we customize it
        if (
          sorter.field !== filter.orderBy ||
          sorter.order !== getAntOrderType(filter, sorter.field)
        ) {
          newFilter = {
            ...newFilter,
            orderBy: sorter.field,
            orderType: getOrderType(sorter.order),
          };
        } // check sortOrder and sortDirection
        setFilter({ ...newFilter }); // setFilter
        if (typeof handleReloadList === "function") {
          handleReloadList();
        } // handleReloadList
      },
      [filter, setFilter, handleReloadList]
    );

    const handlePagination = useCallback(
      (skip: number, take: number) => {
        setFilter({ ...filter, skip, take });
        if (typeof handleReloadList === "function") {
          handleReloadList();
        }
      },
      [filter, setFilter, handleReloadList]
    );

    return {
      handleTableChange,
      handlePagination,
    };
  },

  useContentTable<T extends Model, TFilter extends ModelFilter>(
    ClassFilter: new () => TFilter,
    ClassContent: new () => T,
    data: T[],
    setData: (t: T[]) => void,
    dispatchFilter: React.Dispatch<FilterAction<TFilter>>,
    handleReloadList: () => void
  ) {
    const handleResetTable = useCallback(() => {
      const newFilter = new ClassFilter();
      dispatchFilter({ type: FilterActionEnum.SET, payload: newFilter });
      handleReloadList();
    }, [ClassFilter, dispatchFilter, handleReloadList]);

    const handleChangeCell = useCallback(
      (rowIndex: number, columnKey: keyof T, value?: T[keyof T]) => {
        if (rowIndex !== -1) {
          data[rowIndex][columnKey] = value;
        }
        setData(data);
        handleResetTable();
      },
      [data, setData, handleResetTable]
    );

    const handleChangeRow = useCallback(
      (row: number | string, value: T) => {
        if (typeof row === "number") {
          data[row] = value;
          setData(data);
          handleResetTable();
        } else if (typeof row === "string") {
          const idx = data.findIndex(i => i.key === row);
          data[idx] = value;
          setData(data);
          handleResetTable();
        }
      },
      [data, setData, handleResetTable]
    );

    const handleAddRow = useCallback(() => {
      data.push(new ClassContent());
      setData(data);
      handleReloadList();
    }, [ClassContent, data, setData, handleReloadList]);

    return {
      handleChangeCell,
      handleChangeRow,
      handleAddRow,
    };
  },
};

export function getAntOrderType<T extends Model, TFilter extends ModelFilter>(
  tFilter: TFilter,
  columnName: keyof T
): SortOrder {
  if (tFilter.orderBy === columnName) {
    switch (tFilter.orderType) {
      case "ASC":
        return "ascend";

      case "DESC":
        return "descend";

      default:
        return undefined;
    }
  }
  return undefined;
}

export function getOrderType(sortOrder?: SortOrder) {
  switch (sortOrder) {
    case "ascend":
      return "ASC";

    case "descend":
      return "DESC";

    default:
      return undefined;
  }
}
