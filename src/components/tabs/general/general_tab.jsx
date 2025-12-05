import PhoneSettings from './sections/phone-settings/phone_settings';
import IconSelector from './sections/icon-selector/icon_selector';
import FloatingButtonOptions from './sections/floating-button-options/floating_button_options';
import PreviewBox from './sections/preview-box/preview_box';
import './general_tab.css';

export default function GeneralTab() {
	return (
		<div className="jlc-general-page">
			<h1 className="jlc-page-title">Configuración General</h1>

			<div className="jlc-sections-wrapper">
				<div className="jlc-section-card">
					<PhoneSettings />
				</div>

				<div className="jlc-section-card">
					<IconSelector />
				</div>

				<div className="jlc-section-card">
					<FloatingButtonOptions />
				</div>

				<div className="jlc-section-card">
					<PreviewBox />
				</div>
				<button className="jlc-btn-primary jlc-save-btn">
					Guardar cambios
				</button>
			</div>
		</div>
	);
}
