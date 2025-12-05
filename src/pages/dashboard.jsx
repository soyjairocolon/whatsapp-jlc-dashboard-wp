import { useState } from 'react';
import GeneralTab from '../components/tabs/general/general_tab';
import EstilosTab from '../components/tabs/estilos/estilos_tab';
import VisibilidadTab from '../components/tabs/visibilidad/visibilidad_tab';
import AvanzadoTab from '../components/tabs/avanzado/avanzado_tab';
import PremiumTab from '../components/tabs/premium/premium_tab';
import '../components/tabs/general/general_tab.css';
import '../components/tabs/estilos/estilos_tab.css';
import '../components/tabs/visibilidad/visibilidad_tab.css';
import '../components/tabs/avanzado/avanzado_tab.css';
import '../components/tabs/premium/premium_tab.css';
import '../index.css';

export default function Dashboard() {
	const [activeTab, setActiveTab] = useState('general');

	const renderTab = () => {
		switch (activeTab) {
			case 'general':
				return <GeneralTab />;
			case 'estilos':
				return <EstilosTab />;
			case 'visibilidad':
				return <VisibilidadTab />;
			case 'avanzado':
				return <AvanzadoTab />;
			case 'premium':
				return <PremiumTab />;
			default:
				return <GeneralTab />;
		}
	};

	return (
		<div className="jlc-dashboard">
			{/* Sidebar premium */}
			<aside className="jlc-sidebar">
				<h2 className="jlc-sidebar-title">WhatsApp JLC</h2>

				<nav className="jlc-nav">
					<button
						className={`jlc-nav-item ${
							activeTab === 'general' ? 'jlc-active' : ''
						}`}
						onClick={() => setActiveTab('general')}
					>
						General
					</button>

					<button
						className={`jlc-nav-item ${
							activeTab === 'estilos' ? 'jlc-active' : ''
						}`}
						onClick={() => setActiveTab('estilos')}
					>
						Estilos
					</button>

					<button
						className={`jlc-nav-item ${
							activeTab === 'visibilidad' ? 'jlc-active' : ''
						}`}
						onClick={() => setActiveTab('visibilidad')}
					>
						Visibilidad
					</button>

					<button
						className={`jlc-nav-item ${
							activeTab === 'avanzado' ? 'jlc-active' : ''
						}`}
						onClick={() => setActiveTab('avanzado')}
					>
						Avanzado
					</button>

					<button
						className={`jlc-nav-item ${
							activeTab === 'premium' ? 'jlc-active' : ''
						}`}
						onClick={() => setActiveTab('premium')}
					>
						Premium ⭐
					</button>
				</nav>
			</aside>

			{/* Contenido dinámico */}
			<main className="jlc-content">{renderTab()}</main>
		</div>
	);
}
