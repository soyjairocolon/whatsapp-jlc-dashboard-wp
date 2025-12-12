import { useState } from 'react';
import './premium_tab.css';

import HeroSectionPremium from './sections/hero-section-premium/hero_section_premium';
import RoadmapSectionPremium from './sections/roadmap-section-premium/roadmap_section_premium';
import ComparisonSectionPremium from './sections/comparison-section-premium/comparison_section_premium';
import FreeFeaturesSectionPremium from './sections/free-features-section-premium/free_features_section_premium';
import CtaSectionPremium from './sections/cta-section-premium/cta_section_premium';

export default function PremiumTab() {
	const [showModal, setShowModal] = useState(false);

	return (
		<div className="jlc-premium-page">
			<HeroSectionPremium setShowModal={setShowModal} />
			<RoadmapSectionPremium />
			<ComparisonSectionPremium />
			<FreeFeaturesSectionPremium />
			<CtaSectionPremium setShowModal={setShowModal} />

			{/* Modal */}
			{showModal && (
				<div
					className="jlc-premium-cta-modal-overlay"
					onClick={() => setShowModal(false)}
				>
					<div
						className="jlc-premium-cta-modal"
						onClick={(e) => e.stopPropagation()}
					>
						<h3 className="jlc-premium-cta-modal__title">Próximamente</h3>

						<p className="jlc-premium-cta-modal__text">
							Estamos preparando funciones Premium impresionantes. Muy pronto
							podrás unirte a la lista de notificación.
						</p>

						<button
							className="jlc-premium-cta-modal__btn"
							onClick={() => setShowModal(false)}
						>
							Entendido
						</button>
					</div>
				</div>
			)}
		</div>
	);
}
