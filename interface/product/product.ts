export interface CreateProductDto {
    name: string
    description: string
    additional_info: string
    price: number
    prescription_required: boolean
    is_medicine: boolean
    is_fractionable: boolean
    drug_id: number
    laboratoryId: number
    presentation_id: number
    brand_id: number
    type_id: number
}