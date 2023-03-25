import { ProductFilter } from "models/Product";
import React from "react";
import { IdFilter, StringFilter } from "react3l-advanced-filters";
import { AdvanceStringFilter, AdvanceTreeFilter } from "react3l-ui-library";
import AdvanceIdFilter from "react3l-ui-library/build/components/AdvanceFilter/AdvanceIdFilter";
import AdvanceIdMultipleFilter from "react3l-ui-library/build/components/AdvanceFilter/AdvanceIdMultipleFilter";
import AdvanceDateRangFilterMaster from "react3l-ui-library/build/components/AdvanceFilterMaster/AdvanceDateRangFilterMaster/AdvanceDateRangFilterMaster";
import Drawer, {
    DrawerProps
} from "react3l-ui-library/build/components/Drawer/Drawer";
import { Reducer } from "redux";
import { productRepository } from "repositories/product-repository";
import {
    FilterAction,
    filterReducer,
    filterService
} from "services/filter-service";

export interface ProductFilterProps extends DrawerProps {
    handleChangeSelectFilter?: any;
    handleChangeDateFilter?: any;
    filter?: any;
    setVisible?: any;
    handleChangeAllFilter?: any;
}

const ProductAdvanceFilter = (props: ProductFilterProps) => {
    const { visible, filter, setVisible, handleChangeAllFilter, handleClose } =
        props;

    const [modelFilter, setModelFilter] = React.useReducer<
        Reducer<ProductFilter, FilterAction<ProductFilter>>
    >(filterReducer, filter);

    const {
        handleChangeInputFilter,
        handleChangeSelectFilter,
        handleChangeMultipleSelectFilter,
        handleChangeDateMasterFilter,
        handleChangeSingleTreeFilter,
    } = filterService.useFilter(filter, setModelFilter);

    const handleSaveModelFilter = React.useCallback(() => {
        handleChangeAllFilter(modelFilter);
        setVisible(false);
    }, [handleChangeAllFilter, modelFilter, setVisible]);

    const handleClearModelFilter = React.useCallback(() => {
        setModelFilter({
            type: 0,
            payload: new ProductFilter(),
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
        >
            <div
                style={{
                    display: "flex",
                    marginTop: 16,
                }}
            >
                <AdvanceStringFilter
                    label="Tên sản phẩm"
                    suffix="Kg"
                    showCount={true}
                    maxLength={100}
                    value={modelFilter?.name?.contain}
                    onChange={handleChangeInputFilter({
                        fieldName: "name",
                        fieldType: "contain",
                        classFilter: StringFilter,
                    })}
                    placeHolder={"Nhập tên sp..."}
                />
            </div>

            <div
                style={{
                    display: "flex",
                    marginTop: 16,
                }}
            >
                <AdvanceIdFilter
                    value={modelFilter[`brandValue`]}
                    placeHolder={"Select Organization"}
                    classFilter={ProductFilter}
                    onChange={handleChangeSelectFilter({
                        fieldName: "brand",
                        fieldType: "equal",
                        classFilter: IdFilter,
                    })}
                    getList={productRepository.filterListBrand}
                    label={"Nhã hiệu"}
                />
            </div>
            <div
                style={{
                    display: "flex",
                    marginTop: 16,
                }}
            >
                <AdvanceIdMultipleFilter
                    values={modelFilter[`supplierValue`]}
                    placeHolder={"Select supplier"}
                    classFilter={ProductFilter}
                    onChange={handleChangeMultipleSelectFilter({
                        fieldName: "supplier",
                        fieldType: "equal",
                        classFilter: IdFilter,
                    })}
                    getList={productRepository.filterListBrand}
                    label={"Nhà cung cấp"}
                />
            </div>
            <div
                style={{
                    display: "flex",
                    marginTop: 16,
                }}
            >
                <AdvanceDateRangFilterMaster
                    title={"Ngày giao hàng"}
                    onChange={handleChangeDateMasterFilter({
                        fieldName: "createdAt",
                        fieldType: ["greaterEqual", "lessEqual"],
                    })}
                    activeItem={modelFilter[`createdAtSelected`]}
                    value={[
                        modelFilter?.createdAt?.greaterEqual,
                        modelFilter?.createdAt?.lessEqual,
                    ]}
                    type={1}
                />
            </div>
            <div
                style={{
                    display: "flex",
                    marginTop: 16,
                }}
            >
                <AdvanceTreeFilter
                    checkable={true}
                    placeHolder={"Select organization"}
                    classFilter={ProductFilter}
                    onChange={handleChangeMultipleSelectFilter({
                        fieldName: "organization",
                        fieldType: "in",
                        classFilter: IdFilter,
                    })}
                    checkStrictly={true}
                    listItem={modelFilter && modelFilter[`categoryValue`]}
                    getTreeData={productRepository.filterListCategory}
                    isUsingSearch={true}
                    label={"Danh mục"}
                    selectable={false}
                />
            </div>
            <div
                style={{
                    display: "flex",
                    marginTop: 16,
                }}
            >
                <AdvanceTreeFilter
                    placeHolder={"Select category"}
                    classFilter={ProductFilter}
                    onChange={handleChangeSingleTreeFilter({
                        fieldName: "category",
                        fieldType: "equal",
                        classFilter: IdFilter,
                    })}
                    checkStrictly={true}
                    item={modelFilter && modelFilter[`categoryValue`]}
                    getTreeData={productRepository.filterListCategory}
                    isUsingSearch={true}
                    label={"Danh mục"}
                />
            </div>

            <div
                style={{
                    display: "flex",
                    marginTop: 16,
                }}
            >
                <AdvanceIdFilter
                    value={modelFilter[`productTypeValue`]}
                    placeHolder={"Select productType"}
                    classFilter={ProductFilter}
                    onChange={handleChangeSelectFilter({
                        fieldName: "productType",
                        fieldType: "equal",
                        classFilter: IdFilter,
                    })}
                    getList={productRepository.filterListProductType}
                    label={"Loại sản phẩm"}
                />
            </div>
        </Drawer>
    );
};

export default ProductAdvanceFilter;
