import type { ColumnDef } from '@tanstack/react-table'

export type AnimationProps<T> = Partial<T> &
	(
		| { direction: 'left' | 'right' | 'up' | 'down'; delay: number }
		| { direction?: never; delay?: never }
	)

export type DataTablePaginationProps =
	| { disablePagination?: false; pageSize?: number }
	| { disablePagination: true; pageSize: number }

export type DataTableFilterOptions = { label: string; value: string }

export type DataTableFilters = {
	id: string
	label: string
} & (
	| { type: 'search'; options?: never }
	| { type: 'select' | 'search-select'; options: DataTableFilterOptions[] }
)

export type DataTableProps<TData, TValue> = {
	data: TData[]
	loading?: boolean
	pageSize?: number
	totalCount: number
	disableSearch?: boolean
	disableDateRange?: boolean
	filters?: DataTableFilters[]
	disableClearFilters?: boolean
	disableColumnVisibility?: boolean
	columns: ColumnDef<TData, TValue>[]
} & DataTablePaginationProps
