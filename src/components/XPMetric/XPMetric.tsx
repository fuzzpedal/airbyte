import styles from './styles'


type XPMetricProps = {
	xp: number|undefined
}

export const XPMetric = (props: XPMetricProps) => {
	const { xp } = props

	return (
		<div style={styles.root}>
			Base XP {xp || '-'}
		</div>
	)
}
