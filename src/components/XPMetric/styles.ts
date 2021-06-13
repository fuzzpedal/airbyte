const styles = {
	root: {
		boxShadow: '0px 0px 10px #ccc',
		borderRadius: 10,
		color: '#444',
		padding: 10,
		position: 'relative',
		width: 200,
		height: 200,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},

	svg: {
		width: 150,
	},

	starContainer: {
		position: 'relative',
		width: 100,
		height: 100,
	},

	star: {
		width: 100,
		height: 100,
		position: 'absolute',
		top: 0,
		left: 0,
	},

	starColour: {
		position: 'absolute',
		top: 0,
		left: 0,
		width: 100,
		height: 50,
		backgroundColor: '#fc9',
		maskImage: 'url(star.svg)',
	},

	value: {
		fontSize: 14,
		fontWeight: 'bold',
		position: 'absolute',
		top: 7,
		right: 20,
	},

} as const


export default styles
