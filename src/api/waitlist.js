const client = require('@sendgrid/client');

const SENDGRID_API_KEY =
  process.env.SENDGRID_API_KEY ||
  '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';
const WAITLIST_SENDGRID_ID =
  process.env.WAITLIST_SENDGRID_ID || 'b2ab146-fb3f-4c25-bce5-457dff88bd9a';

client.setApiKey(SENDGRID_API_KEY);

const handler = async (req, res) => {
  const { method, body } = req;

  if (method === 'POST') {
    const { email } = body;

    const data = {
      list_ids: [WAITLIST_SENDGRID_ID],
      contacts: [{ email }],
    };

    try {
      const [response, body] = await client.request({
        url: `/v3/marketing/contacts`,
        method: 'PUT',
        body: data,
      });

      res.status(200).json({
        status: 'success',
        email,
      });
    } catch (e) {
      res.status(400).json({
        status: 'fail',
        message: e?.message || e,
      });
    }
  } else if (method === 'GET') {
    const request = {
      url: `/v3/marketing/lists`,
      method: 'GET',
    };

    const [response, body] = await client.request(request);

    res.status(200).json({
      status: 'success',
      data: body,
    });
  } else {
    res.status(404).json({
      status: 'fail',
      message: 'Action is not supported',
    });
  }
};

module.exports = handler;
