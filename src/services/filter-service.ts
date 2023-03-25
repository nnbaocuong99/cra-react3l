import { Moment } from "moment";
import { Model, ModelFilter } from "react3l-common";
import React, { Dispatch, Reducer, SetStateAction, useMemo } from "react";
import {
  GuidFilter,
  StringFilter,
  NumberFilter,
  DateFilter,
  IdFilter,
} from "react3l-advanced-filters";
import { Observable } from "rxjs";

export enum FilterActionEnum {
  SET,
  UPDATE,
}

export interface FilterAction<TFilter> {
  type: FilterActionEnum;
  payload?: TFilter;
}

export function filterReducer<TFilter extends ModelFilter>(
  state: TFilter,
  action: FilterAction<TFilter>
) {
  switch (action.type) {
    case FilterActionEnum.SET:
      return {
        ...action.payload,
      };
    case FilterActionEnum.UPDATE:
      return {
        ...state,
        ...action.payload,
      };
  }
}

export const filterService = {
  /**
    Returns current filter value and 3 handlers for changing it,
  */
  useFilter<TFilter extends ModelFilter>(
    modelFilter: TFilter,
    dispatch: (action: FilterAction<TFilter>) => void
  ) {
    const value = useMemo(() => modelFilter, [modelFilter]);

    // Handler for changing a single field in filter
    const handleChangeInputFilter = React.useCallback(
      (config: {
          fieldName: string;
          fieldType: string;
          classFilter: new (partial?: any) => StringFilter | NumberFilter;
        }) =>
        (newValue?: string | number | null) => {
          const { fieldName, fieldType, classFilter: ClassFilter } = config;
          dispatch({
            type: FilterActionEnum.UPDATE,
            payload: {
              [fieldName]: new ClassFilter({
                [fieldType]: newValue,
              }),
            } as TFilter,
          });
        },
      [dispatch]
    );

    /**
      Handler specifically used for Select component 
    */
    const handleChangeSelectFilter = React.useCallback(
      (config: {
          fieldName: string;
          fieldType: string;
          classFilter: new (partial?: any) => IdFilter | GuidFilter;
        }) =>
        (idValue: number, value: Model) => {
          const { fieldName, fieldType, classFilter: ClassFilter } = config;
          dispatch({
            type: FilterActionEnum.UPDATE,
            payload: {
              [`${fieldName}Value`]: value,
              [`${fieldName}Id`]: Object.assign(new ClassFilter(), {
                [fieldType]: idValue,
              }),
            } as TFilter,
          });
        },
      [dispatch]
    );

    /**
      Handler specifically used for Multiple Select component 
    */
    const handleChangeMultipleSelectFilter = React.useCallback(
      (config: {
          fieldName: string;
          fieldType: string;
          classFilter: new (partial?: any) => IdFilter | GuidFilter;
        }) =>
        (values: Model[]) => {
          const { fieldName, fieldType, classFilter: ClassFilter } = config;
          if (values) {
            const listIds =
              values.length > 0 ? values.map(current => current.id) : [];
            dispatch({
              type: FilterActionEnum.UPDATE,
              payload: {
                [`${fieldName}Value`]: [...values],
                [`${fieldName}Id`]: new ClassFilter({
                  [fieldType]: [...listIds],
                }),
              } as TFilter,
            });
          }
        },
      [dispatch]
    );

    /**
      Handler specifically used for Date component 
    */
    const handleChangeDateFilter = React.useCallback(
      (config: { fieldName: string; fieldType: string | [string, string] }) =>
        (date: Moment | [Moment, Moment]) => {
          const { fieldName, fieldType } = config;
          if (date instanceof Array && fieldType instanceof Array) {
            dispatch({
              type: FilterActionEnum.UPDATE,
              payload: {
                [fieldName]: new DateFilter({
                  [fieldType[0]]: date[0],
                  [fieldType[1]]: date[1],
                }),
              } as TFilter,
            });
          } else {
            dispatch({
              type: FilterActionEnum.UPDATE,
              payload: {
                [fieldName]: new DateFilter({
                  [fieldType as string]: date,
                }),
              } as TFilter,
            });
          }
        },
      [dispatch]
    );

    /**
      Handler specifically used for Date component 
    */
    const handleChangeDateMasterFilter = React.useCallback(
      (config: { fieldName: string; fieldType: [string, string] }) =>
        (item: any, dates: any) => {
          const { fieldName, fieldType } = config;
          dispatch({
            type: FilterActionEnum.UPDATE,
            payload: {
              [`${fieldName}Selected`]: { ...item },
              [fieldName]: new DateFilter({
                [fieldType[0]]: dates[0],
                [fieldType[1]]: dates[1],
              }),
            } as TFilter,
          });
        },
      [dispatch]
    );

    /**
      Handler to overwrite the whole filter
    */
    const handleChangeAllFilter = React.useCallback(
      (data: any) => {
        dispatch({
          type: FilterActionEnum.SET,
          payload: data,
        });
      },
      [dispatch]
    );

    /**
      Handler specifically used for Multiple Select component 
    */
    const handleChangeSingleTreeFilter = React.useCallback(
      (config: {
          fieldName: string;
          fieldType: string;
          classFilter: new (partial?: any) => IdFilter | GuidFilter;
        }) =>
        (values?: Model[]) => {
          debugger;
          const { fieldName, fieldType, classFilter: ClassFilter } = config;
          if (values) {
            const id =
              values.length > 0 ? values.map(current => current.id) : undefined;
            dispatch({
              type: FilterActionEnum.UPDATE,
              payload: {
                [`${fieldName}Value`]: values?.length > 0 && values[0],
                [`${fieldName}Id`]: new ClassFilter({
                  [fieldType]: id,
                }),
              } as TFilter,
            });
          }
        },
      [dispatch]
    );

    return {
      value,
      handleChangeInputFilter,
      handleChangeSelectFilter,
      handleChangeMultipleSelectFilter,
      handleChangeDateFilter,
      handleChangeDateMasterFilter,
      handleChangeAllFilter,
      handleChangeSingleTreeFilter,
    };
  },

  useLocalFilter<TFilter extends ModelFilter>(ClassFilter: new () => TFilter) {
    const [modelFilter, dispatch] = React.useReducer<
      Reducer<TFilter, FilterAction<TFilter>>
    >(filterReducer, new ClassFilter());

    return {
      modelFilter,
      dispatch,
    };
  },

  useEnumList<T extends Model>(
    handleList: () => Observable<T[]>
  ): [T[], Dispatch<SetStateAction<T[]>>] {
    const [list, setList] = React.useState<T[]>([]);

    React.useEffect(() => {
      handleList().subscribe((list: T[]) => {
        setList(list);
      });
    }, [handleList]);

    return [list, setList];
  },
};
