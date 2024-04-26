import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
  email: string;
  message: string;

}
export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  message,
  email,
}) => (
  <div>
    <h1>New message from, {firstName}!</h1>
    <h3>Message:</h3>
    <code>{message}</code>
    <br/>
    <footer>
      <p>reply to {email}</p>
    </footer>
  </div>
);