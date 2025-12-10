import { useState } from 'react';
import './preview_box.css';

export default function PreviewBox() {
	const [open, setOpen] = useState(false);
	const [device, setDevice] = useState('desktop');

	return (
		<div className="jlc-previewbox-container">
			{/* BOTÓN SUPERIOR (Abrir Sidebar) */}
			<button
				className="jlc-preview-toggle"
				onClick={() => setOpen(!open)}
				disabled={false} // El estado disabled lo agregarás según la tab activa
			>
				<span className="jlc-preview-icon">👁️</span>
				Vista previa
			</button>

			{/* SIDEBAR DE PREVISUALIZACIÓN */}
			<div className={`jlc-preview-sidebar ${open ? 'open' : ''}`}>
				{/* BOTÓN DE CERRAR (cuando sidebar está abierto) */}
				{open && (
					<button className="jlc-preview-close" onClick={() => setOpen(false)}>
						<span className="jlc-close-icon">✕</span>
						Cerrar vista previa
					</button>
				)}
				{/* Header del Sidebar */}
				<div className="jlc-preview-header">
					{/* <h3>Vista previa del botón</h3> */}

					{/* Selector Desktop / Mobile */}
					<div className="jlc-device-switcher">
						<button
							className={device === 'desktop' ? 'active' : ''}
							onClick={() => setDevice('desktop')}
						>
							🖥️ Desktop
						</button>
						<button
							className={device === 'mobile' ? 'active' : ''}
							onClick={() => setDevice('mobile')}
						>
							📱 Mobile
						</button>
					</div>
				</div>

				{/* Área donde se mostrará la vista previa */}
				<div className={`jlc-preview-area ${device}`}>
					<div className="jlc-preview-mock">
						{/* Aquí se renderizará el botón "fake" para vista previa */}
						<div className="jlc-preview-floating-btn">
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
								alt="WhatsApp"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
