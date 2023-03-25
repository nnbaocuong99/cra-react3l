import { BrandFilter } from "models/Brand";
import React from "react";
import { IdFilter, StringFilter } from "react3l-advanced-filters";
import { AdvanceStringFilter } from "react3l-ui-library";
import AdvanceIdFilter from "react3l-ui-library/build/components/AdvanceFilter/AdvanceIdFilter";
import Drawer, {
    DrawerProps
} from "react3l-ui-library/build/components/Drawer/Drawer";
import { Reducer } from "redux";
import { brandRepository } from "repositories/brand-repository";
import {
    FilterAction,
    filterReducer,
    filterService
} from "services/filter-service";

export interface BrandFilterProps extends DrawerProps {
    handleChangeSelectFilter?: any;
    handleChangeDateFilter?: any;
    filter?: any;
    setVisible?: any;
    handleChangeAllFilter?: any;
}

const BrandAdvanceFilter = (props: BrandFilterProps) => {
    const { visible, filter, setVisible, handleChangeAllFilter, handleClose } =
        props;

    const [modelFilter, setModelFilter] = React.useReducer<
        Reducer<BrandFilter, FilterAction<BrandFilter>>
    >(filterReducer, filter);

    const {
        handleChangeInputFilter,
        handleChangeSelectFilter,
    } = filterService.useFilter(filter, setModelFilter);

    const handleSaveModelFilter = React.useCallback(() => {
        handleChangeAllFilter(modelFilter);
        setVisible(false);
    }, [handleChangeAllFilter, modelFilter, setVisible]);

    const handleClearModelFilter = React.useCallback(() => {
        setModelFilter({
            type: 0,
            payload: new BrandFilter(),
        });
    }, [setModelFilter]);

    return (
        <Drawer
            visible={visible}
            handleSave={handleSaveModelFilter}
            handleCancel={handleClearModelFilter}
            handleClose={handleClose}
            visibleFooter={true}
            loading={false}
            size={"sm"}
            title="Tìm kiếm"
            keyButtonCancel={'Clear'}
        >
            <div
                style={{
                    display: "flex",
                    marginTop: 16,
                }}
            >
                <AdvanceStringFilter
                    label="Mã nhãn hiệu"
                    showCount={true}
                    maxLength={100}
                    value={modelFilter?.code?.contain}
                    onChange={handleChangeInputFilter({
                        fieldName: "code",
                        fieldType: "contain",
                        classFilter: StringFilter,
                    })}
                    placeHolder={"Nhập mã..."}
                />
            </div>

            <div
                style={{
                    display: "flex",
                    marginTop: 16,
                }}
            >
                <AdvanceStringFilter
                    label="Tên nhãn hiệu"
                    showCount={true}
                    maxLength={100}
                    value={modelFilter?.name?.contain}
                    onChange={handleChangeInputFilter({
                        fieldName: "name",
                        fieldType: "contain",
                        classFilter: StringFilter,
                    })}
                    placeHolder={"Nhập tên ..."}
                />
            </div>

            <div
                style={{
                    display: "flex",
                    marginTop: 16,
                }}
            >
                <AdvanceIdFilter
                    value={modelFilter[`statusValue`]}
                    placeHolder={"Chọn trạng thái"}
                    classFilter={BrandFilter}
                    onChange={handleChangeSelectFilter({
                        fieldName: "status",
                        fieldType: "equal",
                        classFilter: IdFilter,
                    })}
                    getList={brandRepository.filterListStatus}
                    label={"Trạng thái"}
                />
            </div>
        </Drawer>
    );
};

export default BrandAdvanceFilter;
