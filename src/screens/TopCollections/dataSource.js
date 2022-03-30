export const chart = {
	series: [],
	options: {
		chart: {
			type: "bar",
			width: 100,
			height: 30,
			sparkline: {
				enabled: true,
			},
		},
		plotOptions: {
			bar: {
				columnWidth: "80%",
			},
		},
		// labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
		xaxis: {
			crosshairs: {
				width: 1,
			},
		},
		tooltip: {
			custom: function ({ series, seriesIndex, dataPointIndex, w }) {
				return (
					'<div class="arrow_box" style="padding:10px";>' +
					"<span> " +
					series[seriesIndex][dataPointIndex] +
					" ETH   </span>" +
					"</div>"
				);
			},
			fixed: { enabled: false },
			x: { show: false },
			shared: false,
			y: {
				title: {
					formatter: function (seriesName, series) {
						return "";
					},
				},
			},
			marker: { show: false },
		},
	},
};
export const dataSource = [
	{
		title: "Collection’s name",
		marketCap: "$23,167,292.30",
		percentageUp: "+2.2%",
		averagePrice: {
			price: "372,284 ETH",
			percentage: "+93.32%",
		},
		floor: {
			value: "14",
			percentage: "+0.32%",
		},
		sales: {
			value: "1",
			percentage: "-0.02%",
		},
	},
	{
		title: "Collection’s name",
		marketCap: "$23,167,292.30",
		percentageUp: "+2.2%",
		averagePrice: {
			price: "372,284 ETH",
			percentage: "+93.32%",
		},
		floor: {
			value: "14",
			percentage: "+0.32%",
		},
		sales: {
			value: "1",
			percentage: "-0.02%",
		},
	},
	{
		title: "Collection’s name",
		marketCap: "$23,167,292.30",
		percentageUp: "+2.2%",
		averagePrice: {
			price: "372,284 ETH",
			percentage: "+93.32%",
		},
		floor: {
			value: "14",
			percentage: "+0.32%",
		},
		sales: {
			value: "1",
			percentage: "-0.02%",
		},
	},
	{
		title: "Collection’s name",
		marketCap: "$23,167,292.30",
		percentageUp: "+2.2%",
		averagePrice: {
			price: "372,284 ETH",
			percentage: "+93.32%",
		},
		floor: {
			value: "14",
			percentage: "+0.32%",
		},
		sales: {
			value: "1",
			percentage: "-0.02%",
		},
	},
	{
		title: "Collection’s name",
		marketCap: "$23,167,292.30",
		percentageUp: "+2.2%",
		averagePrice: {
			price: "372,284 ETH",
			percentage: "+93.32%",
		},
		floor: {
			value: "14",
			percentage: "+0.32%",
		},
		sales: {
			value: "1",
			percentage: "-0.02%",
		},
	},
	{
		title: "Collection’s name",
		marketCap: "$23,167,292.30",
		percentageUp: "+2.2%",
		averagePrice: {
			price: "372,284 ETH",
			percentage: "+93.32%",
		},
		floor: {
			value: "14",
			percentage: "+0.32%",
		},
		sales: {
			value: "1",
			percentage: "-0.02%",
		},
	},
];
