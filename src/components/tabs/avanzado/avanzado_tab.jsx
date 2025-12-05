import './avanzado_tab.css';

export default function AvanzadoTab() {
	return (
		<>
			<h1 className="jlc-page-title">Ajustes avanzados</h1>

			<div className="jlc-card">
				<label className="jlc-label">Conversión de Google Ads</label>
				<input className="jlc-input" placeholder="AW-00000000 / ABCDEFGHIJK" />

				<label className="jlc-label">CSS personalizado</label>
				<textarea
					className="jlc-textarea"
					placeholder="Tu CSS personalizado..."
				></textarea>

				<label className="jlc-checkbox">
					<input type="checkbox" /> Eliminar todos los ajustes de JLC Company al
					desinstalar
				</label>

				<button className="jlc-btn-primary">Guardar cambios</button>
			</div>
		</>
	);
}
