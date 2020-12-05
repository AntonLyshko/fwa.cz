const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// Mailing
router.post('/', async (req, res) => {
  console.log('Mailing');
  const transporter = await nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'wrkonly.antsotnikov@gmail.com',
      pass: 'Asus080102',
    },
  });

  var name = '';
  var phone = '';
  var country = '';
  var date = '';
  var email = '';
  var skills = '';
  var exp = '';
  var lang = '';
  var question = '';
  var prefs = '';

  if (req.body.name) {
    name = `<p>Имя: <b>${req.body.name}</b></p>`;
  }
  if (req.body.phone) {
    phone = `<p>Телефон: <b>${req.body.phone}</b></p>`;
  }
  if (req.body.country) {
    country = `<p>Страна: <b>${req.body.country}</b></p>`;
  }
  if (req.body.date) {
    date = `<p>Дата рождения: <b>${req.body.date}</b></p>`;
  }
  if (req.body.email) {
    email = `<p>Email: <b>${req.body.email}</b></p>`;
  }
  if (req.body.skills) {
    skills = `<p>Навыки: <b>${req.body.skills}</b></p>`;
  }
  if (req.body.exp) {
    exp = `<p>Опыт: <b>${req.body.exp}</b></p>`;
  }
  if (req.body.lang) {
    lang = `<p>Языки: <b>${req.body.lang}</b></p>`;
  }
  if (req.body.question) {
    question = `<p><b>${req.body.question}</b></p>`;
  }
  if (req.body.prefs) {
    question = `<p>Предпочтения: <b>${req.body.prefs}</b></p>`;
  }

  let html = `
    <ul>
      ${name}
      ${email}
      ${phone}
      ${question}
      ${date}
      ${country}
      ${exp}
      ${skills}
      ${lang}
      ${prefs}
    </ul>
  `;

  await transporter.sendMail({
    from: '"🕊 First work agency" <info@fwa.cz>', // sender address
    to: 'antonlishko@gmail.com', // list of receivers,
    subject: `Новая заявка с fwa.cz`, // Subject line
    text: '', // plain text body
    html: html, // html body
  });
  res.send('OK');
});

module.exports = router;
