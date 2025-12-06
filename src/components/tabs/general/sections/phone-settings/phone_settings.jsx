import { useState, useEffect } from 'react';
import PhoneInput from 'react-phone-input-2';
import './phone_settings.css';

export default function PhoneSettings({ onChange, defaultValues = {} }) {
	const [phone, setPhone] = useState(defaultValues.phone || '');
	const [initialMessage, setInitialMessage] = useState('');

	const SITE = window.wjlc_site_name || '{SITE}';
	const TITLE = window.wjlc_post_title || '{TITLE}';
	const URL = window.wjlc_post_url || '{URL}';

	const defaultMessage = `Hola *${SITE}*. Necesito más información sobre ${TITLE} ${URL}`;

	useEffect(() => {
		setInitialMessage(defaultValues.initialMessage || defaultMessage);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		onChange({ phone, initialMessage });
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [phone, initialMessage]);

	const testNumber = () => {
		if (!phone) return alert('Por favor ingresa un número válido');

		const encodedMsg = encodeURIComponent(initialMessage);
		const url = `https://wa.me/${phone}?text=${encodedMsg}`;

		window.open(url, '_blank');
	};

	return (
		<div className="jlc-phone-settings">
			<p className="jlc-section-description">
				Establece el número de contacto y el aspecto del botón flotante de
				contacto.
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
				Número de contacto de WhatsApp (el botón no se mostrará si está vacío)
			</p>

			<label className="jlc-label">Mensaje inicial</label>

			<textarea
				className="jlc-textarea"
				value={initialMessage}
				onChange={(e) => setInitialMessage(e.target.value)}
			/>

			<p className="jlc-helper">
				Texto pre-rellenado en el primer mensaje que te enviará el usuario
			</p>
		</div>
	);
}
