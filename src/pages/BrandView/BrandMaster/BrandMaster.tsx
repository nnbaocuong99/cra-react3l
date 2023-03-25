import { Add16, Download16, OverflowMenuHorizontal16, Settings16, SettingsAdjust16 } from "@carbon/icons-react";
import { ColumnProps } from "antd/lib/table";
import PageHeader from "components/PageHeader/PageHeader";
// import { listService } from "services/list-service";
import { Brand, BrandFilter } from "models/Brand";
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { IdFilter } from "react3l-advanced-filters";
import { ActionBarComponent, AdvanceIdFilterMaster, Button, LayoutCell, LayoutHeader, OneLineText, Pagination, StandardTable, StatusLine, TagFilter } from "react3l-ui-library";
import InputSearch from "react3l-ui-library/build/components/Input/InputSearch";
import { brandRepository } from "repositories/brand-repository";
import { detailService } from "services/detail-service";
import { filterService } from "services/filter-service";
import { listService } from "services/list-service";
import { queryStringService } from "services/query-string-service";
import { tableService } from "services/table-service";
import nameof from "ts-nameof.macro";
import BrandDetail from "../BrandDetail/BrandDetail";
import BrandAdvanceFilter from "./BrandAdvanceFilter";
import './BrandMaster.scss';



const BrandMaster = () => {
  const [translate] = useTranslation();
  const [modelFilter, dispatch] =
    queryStringService.useQueryString(BrandFilter, { skip: 0, take: 10 });
  const [visible, setVisible] = React.useState<boolean>(false);

  const {
    value: filter,
    handleChangeSelectFilter,
    handleChangeDateFilter,
    handleChangeAllFilter,
  } = filterService.useFilter(modelFilter, dispatch);


  const {
    list,
    count,
    loadingList,
    handleResetList,
    handleLoadList,
  } = listService.useList(brandRepository.list, brandRepository.count, filter);

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
  } = listService.useRowSelection(brandRepository.export, brandRepository.bulkDelete, null, null, null, handleResetList);



  const columns: ColumnProps<any>[] = useMemo(
    () => [
      {
        title: <LayoutHeader orderType="left" title={translate("brands.code")} />,
        dataIndex: "code",
        key: "code",
        sorter: true,
        width: 135,
        fixed: "left",
        ellipsis: true,
        render(...[code]) {
          return (
            <LayoutCell orderType="left" tableSize="medium">

              <OneLineText value={code} />
            </LayoutCell>
          );
        },
      },
      {
        title: <LayoutHeader orderType="left" title={translate("brands.name")} />,
        dataIndex: "name",
        key: "name",
        sorter: true,
        width: 135,
        fixed: "left",
        ellipsis: true,
        render(...[name]) {
          return (
            <LayoutCell orderType="left" tableSize="medium">

              <OneLineText value={name} />
            </LayoutCell>
          );
        },
      },

      {
        title: <LayoutHeader orderType="left" title={translate("brands.description")} />,
        dataIndex: "description",
        key: "description",
        sorter: true,
        width: 135,
        fixed: "left",
        ellipsis: true,
        render(...[description]) {
          return (
            <LayoutCell orderType="left" tableSize="medium">

              <OneLineText value={description} />
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
    Brand,
    brandRepository.get,
    brandRepository.save,
    handleLoadList
  );

  const handleCancel = React.useCallback(() => {
    setVisible(false);
  }, []);




  return (
    <React.Fragment>
      <div className="page-content">
        <PageHeader
          title="Nhãn hiệu"
          breadcrumbItems={["Đối tác", "Nhãn hiệu"]}
        />
        <div className="page page-master m-t--lg m-l--sm m-r--xxl m-b--xxs" style={{ height: "100%" }}>
          <div className="page-master__title p-l--sm p-t--sm p-r--sm p-b--lg">
            Danh sách nhãn hiệu
          </div>
          <div className="page-master__content" >
            <div className="page-master__filter-wrapper d-flex align-items-center justify-content-between">
              <div className="page-master__filter d-flex align-items-center justify-content-start">
                <div className="">

                  <AdvanceIdFilterMaster
                    value={filter?.statusId?.equal}
                    placeHolder={"Tìm kiếm..."}
                    classFilter={BrandFilter}
                    onChange={handleChangeSelectFilter({ fieldName: 'status', fieldType: 'equal', classFilter: IdFilter })}
                    getList={brandRepository.filterListStatus}
                    title={"Trạng thái"}
                  />
                </div>
                <div className="page-master__filter-action d-flex align-items-center">
                  <Button type="icon-only-ghost" icon={<SettingsAdjust16 />} onClick={() => setVisible(true)} className="btn--xl" />
                  <InputSearch
                    valueFilter={filter}
                    searchProperty={"name"}
                    classFilter={BrandFilter}
                    placeHolder="Search..."
                    getList={brandRepository.filterListStatus}
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
              <TagFilter value={filter} translate={translate} keyTranslate={"brand"} handleChangeFilter={handleChangeAllFilter} onClear={(value: any) => { return 0 }} />
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
        <BrandAdvanceFilter
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
        <BrandDetail
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

export default BrandMaster;
