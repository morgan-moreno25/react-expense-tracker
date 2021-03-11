/**
 *
 * @param {number} balance
 * @returns {string} the balance argument converted into a displayable string
 */
export default function stringifyBalance(balance) {
	var balanceAsCents = balance * 100;

	if (balanceAsCents % 100 === 0) {
		return `$${balance}.00`;
	} else {
		const change = balanceAsCents % 100;
		const dollars = balanceAsCents - change;
		if (change < 10) {
			return `$${dollars}.0${change}`;
		}

		return `$${dollars}.${change}`;
	}
}
