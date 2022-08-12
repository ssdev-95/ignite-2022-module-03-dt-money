import * as z from 'zod'
export { zodResolver } from '@hookform/resolvers/zod'

export const searchFormSchema = z.object({
	query: z.string()
})

export type SearchFormInputs = z.infer<typeof searchFormSchema>

export const newTransactionFormSchema = z.object({
	description:z.string(),
	ammount:z.number(),
	category:z.string(),
	type: z.enum(['income','expense'])
})


export type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>
