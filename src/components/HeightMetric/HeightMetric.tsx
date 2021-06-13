import styles from './styles'


type HeightMetricProps = {
	height: number|undefined
}

export const HeightMetric = (props: HeightMetricProps) => {
	const { height } = props

	const h = height ? `${Math.round(height) / 10}m` : '-'

	return (
		<div style={styles.root}>
			{h}
		</div>
	)
}
