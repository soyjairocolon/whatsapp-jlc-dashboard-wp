import { useState, useEffect } from 'react';
import PhoneInput from 'react-phone-input-2';
import './phone_settings.css';

export default function PhoneSettings({ onChange, defaultValues = {} }) {
	const [phone, setPhone] = useState('');
	const [initialMessage, setInitialMessage] = useState('');

	const SITE = window.wjlc_site_name || '{SITE}';
	const TITLE = window.wjlc_post_title || '{TITLE}';
	const URL = window.wjlc_post_url || '{URL}';

	const defaultMessage = `Hola *${SITE}*. Necesito más información sobre ${TITLE} ${URL}`;

	/**
	 * ============================================
	 * 1) CARGAR SETTINGS DESDE WORDPRESS
	 * ============================================
	 */
	useEffect(() => {
		async function loadPhoneSettings() {
			try {
				const res = await fetch('/wp-json/wjlc/v1/phone-settings');
				if (!res.ok) throw new Error('No se pudo obtener settings');

				const data = await res.json();

				// Aplicamos valores
				setPhone(data.phone || '');
				setInitialMessage(data.initialMessage || defaultMessage);

				// Pasamos al componente padre
				onChange({
					phone: data.phone || '',
					initialMessage: data.initialMessage || defaultMessage,
				});
			} catch (error) {
				console.error('Error cargando phone settings:', error);

				// Si falla, aplicamos los defaults que ya venían del WP INIT
				setPhone(defaultValues.phone || '');
				setInitialMessage(defaultValues.initialMessage || defaultMessage);
			}
		}

		loadPhoneSettings();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	/**
	 * ============================================
	 * 2) ENVIAR CAMBIOS HACIA EL COMPONENTE PADRE
	 * ============================================
	 */
	useEffect(() => {
		onChange({ phone, initialMessage });
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [phone, initialMessage]);

	/**
	 * ============================================
	 * Función para probar número
	 * ============================================
	 */
	const testNumber = () => {
		if (!phone) return alert('Por favor ingresa un número válido');

		const encodedMsg = encodeURIComponent(initialMessage);
		const url = `https://wa.me/${phone}?text=${encodedMsg}`;
		window.open(url, '_blank');
	};

	return (
		<div className="jlc-phone-settings">
			<p className="jlc-section-description">
				Establece el número de contacto y el aspecto del botón flotante.
			</p>

			<h2 className="jlc-section-title">Número y Mensaje Inicial</h2>

			<label className="jlc-label">Número de WhatsApp</label>

			<div className="jlc-phone-row">
				<PhoneInput
					country={'co'}
					value={phone}
					onChange={(value) => setPhone(value)}
					enableSearch
					placeholder="+57 300 000 0000"
					inputClass="jlc-phone-input"
					buttonClass="jlc-phone-flag"
					containerClass="jlc-phone-container"
				/>

				<button className="jlc-btn-secondary" onClick={testNumber}>
					Probar número
				</button>
			</div>

			<p className="jlc-helper">
				El botón no se mostrará si no hay número de WhatsApp configurado.
			</p>

			<label className="jlc-label">Mensaje inicial</label>

			<textarea
				className="jlc-textarea"
				value={initialMessage}
				onChange={(e) => setInitialMessage(e.target.value)}
			/>

			<p className="jlc-helper">
				Mensaje que el usuario enviará al iniciar la conversación.
			</p>
		</div>
	);
}
