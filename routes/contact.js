const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    // Настройка транспорта для отправки email
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: 'contact@pimteh.ru',
      subject: 'Новое сообщение с сайта',
      text: `Имя: ${name}\nEmail: ${email}\nСообщение: ${message}`
    });

    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Ошибка отправки сообщения' });
  }
});

module.exports = router;