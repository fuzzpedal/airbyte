import styles from './styles'


type HeightMetricProps = {
	height: number
}

export const HeightMetric = (props: HeightMetricProps) => {
	const { height } = props

	return (
		<div style={styles.root}>
			Height {Math.round(height) / 10}m
		</div>
	)
}
