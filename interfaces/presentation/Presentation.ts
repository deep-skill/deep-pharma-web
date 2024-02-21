export interface SearchPresentation {
    id: number,
    name: string
    products:
    [
        {
            id: number,
            name: string,
            description: string,
            brand: {
                id: number,
                name: string
            },
            category: {
                id: number,
                name: string
            },
            drug: {
                id: number,
                name: string,
                therapeutic_function: string
            },
            lots:
            [
                {
                    id: number,
                    updated_stock: number
                }
            ]
        }
    ]
}