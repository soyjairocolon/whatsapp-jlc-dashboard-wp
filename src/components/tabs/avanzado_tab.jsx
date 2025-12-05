export default function AvanzadoTab() {
	return (
		<>
			<h1 className="jlc-page-title">Configuraciones Avanzadas</h1>

			<div className="jlc-card">
				<label className="jlc-label">Activar modo debug</label>
				<input type="checkbox" />

				<label className="jlc-label">Desactivar en móviles</label>
				<input type="checkbox" />

				<button className="jlc-btn-primary">Guardar cambios</button>
			</div>
		</>
	);
}
