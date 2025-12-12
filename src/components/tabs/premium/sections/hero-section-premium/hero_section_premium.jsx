import './hero_section_premium.css';

export default function HeroSectionPremium({ setShowModal }) {
	return (
		<section className="jlc-premium-hero">
			<div className="jlc-premium-hero__badge-flag">
				Próximamente disponible
			</div>

			<div className="jlc-premium-hero__icon-wrapper">
				<img
					src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
					alt="Premium Icon"
					className="jlc-premium-hero__icon"
				/>
			</div>

			<h1 className="jlc-premium-hero__title">WhatsApp JLC Premium</h1>

			<p className="jlc-premium-hero__subtitle">
				Más potencia, más automatización y más conversiones.
			</p>

			<button
				className="jlc-premium-cta__button"
				onClick={() => setShowModal(true)}
			>
				Notificarme cuando esté disponible
			</button>
		</section>
	);
}
