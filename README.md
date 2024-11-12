QR Code Generator for LimeSurvey
This project is a simple QR Code Generator for LimeSurvey surveys. Using Node.js and Express, it generates a QR code that links directly to a LimeSurvey survey, allowing users to quickly access and share survey links in a scannable format.

Features
Generate QR codes based on LimeSurvey survey IDs.
Simple and lightweight API for dynamic QR code generation.
Returns QR code image data in Base64 format, ready to use in front-end applications.
Requirements
Node.js (version 12 or higher)
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/qr-code-generator.git
cd qr-code-generator
Install dependencies:

bash
Copy code
npm install
Configuration
Set your LimeSurvey base URL in server.js:

javascript
Copy code
const LIME_SURVEY_BASE_URL = "https://rizqi-kevin.limesurvey.net";
This is the base URL for your LimeSurvey instance. The API will generate QR codes that link to surveys on this URL.

Usage
Start the server:

bash
Copy code
node server.js
The server will run on http://localhost:3000.

Generate a QR code:

Send a POST request to http://localhost:3000/generate-qr with a JSON body that includes the survey ID:

json
Copy code
{
  "surveyId": "12345"
}
Example with curl:

bash
Copy code
curl -X POST http://localhost:3000/generate-qr \
-H "Content-Type: application/json" \
-d '{"surveyId": "12345"}'
Example response:

json
Copy code
{
  "qrCode": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH..."
}
The response contains a Base64-encoded QR code image. You can embed this directly in HTML or decode it to display the QR code.

Example
The following JSON response shows a successful QR code generation:

json
Copy code
{
  "qrCode": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH..."
}
Viewing the QR Code
You can view the QR code by pasting the Base64 data directly in your browser's address bar like this:

bash
Copy code
data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH...
Replace <paste-base64-data-here> with your qrCode data.

License
This project is open source and available under the MIT License.
