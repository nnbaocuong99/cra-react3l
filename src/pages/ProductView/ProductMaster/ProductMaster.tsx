import { Add16, Download16, OverflowMenuHorizontal16, Settings16, SettingsAdjust16 } from "@carbon/icons-react";
import { ColumnProps } from "antd/lib/table";
import PageHeader from "components/PageHeader/PageHeader";
import { BrandFilter } from "models/Brand";
// import { listService } from "services/list-service";
import { Product, ProductFilter } from "models/Product";
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { IdFilter } from "react3l-advanced-filters";
import { ActionBarComponent, AdvanceIdFilterMaster, AdvanceMultipleIdFilterMaster, Button, LayoutCell, LayoutHeader, OneLineText, Pagination, StandardTable, StatusLine, TagFilter } from "react3l-ui-library";
import AdvanceDateRangFilterMaster from "react3l-ui-library/build/components/AdvanceFilterMaster/AdvanceDateRangFilterMaster/AdvanceDateRangFilterMaster";
import InputSearch from "react3l-ui-library/build/components/Input/InputSearch";
import { productRepository } from "repositories/product-repository";
import { detailService } from "services/detail-service";
import { filterService } from "services/filter-service";
import { listService } from "services/list-service";
import { queryStringService } from "services/query-string-service";
import { tableService } from "services/table-service";
import nameof from "ts-nameof.macro";
import ProductDetail from "../ProductDetail/ProductDetail";
import ProductAdvanceFilter from "./ProductAdvanceFilter";
import './ProductMaster.scss';



