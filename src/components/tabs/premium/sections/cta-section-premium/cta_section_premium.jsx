import './cta_section_premium.css';

export default function CtaSectionPremium({ setShowModal }) {

	return (
		<section className="jlc-premium-cta">
			<h2 className="jlc-premium-cta__title">
				¿Quieres ser de los primeros en acceder a WhatsApp JLC Premium?
			</h2>

			<p className="jlc-premium-cta__subtitle">
				Estamos trabajando en características avanzadas que llevarán tu
				conversión al siguiente nivel.
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
