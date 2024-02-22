export interface CreateProductDto {
  barcode: number
  name: string
  description: string
  new_price: number
  prescription_required: boolean
  is_fractionable: boolean
  created_by: number
  drug_id: number
  presentation_id: number
  brand_id: number
  category_id: number
}

export interface CategoryForm {
  id: number
  name: string
}

export interface PresentationForm {
  id: number
  name: string
}

export interface BrandForm {
  id: number
  name: string
}

export interface DrugForm{
  id: number
  name: string
  concentration: string
}