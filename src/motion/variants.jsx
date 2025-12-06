export const fadeInUp = {
	hidden: { opacity: 0, y: 12 },
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.32, ease: 'easeOut' },
	},
};

export const fadeIn = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: { duration: 0.25 },
	},
};

export const scaleIn = {
	hidden: { opacity: 0, scale: 0.92 },
	show: {
		opacity: 1,
		scale: 1,
		transition: { duration: 0.28, ease: 'easeOut' },
	},
};

export const listStagger = {
	hidden: {},
	show: {
		transition: {
			staggerChildren: 0.08,
		},
	},
};
