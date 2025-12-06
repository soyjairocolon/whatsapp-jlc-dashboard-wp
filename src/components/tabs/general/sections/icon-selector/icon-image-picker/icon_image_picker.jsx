/* global wp */
import './icon_image_picker.css'

export default function IconImagePicker({ value, onChange, buttonClass = '' }) {
	const image = value || ''; 

	const openMediaUploader = () => {
		const frame = wp.media({
			title: 'Seleccionar imagen',
			multiple: false,
			library: { type: 'image' },
		});

		frame.on('select', () => {
			const attachment = frame.state().get('selection').first().toJSON();
			onChange?.(attachment.url); 
		});

		frame.open();
	};

	const removeImage = () => {
		onChange('');
	};

	return (
		<div className="jlc-image-picker">
			{image && (
				<div className="jlc-image-preview">
					<img src={image} alt="preview" />
				</div>
			)}

			<div className="jlc-image-actions">
				<button
					className={`jlc-btn-linear ${buttonClass}`}
					onClick={openMediaUploader}
				>
					Seleccionar imagen
				</button>

				{image && (
					<button className="jlc-btn-delete" onClick={removeImage}>
						Eliminar
					</button>
				)}
			</div>
		</div>
	);
}
