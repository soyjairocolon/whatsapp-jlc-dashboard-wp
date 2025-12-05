export default function EstilosTab() {
	return (
		<>
			<h1 className="jlc-page-title">Estilos del botón</h1>

			<div className="jlc-card">
				<label className="jlc-label">Color del botón</label>
				<input className="jlc-input" type="color" />

				<label className="jlc-label">Posición del botón</label>
				<select className="jlc-input">
					<option>Inferior derecha</option>
					<option>Inferior izquierda</option>
					<option>Centro derecha</option>
					<option>Centro izquierda</option>
				</select>

				<label className="jlc-label">Tamaño</label>
				<input className="jlc-input" type="range" min="40" max="120" />

				<button className="jlc-btn-primary">Guardar cambios</button>
			</div>
		</>
	);
}
