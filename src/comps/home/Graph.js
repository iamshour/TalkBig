import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js"
import { getstats } from "context/actions"
import { GlobalContext } from "context/globalContext"
import { useContext, useEffect } from "react"
import { Line } from "react-chartjs-2"

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
)

export default function Graph() {
	const [{ stats }, dispatch] = useContext(GlobalContext)
	console.log(stats)

	useEffect(() => {
		getstats(dispatch)
	}, [dispatch])

	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: "bottom",
			},
		},
	}

	const data = {
		labels: stats?.map((item) => {
			return item?.month
		}),
		datasets: [
			{
				label: "Monthly user interactions with online chatbots",
				data: stats?.map((item) => {
					return item?.users
				}),
				borderColor: "rgb(53, 162, 235)",
				backgroundColor: "rgba(53, 162, 235, 0.5)",
			},
		],
	}

	return (
		<div className='chart-container'>
			<Line options={options} data={data} />
		</div>
	)
}
