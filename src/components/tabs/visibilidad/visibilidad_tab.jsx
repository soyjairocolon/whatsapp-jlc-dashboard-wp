import './visibilidad_tab.css';

export default function VisibilidadTab() {
	return (
		<>
			<h1 className="jlc-page-title">Visibilidad</h1>

			<div className="jlc-card">
				<label className="jlc-label">Mostrar en dispositivos</label>

				<div className="jlc-visibility-options">
					<label>
						<input type="checkbox" /> Escritorio
					</label>
					<label>
						<input type="checkbox" /> Móviles
					</label>
					<label>
						<input type="checkbox" /> Tablets
					</label>
				</div>
			</div>
		</>
	);
}
