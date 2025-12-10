export default function FloatingButton({ settings, previewMode }) {
	const { phone, message, icon, floating } = settings;

	if (!phone) return null;

	return (
		<div
			className={`wjlc-floating-btn ${floating.position}`}
			style={{
				backgroundColor: icon.color,
				left: floating.position === 'left' ? 25 : 'auto',
				right: floating.position === 'right' ? 25 : 'auto',
			}}
		>
			<img src={icon.custom_image || icon.resolved_icon} alt="WhatsApp" />

			{/* Tooltip */}
			{!floating.showQR && (
				<div className="wjlc-tooltip-bubble">
					{floating.tooltipText || '¿Necesitas ayuda?'}
				</div>
			)}

			{/* QR */}
			{floating.showQR && previewMode && (
				<div className="wjlc-qr-box">
					<img
						src={`https://api.qrserver.com/v1/create-qr-code/?size=230x230&data=${encodeURIComponent(
							`https://wa.me/${phone}?text=${encodeURIComponent(message)}`
						)}`}
					/>
					<p>Escanea el código</p>
				</div>
			)}
		</div>
	);
}
