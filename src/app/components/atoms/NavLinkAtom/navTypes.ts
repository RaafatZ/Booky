export interface Category {
    icon?: string
    title?: string
    items: string[]
    styleClass?: string
}

export interface NavItem {
    id: string
    title?: string
    description?: string
    categories: Category[]
    styleClass?: string
}