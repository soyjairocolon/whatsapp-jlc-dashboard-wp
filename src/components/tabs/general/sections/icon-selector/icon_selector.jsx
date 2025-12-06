import { useEffect, useState } from 'react';
import IconImagePicker from './icon-image-picker/icon_image_picker';
import iconFree1 from '../../../../../assets/icons/free/free-1-icon-ws.png';
import iconFree2 from '../../../../../assets/icons/free/free-2-icon-ws.png';
import './icon_selector.css';

export default function IconSelector({ onChange }) {
	const [settings, setSettings] = useState({
		selected_icon: 'default_whatsapp',
		custom_image: '',
		behavior: 'toggle',
		premium_unlocked: false,
		color: '#25D366',
	});

	const freeIcons = [
		{ id: 'default_whatsapp', src: iconFree1 },
		{ id: 'default_chat', src: iconFree2 },
		{ id: 'default_support', src: '/icons/default_support.png' },
	];

	const premiumIcons = [
		{ id: 'premium_1', label: 'WhatsApp Pro', src: '/icons/premium1.png' },
		{ id: 'premium_2', label: 'Chat Pro', src: '/icons/premium2.png' },
	];

	/** =====================================================
	 *  1. Cargar settings desde WordPress (REST API)
	 * ======================================================*/
	useEffect(() => {
		fetch('/wp-json/wjlc/v1/icon-settings')
			.then((res) => res.json())
			.then((data) => setSettings((prev) => ({ ...prev, ...data })))
			.catch(() => {});
	}, []);

	/** =====================================================
	 *  3. Actualizar settings (función universal)
	 * ======================================================*/
	const updateSettings = (newValues) => {
		setSettings((prev) => {
			const updated = { ...prev, ...newValues };
			onChange(updated);
			return updated;
		});
	};

	/** =====================================================
	 *  4. Cambiar icono (free o premium)
	 * ======================================================*/
	const handleIconChange = (id, isPremium) => {
		if (isPremium && !settings.premium_unlocked) return;

		updateSettings({ selected_icon: id });
	};

	return (
		<div className="jlc-icon-selector">
			<h2 className="jlc-section-title">Icono del Botón Flotante</h2>

			<p className="jlc-section-description">
				Selecciona el estilo visual principal del botón de contacto.
			</p>

			{/* Íconos gratis */}
			<div className="jlc-icon-grid">
				{freeIcons.map((icon) => (
					<div
						key={icon.id}
						className={`jlc-icon-item ${
							settings.selected_icon === icon.id ? 'jlc-icon-active' : ''
						}`}
						onClick={() => handleIconChange(icon.id, false)}
					>
						<img src={icon.src} alt={icon.id} />
					</div>
				))}
			</div>

			{/* Íconos premium */}
			<div className="jlc-icon-premium-grid">
				{premiumIcons.map((icon) => {
					const locked = !settings.premium_unlocked;

					return (
						<div
							key={icon.id}
							className={`jlc-icon-item jlc-icon-premium ${
								locked ? 'jlc-locked' : ''
							}`}
							onClick={() => handleIconChange(icon.id, true)}
						>
							<img src={icon.src} alt={icon.label} />

							{locked && (
								<div className="jlc-lock">
									<span>🔒 Premium</span>
								</div>
							)}
						</div>
					);
				})}
			</div>

			{/* Imagen personalizada */}
			<div className="jlc-custom-image-box">
				<label className="jlc-label">Imagen personalizada</label>

				<div className="jlc-custom-image-row">
					{/* Vista previa */}
					{settings.custom_image && (
						<img
							src={settings.custom_image}
							alt="Vista previa"
							className="jlc-custom-image-preview"
						/>
					)}

					{/* Botón seleccionar imagen */}
					<IconImagePicker
						value={settings.custom_image}
						onChange={(url) => updateSettings({ custom_image: url })}
						buttonClass="jlc-btn-linear"
					/>

					{/* Botón eliminar */}
					{settings.custom_image && (
						<button
							className="jlc-btn-delete"
							onClick={() => updateSettings({ custom_image: '' })}
						>
							Eliminar
						</button>
					)}
				</div>
			</div>

			<div className="jlc-radio-group">
				<label>
					<input
						type="radio"
						value="toggle"
						checked={settings.behavior === 'toggle'}
						onChange={(e) => updateSettings({ behavior: e.target.value })}
					/>
					<span>Alternar con el ícono</span>
				</label>

				<label>
					<input
						type="radio"
						value="fixed"
						checked={settings.behavior === 'fixed'}
						onChange={(e) => updateSettings({ behavior: e.target.value })}
					/>
					<span>Imagen fija</span>
				</label>
			</div>

			<div className="jlc-color-box">
				<label className="jlc-label">Color del botón</label>

				<input
					type="color"
					className="jlc-color-picker"
					value={settings.color}
					onChange={(e) => updateSettings({ color: e.target.value })}
				/>
			</div>
		</div>
	);
}
