# QR Code Generator for LimeSurvey

A simple backend application to generate QR codes that link to a LimeSurvey survey platform. This project allows users to automate QR code creation for survey links, making it easy to distribute surveys via QR codes.

## Features

- Generate QR codes for LimeSurvey survey links.
- Easy integration with LimeSurvey platform.
- Simple API to generate QR codes programmatically.

## Prerequisites

Before running this project, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (Recommended version: LTS)
- [npm](https://npmjs.com/) (Node package manager)

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/yourusername/qr-code-generator.git
   ```

2. Navigate to the project directory:

   ```bash
   cd qr-code-generator
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Configure the LimeSurvey platform URL by setting the appropriate environment variables (optional).

## Usage

1. **Generate a QR Code:**

   After installation, you can use the following command to generate a QR code for your LimeSurvey survey link:

   ```bash
   node generate-qr.js --url "https://limesurvey.example.com/survey/index.php/123456"
   ```

   Replace `https://limesurvey.example.com/survey/index.php/123456` with the URL of your survey.

2. **Using the API:**

   The application also provides an API to generate QR codes programmatically. Here's an example using `Express`:

   ```javascript
   const express = require('express');
   const QRCode = require('qrcode');
   const app = express();

   app.get('/generate-qr', (req, res) => {
       const surveyUrl = req.query.url;

       QRCode.toDataURL(surveyUrl, (err, url) => {
           if (err) {
               return res.status(500).send('Error generating QR code');
           }
           res.send(`<img src="${url}" />`);
       });
   });

   app.listen(3000, () => {
       console.log('QR Code generator API is running on http://localhost:3000');
   });
   ```

3. **Testing:**

   Run the project locally and test the functionality by navigating to the generated URL.

   ```bash
   node generate-qr.js
   ```

## Contributing

1. Fork this repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [LimeSurvey](https://www.limesurvey.org/) for providing the survey platform.
- [QRCode.js](https://github.com/davidshimjs/qrcodejs) for QR code generation.
