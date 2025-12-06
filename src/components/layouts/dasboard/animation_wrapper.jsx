import { motion } from 'framer-motion';
import { fadeInUp } from '../../../motion/variants';

export default function AnimationWrapper({ children }) {
	return (
		<motion.div
			initial="hidden"
			animate="show"
			variants={fadeInUp}
			style={{ width: '100%' }}
		>
			{children}
		</motion.div>
	);
}