const ProductMaster = () => {
  const [translate] = useTranslation();
  const [modelFilter, dispatch] =
    queryStringService.useQueryString(ProductFilter, { skip: 0, take: 10 });
  const [visible, setVisible] = React.useState<boolean>(false);

  const {
    value: filter,
    handleChangeSelectFilter,
    handleChangeMultipleSelectFilter,
    handleChangeDateFilter,
    handleChangeDateMasterFilter,
    handleChangeAllFilter,
  } = filterService.useFilter(modelFilter, dispatch);


  const {
    list,
    count,
    loadingList,
    handleResetList,
    handleLoadList,
  } = listService.useList(productRepository.list, productRepository.count, filter);

  const {
    handleTableChange,
    handlePagination
  } = tableService.useTable(filter, handleChangeAllFilter);

  const {
    handleBulkAction,
    canBulkAction,
    rowSelection,
    selectedRowKeys,
    setSelectedRowKeys
  } = listService.useRowSelection(productRepository.export, productRepository.bulkDelete, null, null, null, handleResetList)
  const columns: ColumnProps<any>[] = useMemo(
    () => [
      {
        title: <LayoutHeader orderType="left" title={translate("products.name")} />,
        dataIndex: "name",
        key: "name",
        sorter: true,
        width: 135,
        fixed: "left",
        ellipsis: true,
        render(...[name, content]) {
          return (
            <LayoutCell orderType="left" tableSize="medium">

              <OneLineText value={name} />
            </LayoutCell>
          );
        },
      },
      {
        title: <LayoutHeader orderType="left" title={translate("products.category")} />,
        dataIndex: "category",
        key: "category",
        sorter: true,
        width: 135,
        fixed: "left",
        ellipsis: true,
        render(...[category]) {
          return (
            <LayoutCell orderType="left" tableSize="medium">

              <OneLineText value={category?.name} />
            </LayoutCell>
          );
        },
      },
      {
        title: <LayoutHeader orderType="left" title={translate("products.productProductGroupingMappings")} />,
        dataIndex: "productProductGroupingMappings",
        key: "productProductGroupingMappings",
        sorter: true,
        width: 135,
        fixed: "left",
        ellipsis: true,
        render(...[productProductGroupingMappings]) {
          return (
            <LayoutCell orderType="left" tableSize="medium">
              <div>
                {productProductGroupingMappings &&
                  productProductGroupingMappings?.length > 0
                  ? productProductGroupingMappings.map(
                    (productGrouping: any, index: number) => {
                      return (
                        <span key={index}>
                          {productGrouping?.productGrouping &&
                            <OneLineText value={productGrouping?.productGrouping?.name} />}
                          {index <
                            productProductGroupingMappings.length - 1 && (
                              <span>, </span>
                            )}
                        </span>
                      );
                    }
                  )
                  : " "}
              </div>

            </LayoutCell>
          );
        },
      },
      {
        title: <LayoutHeader orderType="left" title={translate("products.productType")} />,
        dataIndex: "productType",
        key: "productType",
        sorter: true,
        width: 135,
        fixed: "left",
        ellipsis: true,
        render(...[productType]) {
          return (
            <LayoutCell orderType="left" tableSize="medium">

              <OneLineText value={productType?.name} />
            </LayoutCell>
          );
        },
      },
      {
        title: <LayoutHeader orderType="left" title="Action" />,
        key: "status",
        width: 150,
        fixed: "right",
        ellipsis: true,
        dataIndex: "status",
        render(...[status]) {
          return (
            <LayoutCell orderType="left" tableSize={'medium'}>
              <StatusLine value={status?.name} active={status.id === 1 ? true : false} />
            </LayoutCell>
          );
        },
      },
    ],
    [translate]
  );

  const {
    model,
    dispatch: dispatchModal,
    isOpenDetailModal,
    loadingModel,
    handleOpenDetailModal,
    handleSaveModel,
    handleCloseDetailModal,
    handleChangeSingleField,
    handleChangeSelectField,
  } = detailService.useDetailModal(
    Product,
    productRepository.get,
    productRepository.save,
    handleLoadList
  );

  const handleCancel = React.useCallback(() => {
    setVisible(false);
  }, []);




  return (
    <React.Fragment>
      <div className="page-content">
        <PageHeader
          title="Sản phẩm"
          breadcrumbItems={["Danh mục sản phẩm", "Sản phẩm"]}
        />
        <div className="page page-master m-t--lg m-l--sm m-r--xxl m-b--xxs" style={{ height: "100%" }}>
          <div className="page-master__title p-l--sm p-t--sm p-r--sm p-b--lg">
            Danh sách sản phẩm
          </div>
          <div className="page-master__content" >
            <div className="page-master__filter-wrapper d-flex align-items-center justify-content-between">
              <div className="page-master__filter d-flex align-items-center justify-content-start">
                <div className="">
                  <AdvanceIdFilterMaster
                    value={filter?.brandId?.equal}
                    placeHolder={"Tìm kiếm..."}
                    classFilter={BrandFilter}
                    searchProperty={"name"}
                    onChange={handleChangeSelectFilter({ fieldName: 'brand', fieldType: 'equal', classFilter: IdFilter })}
                    getList={productRepository.filterListBrand}
                    title={"Nhã hiệu"}
                  />
                </div>
                <div className="">
                  <AdvanceMultipleIdFilterMaster
                    values={filter?.supplierId?.in}
                    placeHolder={"Tìm kiếm..."}
                    classFilter={BrandFilter}
                    searchProperty={'name'}
                    onChange={handleChangeMultipleSelectFilter({ fieldName: 'supplier', fieldType: 'in', classFilter: IdFilter })}
                    getList={productRepository.filterListBrand}
                    title={'Nhà cung cấp'}
                  />
                </div>

                <div className="">
                  <AdvanceDateRangFilterMaster
                    title={"Ngày giao hàng"}
                    onChange={handleChangeDateMasterFilter({ fieldName: 'createdAt', fieldType: ['greaterEqual', 'lessEqual'] })}
                    activeItem={filter[`createdAtSelected`]}
                    value={[modelFilter?.createdAt?.greaterEqual, modelFilter?.createdAt?.lessEqual]}
                  />
                </div>

                <div className="">
                  <AdvanceIdFilterMaster
                    value={filter?.productTypeId?.equal}
                    placeHolder={"Tìm kiếm..."}
                    classFilter={BrandFilter}
                    searchProperty={"name"}
                    onChange={handleChangeSelectFilter({ fieldName: 'productType', fieldType: 'equal', classFilter: IdFilter })}
                    getList={productRepository.filterListProductType}
                    title={"Loại sản phẩm"}
                  />
                </div>

                <div className="page-master__filter-action d-flex align-items-center">
                  <Button type="icon-only-ghost" icon={<SettingsAdjust16 />} onClick={() => setVisible(true)} className="btn--xl" />
                  <InputSearch
                    valueFilter={filter}
                    searchProperty={"name"}
                    classFilter={ProductFilter}
                    placeHolder="Search..."
                    getList={productRepository.filterListProductType}
                    onChange={handleChangeSelectFilter({ fieldName: 'search', fieldType: 'equal', classFilter: IdFilter })}
                  />

                </div>

              </div>
              <div className="page-master__actions  d-flex align-items-center justify-content-start">
                <div className="page-master__filter-action d-flex align-items-center">
                  <Button type="icon-only-ghost" icon={<OverflowMenuHorizontal16 />} className="btn--xl" />
                  <Button type="icon-only-ghost" icon={<Download16 />} className="btn--xl" />
                  <Button type="icon-only-ghost" icon={<Settings16 />} className="btn--xl" />
                  <Button type="primary" className="btn--lg" icon={<Add16 />} onClick={() => handleOpenDetailModal(null)}>
                    {translate("general.actions.create")}
                  </Button>
                </div>
              </div>

            </div>
            <div className="page-master__tag-filter" >
              <TagFilter value={filter} translate={translate} keyTranslate={"product"} handleChangeFilter={handleChangeAllFilter} onClear={(value: any) => { return 0 }} />
            </div>
          </div>
          <div className="page-master__content-table" >
            <ActionBarComponent
              selectedRowKeys={selectedRowKeys}
              setSelectedRowKeys={setSelectedRowKeys}
            >
              <Button disabled={!canBulkAction} onClick={() => handleBulkAction(selectedRowKeys)}>Xóa</Button>
            </ActionBarComponent>
            <StandardTable
              rowKey={nameof(list[0].id)}
              columns={columns}
              dataSource={list}
              isDragable={true}
              isExpandable={true}
              tableSize={"medium"}
              onChange={handleTableChange}
              loading={loadingList}
              rowSelection={rowSelection}
            />

            <Pagination
              skip={filter?.skip}
              take={filter?.take}
              total={count}
              onChange={handlePagination}
              canChangePageSize={false}
            />
          </div>
        </div>
      </div>
      {
        visible &&
        <ProductAdvanceFilter
          visible={visible}
          handleClose={handleCancel}
          visibleFooter={true}
          loading={false}
          size={'sm'}
          handleChangeSelectFilter={handleChangeSelectFilter}
          handleChangeDateFilter={handleChangeDateFilter}
          filter={filter}
          setVisible={setVisible}
          handleChangeAllFilter={handleChangeAllFilter}
        />
      }

      {isOpenDetailModal && (
        <ProductDetail
          model={model}
          visible={isOpenDetailModal}
          handleSave={handleSaveModel}
          handleCancel={handleCloseDetailModal}
          onChangeSimpleField={handleChangeSingleField}
          onChangeObjectField={handleChangeSelectField}
          dispatch={dispatchModal}
          loading={loadingModel}
          visibleFooter={true}
        />
      )}
    </React.Fragment>
  );
};

export default ProductMaster;
