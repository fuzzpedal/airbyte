const styles = {
	root: {
		boxShadow: '0px 0px 10px #ccc',
		borderRadius: 10,
		color: '#444',
		padding: 10,
		position: 'relative',
		width: 200,
		height: 200,
	},

	valueContainer: {
		display: 'flex',
		height: 200,
		alignItems: 'center',
	},

	value: {
		fontWeight: 'bold',
		fontSize: 24,
		textAlign: 'center',
		flex: 1,
	},

	svgContainer: {
		position: 'absolute',
		top: 10,
		left: 10,
	},

	svg: {
		transform: 'rotate(-90deg)',
	}
} as const


export default styles
