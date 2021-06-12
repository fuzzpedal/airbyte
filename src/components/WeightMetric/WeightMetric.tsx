import styles from './styles'


type WeightMetricProps = {
	weight: number
}

export const WeightMetric = (props: WeightMetricProps) => {
	const { weight } = props

	return (
		<div style={styles.root}>
			Weight {Math.round(weight) /10}kg 
		</div>
	)
}