import { BrandFilter } from "models/Brand";
import { Product } from "models/Product";
import React from "react";
import { FormItem, InputText, Modal, Select } from "react3l-ui-library";
import { ModalCustomProps } from "react3l-ui-library/build/components/Modal/Modal";
import { productRepository } from "repositories/product-repository";
import { ModelAction } from "services/detail-service";

interface ProductDetailProps extends ModalCustomProps {
    model: Product;
    onChangeSimpleField: (config: {
        fieldName: string;
    }) => (fieldValue: any) => void;
    onChangeObjectField?: (config: {
        fieldName: string;
    }) => (fieldIdValue: number, fieldValue?: any) => void;
    onChangeTreeObjectField?: (
        config: { fieldName: string },
        callback?: (id: number) => void
    ) => (list: any[]) => void;
    dispatch?: React.Dispatch<ModelAction<Product>>;
    loading?: boolean;
}

function ProductDetail(props: ProductDetailProps) {
    // const [translate] = useTranslation();
    const {
        model,
        onChangeSimpleField,
        onChangeObjectField,
        visible,
        handleSave,
        handleCancel,
    } = props;

    return (
        <Modal
            visible={visible}
            handleSave={handleSave}
            handleCancel={handleCancel}
            visibleFooter={true}
            size="medium"
            title="Modal Title"
        >
            <div style={{ marginBottom: "16px", marginTop: 16 }}>
                <FormItem message={model.errors?.name}>
                    <InputText
                        label={"Tên sản phẩm"}
                        placeHolder={"Nhập tên sản phẩm..."}
                        value={model?.name}
                        onChange={onChangeSimpleField({ fieldName: "name" })}
                    />
                </FormItem>
            </div>
            <div
                style={{
                    marginBottom: "16px",
                    display: "flex",
                }}
            >
                <div style={{ paddingRight: 8, width: "50%" }}>
                    <FormItem message={model.errors?.code}>
                        <InputText
                            label={"Mã sản phẩm"}
                            placeHolder={"Nhập mã sản phẩm..."}
                            value={model?.code}
                            onChange={onChangeSimpleField({ fieldName: "code" })}
                        />
                    </FormItem>
                </div>

                <div style={{ paddingLeft: 8, width: "50%" }}>
                    <FormItem message={model.errors?.brand}>
                        <Select
                            placeHolder={"Chọn nhãn hiệu"}
                            value={model?.brand}
                            searchProperty={"name"}
                            onChange={onChangeObjectField({ fieldName: "brand" })}
                            getList={productRepository.singleListBrand}
                            classFilter={BrandFilter}
                            label={"Nhãn hiệu"}
                        />
                    </FormItem>
                </div>
            </div>
        </Modal>
    );
}

export default ProductDetail;
