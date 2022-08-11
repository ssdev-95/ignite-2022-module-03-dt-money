export function formatAmmount(ammount:number) {
	return new Intl
	  .NumberFormat('en-Latn-US', {
			style: 'currency',
			currency: 'dol',
			currencySign: 'standard',
			currencyDisplay: 'narrowSymbol',
			signDisplay: 'auto'
		})
		.format(ammount)
		.replace('DOL', '$')
}

export function formatDate(timestamp:string) {
	return new Intl
	  .DateTimeFormat('en-US', { dateStyle:'medium'})
	  .format(new Date(timestamp))
}
