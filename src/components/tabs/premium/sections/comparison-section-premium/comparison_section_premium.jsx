import './comparison_section_premium.css';

export default function ComparisonSectionPremium() {
	const features = [
		{
			title: 'Botón flotante WhatsApp',
			free: true,
			premium: true,
		},
		{
			title: 'Diseño personalizado del widget',
			free: true,
			premium: true,
		},
		{
			title: 'Google Tag Manager avanzado',
			free: true,
			premium: true,
		},
		{
			title: 'Autorespuesta con IA',
			free: false,
			premium: true,
		},
		{
			title: 'Reglas inteligentes por comportamiento',
			free: false,
			premium: true,
		},
		{
			title: 'Dashboard de analíticas avanzadas',
			free: false,
			premium: true,
		},
		{
			title: 'Múltiples agentes / horarios',
			free: false,
			premium: true,
		},
	];

	return (
		<section className="jlc-premium-comparison">
			<h2 className="jlc-premium-comparison__title">
				Comparativa: Gratis vs Premium
			</h2>

			<p className="jlc-premium-comparison__subtitle">
				WhatsApp JLC ya ofrece funciones poderosas en su versión gratuita. La
				futura opción Premium llevará tu comunicación al siguiente nivel.
			</p>

			<div className="jlc-premium-comparison__table">
				<div className="jlc-premium-comparison__header">
					<div className="jlc-premium-col-feature">Función</div>
					<div className="jlc-premium-col-free">Gratis</div>
					<div className="jlc-premium-col-premium">Premium</div>
				</div>

				{features.map((f, i) => (
					<div key={i} className="jlc-premium-comparison__row">
						<div className="jlc-premium-col-feature">{f.title}</div>

						<div className="jlc-premium-col-free">
							{f.free ? (
								<span className="jlc-check">✔</span>
							) : (
								<span className="jlc-cross">✖</span>
							)}
						</div>

						<div className="jlc-premium-col-premium">
							{f.premium ? (
								<span className="jlc-check">✔</span>
							) : (
								<span className="jlc-cross">✖</span>
							)}
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
