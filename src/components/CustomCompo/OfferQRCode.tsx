import React from 'react';
import QRCode from 'react-native-qrcode-svg'; // QR gen :contentReference[oaicite:8]{index=8}

type Props = {offer: any};
export const OfferQRCode: React.FC<Props> = ({offer}) => (
  <QRCode value={JSON.stringify(offer)} size={250} />
);
