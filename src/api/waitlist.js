const client = require('@sendgrid/client');

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
const WAITLIST_SENDGRID_ID = process.env.WAITLIST_SENDGRID_ID;

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
      
      console.log('res', response);
      console.log('body', body);
      
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
  } else {
    res.status(404).json({
      status: 'fail',
      message: 'Action is not supported',
    });
  }
};

module.exports = handler;
