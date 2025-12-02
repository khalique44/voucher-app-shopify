const express = require('express');
const PDFDocument = require('pdfkit');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Voucher PDF App Running');
});

app.get('/voucher', (req, res) => {
  const doc = new PDFDocument();
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename=voucher.pdf');
  doc.pipe(res);

  doc.fontSize(24).text('Voucher Receipt', { align: 'center' });
  doc.moveDown();
  doc.fontSize(16).text('Thank you for your purchase!');
  doc.text('Voucher Code: ABC-123-XYZ');
  doc.text('Issued: ' + new Date().toLocaleString());

  doc.end();
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
