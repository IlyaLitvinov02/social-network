import moment from "moment";

export const groupByDate = array => [{}, ...array].reduce((obj, item) => {
	const date = moment(new Date(item.addedAt)).format('MMMM [the] Do');
	const objDay = obj[date] ? obj[date] : [];
	return {
		...obj,
		[date]: [...objDay, item]
	};
});