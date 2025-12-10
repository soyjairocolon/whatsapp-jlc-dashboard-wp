import FloatingButton from './floating_button';

export default function FloatingPreview({ settings }) {
	return (
		<div className="jlc-preview-canvas">
			<FloatingButton settings={settings} previewMode />
		</div>
	);
}
