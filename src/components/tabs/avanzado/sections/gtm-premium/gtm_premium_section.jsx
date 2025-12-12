import { useState } from 'react';
import './gtm_premium_section.css';

export default function GtmPremiumSection({
	settings,
	onChange,
	openPremiumModal,
}) {
	const isPremiumUnlocked = true;
	const [showHelpModal, setShowHelpModal] = useState(false);

	// Valores reales según backend
	const gtm = settings?.gtm || {
		enabled: false,
		event_name: 'jlc_whatsapp_click',
		meta_event_name: 'jlc_whatsapp_meta',
		params: {
			phone: true,
			page: true,
			timestamp: true,
			type: true,
			utm: true,
		},
	};

	// UPDATE de valores simples
	const updateField = (key, value) => {
		onChange({
			gtm: {
				...gtm,
				[key]: value,
			},
		});
	};

	// UPDATE para params.{phone,page,timestamp,type,utm}
	const updateParam = (key, value) => {
		onChange({
			gtm: {
				...gtm,
				params: {
					...gtm.params,
					[key]: value,
				},
			},
		});
	};

	const blockAction = () => {
		if (!isPremiumUnlocked) openPremiumModal();
	};

	return (
		<div
			className="jlc-advanced-section-css jlc-premium-section"
			style={{ position: 'relative' }}
		>
			<div className="jlc-advanced-section-header">
				<div className="jlc-advanced-texts">
					<h2 className="jlc-advanced-title">
						Google Tag Manager (GTM)
						{!isPremiumUnlocked && (
							<span className="jlc-premium-tag">Premium</span>
						)}
					</h2>

					<p className="jlc-advanced-description">
						Activa el envío de eventos avanzados a GTM, GA4 y Meta Ads cuando
						los usuarios interactúan con tu botón de WhatsApp.
					</p>
				</div>

				<button
					type="button"
					className="jlc-gtm-help-btn"
					onClick={() => setShowHelpModal(true)}
				>
					?
				</button>
			</div>

			<div
				className={
					'jlc-gtm-container ' + (!isPremiumUnlocked ? 'jlc-gtm-locked' : '')
				}
				onClick={blockAction}
			>
				{/* ACTIVAR GTM */}
				<div className="jlc-gtm-row jlc-gtm-checkbox">
					<label>Activar GTM</label>
					<input
						type="checkbox"
						checked={gtm.enabled}
						onChange={(e) => updateField('enabled', e.target.checked)}
						disabled={!isPremiumUnlocked}
					/>
				</div>

				{/* EVENT NAME */}
				<div className="jlc-gtm-row">
					<label>Nombre del evento</label>
					<input
						type="text"
						value={gtm.event_name}
						onChange={(e) => updateField('event_name', e.target.value)}
						disabled={!isPremiumUnlocked}
					/>
				</div>

				{/* META EVENT NAME */}
				<div className="jlc-gtm-row">
					<label>Meta FB Event</label>
					<input
						type="text"
						value={gtm.meta_event_name}
						onChange={(e) => updateField('meta_event_name', e.target.value)}
						disabled={!isPremiumUnlocked}
					/>
				</div>

				<hr />

				<h4 className="jlc-gtm-subtitle">Parámetros a enviar</h4>

				{/* PHONE */}
				<div className="jlc-gtm-row jlc-gtm-checkbox">
					<label>Teléfono</label>
					<input
						type="checkbox"
						checked={gtm.params.phone}
						onChange={(e) => updateParam('phone', e.target.checked)}
						disabled={!isPremiumUnlocked}
					/>
				</div>

				{/* PAGE */}
				<div className="jlc-gtm-row jlc-gtm-checkbox">
					<label>Página</label>
					<input
						type="checkbox"
						checked={gtm.params.page}
						onChange={(e) => updateParam('page', e.target.checked)}
						disabled={!isPremiumUnlocked}
					/>
				</div>

				{/* TIMESTAMP */}
				<div className="jlc-gtm-row jlc-gtm-checkbox">
					<label>Timestamp</label>
					<input
						type="checkbox"
						checked={gtm.params.timestamp}
						onChange={(e) => updateParam('timestamp', e.target.checked)}
						disabled={!isPremiumUnlocked}
					/>
				</div>

				{/* TYPE */}
				<div className="jlc-gtm-row jlc-gtm-checkbox">
					<label>Tipo de clic</label>
					<input
						type="checkbox"
						checked={gtm.params.type}
						onChange={(e) => updateParam('type', e.target.checked)}
						disabled={!isPremiumUnlocked}
					/>
				</div>

				{/* UTM */}
				<div className="jlc-gtm-row jlc-gtm-checkbox">
					<label>UTM parameters</label>
					<input
						type="checkbox"
						checked={gtm.params.utm}
						onChange={(e) => updateParam('utm', e.target.checked)}
						disabled={!isPremiumUnlocked}
					/>
				</div>
			</div>

			{/* HELP MODAL */}
			{showHelpModal && (
				<div
					className="jlc-premium-modal-overlay"
					onClick={() => setShowHelpModal(false)}
				>
					<div
						className="jlc-premium-modal"
						onClick={(e) => e.stopPropagation()}
					>
						<h2 className="jlc-premium-modal-title">¿Cómo funciona GTM?</h2>

						<p className="jlc-premium-modal-text">
							Este módulo envía un evento personalizado a Google Tag Manager
							cada vez que un usuario interactúa con tu botón de WhatsApp.
						</p>

						<ul style={{ textAlign: 'left', marginBottom: '16px' }}>
							<li>
								Evento: <strong>jlc_whatsapp_click</strong>
							</li>
							<li>
								Meta Ads: <strong>jlc_meta_event</strong>
							</li>
							<li>
								Incluye parámetros: teléfono, página, timestamp, tipo, UTM
							</li>
						</ul>

						<button
							className="jlc-btn-primary-gtm"
							onClick={() => setShowHelpModal(false)}
						>
							Entendido
						</button>
					</div>
				</div>
			)}
		</div>
	);
}
