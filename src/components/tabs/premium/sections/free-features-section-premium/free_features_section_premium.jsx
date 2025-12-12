import './free_features_section_premium.css';

export default function FreeFeaturesSectionPremium() {
	const features = [
		{
			icon: '💬',
			title: 'Botón flotante WhatsApp',
			desc: 'Totalmente personalizable, con opciones avanzadas para animación y visibilidad.',
		},
		{
			icon: '🎛️',
			title: 'Reglas de visibilidad',
			desc: 'Control completo sobre dónde aparece el botón en tu sitio.',
		},
		{
			icon: '🎨',
			title: 'Editor de CSS personalizado',
			desc: 'Modifica estilos del widget para adaptarlo a tu branding.',
		},
		{
			icon: '🛟',
			title: 'Soporte básico',
			desc: 'Actualizaciones y mejoras continuas sin costo.',
		},
	];

	return (
		<section className="jlc-free-features">
			<h2 className="jlc-free-features__title">
				Lo que ya incluye la versión gratuita
			</h2>

			<p className="jlc-free-features__subtitle">
				Todas estas funciones están disponibles para ti desde ahora sin ningún
				costo.
			</p>

			<div className="jlc-free-features__grid">
				{features.map((f, i) => (
					<div key={i} className="jlc-free-feature-card">
						<div className="jlc-free-feature-icon">{f.icon}</div>

						<h3 className="jlc-free-feature-title">{f.title}</h3>

						<p className="jlc-free-feature-desc">{f.desc}</p>
					</div>
				))}
			</div>
		</section>
	);
}
