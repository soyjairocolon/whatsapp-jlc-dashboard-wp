import { useState } from 'react';
import './gtm_premium_section.css';

export default function GtmPremiumSection({
	settings,
	onChange,
	openPremiumModal,
}) {
	const isPremiumUnlocked = false;
	const [showHelpModal, setShowHelpModal] = useState(false);

	const gtm = settings?.gtm || {
		enabled: false,
		event_name: 'jlc_whatsapp_click',
		meta_event_name: 'jlc_meta_event',
		send_phone: true,
		send_page: true,
		send_timestamp: true,
		send_type: true,
		send_utm: true,
	};

	// Actualizar valores globales
	const updateField = (key, value) => {
		onChange({
			gtm: {
				...gtm,
				[key]: value,
			},
		});
	};

	// Para bloquear inputs cuando no es Premium
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

				{/* Ícono de ayuda */}
				<button
					type="button"
					className="jlc-gtm-help-btn"
					onClick={() => setShowHelpModal(true)}
				>
					?
				</button>
			</div>

			{/* Contenido GTM */}
			<div
				className={
					'jlc-gtm-container ' + (!isPremiumUnlocked ? 'jlc-gtm-locked' : '')
				}
				onClick={blockAction}
			>
				<div className="jlc-gtm-row jlc-gtm-checkbox">
					<label>Activar GTM</label>
					<input
						type="checkbox"
						checked={gtm.enabled}
						onChange={(e) => updateField('enabled', e.target.checked)}
						disabled={!isPremiumUnlocked}
					/>
				</div>

				<div className="jlc-gtm-row">
					<label>Nombre del evento</label>
					<input
						type="text"
						value={gtm.event_name}
						onChange={(e) => updateField('event_name', e.target.value)}
						disabled={!isPremiumUnlocked}
					/>
				</div>

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

				<div className="jlc-gtm-row jlc-gtm-checkbox">
					<label>Teléfono</label>
					<input
						type="checkbox"
						checked={gtm.send_phone}
						onChange={(e) => updateField('send_phone', e.target.checked)}
						disabled={!isPremiumUnlocked}
					/>
				</div>

				<div className="jlc-gtm-row jlc-gtm-checkbox">
					<label>Página</label>
					<input
						type="checkbox"
						checked={gtm.send_page}
						onChange={(e) => updateField('send_page', e.target.checked)}
						disabled={!isPremiumUnlocked}
					/>
				</div>

				<div className="jlc-gtm-row jlc-gtm-checkbox">
					<label>Timestamp</label>
					<input
						type="checkbox"
						checked={gtm.send_timestamp}
						onChange={(e) => updateField('send_timestamp', e.target.checked)}
						disabled={!isPremiumUnlocked}
					/>
				</div>

				<div className="jlc-gtm-row jlc-gtm-checkbox">
					<label>Tipo de clic</label>
					<input
						type="checkbox"
						checked={gtm.send_type}
						onChange={(e) => updateField('send_type', e.target.checked)}
						disabled={!isPremiumUnlocked}
					/>
				</div>

				<div className="jlc-gtm-row jlc-gtm-checkbox">
					<label>UTM parameters</label>
					<input
						type="checkbox"
						checked={gtm.send_utm}
						onChange={(e) => updateField('send_utm', e.target.checked)}
						disabled={!isPremiumUnlocked}
					/>
				</div>
			</div>

			{/* Overlay Premium */}
			{!isPremiumUnlocked && (
				<div className="jlc-premium-overlay" onClick={openPremiumModal}>
					<div className="jlc-premium-overlay-content">
						<div className="jlc-lock-icon">🔒</div>
						Funcionalidad Premium
					</div>
				</div>
			)}

			{/* Modal de ayuda */}
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
								Envía un evento: <strong>jlc_whatsapp_click</strong>
							</li>
							<li>
								Soporte para Meta Ads → <strong>jlc_meta_event</strong>
							</li>
							<li>
								Incluye: teléfono, página, timestamp, tipo y parámetros UTM
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
