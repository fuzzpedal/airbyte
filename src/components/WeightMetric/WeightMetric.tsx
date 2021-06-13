import styles from './styles'


type WeightMetricProps = {
	weight: number|undefined
}

export const WeightMetric = (props: WeightMetricProps) => {
	const { weight } = props

	const radius = 100
	const stroke = 20
	const normalizedRadius = radius - stroke * 2
	const circumference = normalizedRadius * 2 * Math.PI

	let w = '-'
	let strokeDashoffset = 0
	if (weight) {
		const progress = weight / 100
		strokeDashoffset = circumference - progress / 100 * circumference;
		w = `${Math.round(weight) / 10}kg`
	}


	return (
		<div style={styles.root}>
			<div style={styles.valueContainer}>
				<p style={styles.value}>{w}</p>
			</div>

				<div style={styles.svgContainer}>
				<svg
					style={styles.svg}						
					height={radius * 2}
					width={radius * 2}
					>
					<circle
						stroke="#eee"
						fill="transparent"
						strokeWidth={stroke}
						r={ normalizedRadius }
						cx={ radius }
						cy={ radius }
						/>
					{weight && (
					<circle
						stroke="#49c"
						fill="transparent"
						strokeWidth={stroke}
						strokeDasharray={`${circumference} ${circumference}`}
						style={{strokeDashoffset}}
						stroke-width={stroke}
						r={normalizedRadius}
						cx={radius}
						cy={radius}
						/>
					)}
				</svg>
				</div>

		</div>

	)
}