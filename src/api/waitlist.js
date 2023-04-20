const client = require('@sendgrid/client');

// client.setApiKey(process.env.SENDGRID_API_KEY);

const handler = (req, res) => {
  const { method, body } = req;

  if (method === 'POST') {
    const { email } = body;

    res.status(200).json({
      status: 'success',
      email: 'some email',
    });
  } else if (method === 'GET') {
    res.status(200).json({
      status: 'success',
      message: 'Vercel supports gatsby api',
    });
  } else {
    res.status(404).json({
      status: 'fail',
      message: 'Action is not supported',
    });
  }
};

module.exports = handler;
