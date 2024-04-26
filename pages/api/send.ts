import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';
import { EmailTemplate } from '@/components/interface/email-template';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, email, message } = req.body;
  const emailContent = EmailTemplate({ firstName: name, email: email, message: message });
  const emailOptions = {
    from: 'no-reply@lynnux.xyz',
    to: ['contact.lynnux@gmail.com'],
    subject: 'Hello world',
    text: 'This is the text content of the email.', 
    react: emailContent,
  };
  const { data, error } = await resend.emails.send(emailOptions);
  if (error) {
    return res.status(400).json(error);
  }
  res.status(200).json(data);
};