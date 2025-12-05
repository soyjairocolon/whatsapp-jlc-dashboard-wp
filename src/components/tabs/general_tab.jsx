export default function GeneralTab() {
	return (
		<>
			<h1 className="jlc-page-title">Configuración General</h1>

			<div className="jlc-card">
				<label className="jlc-label">Número de WhatsApp</label>
				<input
					className="jlc-input"
					type="text"
					placeholder="+57 300 000 0000"
				/>

				<label className="jlc-label">Mensaje inicial</label>
				<textarea
					className="jlc-textarea"
					placeholder="Hola, quisiera más información..."
				></textarea>

				<button className="jlc-btn-primary">Guardar cambios</button>
			</div>
		</>
	);
}
