import './roadmap_section_premium.css';

export default function RoadmapSectionPremium() {
	const features = [
		{
			title: 'Automatizaciones avanzadas con IA',
			desc: 'Respuestas inteligentes, flujos automatizados y optimización continua.',
			icon: '⚡',
		},
		{
			title: 'Segmentación por comportamiento',
			desc: 'Muestra el widget según reglas inteligentes basadas en el usuario.',
			icon: '🎯',
		},
		{
			title: 'Personalización por página',
			desc: 'Configura el widget diferente en cada sección del sitio.',
			icon: '🧩',
		},
		{
			title: 'Integración con CRM',
			desc: 'Envía y gestiona leads en tu plataforma favorita.',
			icon: '📊',
		},
		{
			title: 'Analíticas avanzadas',
			desc: 'Panel con métricas de clics, interacción, horarios y más.',
			icon: '📈',
		},
		{
			title: 'Integración con Píxeles',
			desc: 'Meta, GA4, TikTok: todo configurado desde el dashboard.',
			icon: '🔗',
		},
	];

	return (
		<section className="jlc-premium-roadmap">
			<h2 className="jlc-premium-roadmap__title">Próximas funciones Premium</h2>

			<p className="jlc-premium-roadmap__subtitle">
				Estamos construyendo herramientas poderosas para maximizar el
				rendimiento de tu WhatsApp.
			</p>

			<div className="jlc-premium-roadmap__grid">
				{features.map((item, i) => (
					<div key={i} className="jlc-premium-roadmap__card">
						<div className="jlc-premium-roadmap__icon">{item.icon}</div>

						<h3 className="jlc-premium-roadmap__card-title">{item.title}</h3>
						<p className="jlc-premium-roadmap__card-desc">{item.desc}</p>
					</div>
				))}
			</div>
		</section>
	);
}
