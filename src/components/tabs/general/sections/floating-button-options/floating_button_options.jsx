// /* global wjlcData */
import { useEffect } from 'react';
import './floating_button_options.css';

export default function FloatingButtonOptions({ settings = {}, onChange }) {
	const defaultSettings = {
		tooltipText: '¿Necesitas ayuda?',
		tooltipInterval: 8,
		position: 'right',
		animationType: 'none',
		delay: 1,
		mobileOnly: false,
		showQR: false,
		openWeb: false,
	};

	// Normalización de settings
	const normalized = {
		...defaultSettings,
		...(settings || {}),
	};
	
	// Efecto para inicializar valores si es la primera carga
	useEffect(() => {
		onChange(normalized);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const updateField = (field, value) => {
		const updated = {
			...normalized,
			[field]: value,
		};
		onChange(updated);
	};

	return (
		<div className="jlc-floating-options">
			<h2 className="jlc-section-title">Opciones del Botón Flotante</h2>

			{/* Tooltip */}
			<div className="jlc-field">
				<label className="jlc-label">Información emergente</label>

				<input
					type="text"
					className="jlc-input"
					placeholder="¿Necesitas ayuda?"
					value={normalized.tooltipText}
					onChange={(e) => updateField('tooltipText', e.target.value)}
				/>

				<p className="jlc-description">
					Texto breve que se muestra junto al botón
				</p>
			</div>

			{/* Intervalo Tooltip */}
			<div className="jlc-field">
				<label className="jlc-label">
					Intervalo de la información emergente
				</label>

				<div className="jlc-delay-field">
					<input
						type="number"
						min={3}
						className="jlc-input-number"
						value={normalized.tooltipInterval}
						onChange={(e) =>
							updateField('tooltipInterval', Number(e.target.value))
						}
					/>
					<span className="jlc-delay-suffix">segundos</span>
				</div>

				<p className="jlc-description">
					Frecuencia con la que aparece automáticamente la información
					emergente.
				</p>
			</div>

			{/* Posición */}
			<div className="jlc-field">
				<label className="jlc-label">Posición en pantalla</label>

				<div className="jlc-radio-group">
					<label className="jlc-radio">
						<input
							type="radio"
							checked={normalized.position === 'left'}
							onChange={() => updateField('position', 'left')}
						/>
						Izquierda
					</label>

					<label className="jlc-radio">
						<input
							type="radio"
							checked={normalized.position === 'right'}
							onChange={() => updateField('position', 'right')}
						/>
						Derecha
					</label>
				</div>
			</div>

			{/* Tipo de animación */}
			<div className="jlc-field">
				<label className="jlc-label">Tipo de animación</label>

				<div className="jlc-select-wrapper">
					<select
						className="jlc-select"
						value={normalized.animationType}
						onChange={(e) => updateField('animationType', e.target.value)}
					>
						<option value="none">Sin animación</option>
						<option value="pulse">Pulso</option>
						<option value="vibrate">Vibración</option>
					</select>
				</div>
			</div>

			{/* Retardo */}
			<div className="jlc-field">
				<label className="jlc-label">Retardo del botón</label>

				<div className="jlc-delay-field">
					<input
						type="number"
						min={-1}
						className="jlc-input-number"
						value={normalized.delay}
						onChange={(e) => updateField('delay', Number(e.target.value))}
					/>
					<span className="jlc-delay-suffix">segundos</span>
				</div>

				<p className="jlc-description">
					-1 para mostrar directamente sin animación
				</p>
			</div>

			{/* Solo móvil */}
			<div className="jlc-field">
				<label className="jlc-checkbox">
					<input
						type="checkbox"
						checked={normalized.mobileOnly}
						onChange={(e) => updateField('mobileOnly', e.target.checked)}
					/>
					Solo mostrar el botón en móviles
				</label>
			</div>

			{/* Opciones de escritorio */}
			<div className="jlc-field">
				<label className="jlc-checkbox">
					<input
						type="checkbox"
						checked={normalized.showQR}
						onChange={(e) => updateField('showQR', e.target.checked)}
					/>
					Mostrar código QR para escanear con el móvil
				</label>

				<label className="jlc-checkbox">
					<input
						type="checkbox"
						checked={normalized.openWeb}
						onChange={(e) => updateField('openWeb', e.target.checked)}
					/>
					Abrir directamente WhatsApp Web
				</label>
			</div>
		</div>
	);
}
