const express = require('express');
const QRCode = require('qrcode');
const qrTerminal = require('qrcode-terminal');

const app = express();
const PORT = 3000;
const LIME_SURVEY_BASE_URL = "https://rizqi-kevin.limesurvey.net"; 

app.use(express.json());

// Endpoint untuk membuat QR Code berdasarkan ID survei
app.post('/generate-qr', async (req, res) => {
  const { surveyId } = req.body; 

  if (!surveyId) {
    return res.status(400).json({ error: 'ID survei tidak disertakan' });
  }

  const surveyUrl = `${LIME_SURVEY_BASE_URL}/${surveyId}`;

  try {
    const qrCodeData = await QRCode.toDataURL(surveyUrl);
    qrTerminal.generate(surveyUrl, { small: true }); 
    res.status(200).json({ qrCode: qrCodeData });
  } catch (error) {
    console.error('Error generating QR code:', error);
    res.status(500).json({ error: 'Terjadi kesalahan saat membuat QR code' });
  }
});

// Mulai server
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
