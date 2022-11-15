import MailchimpSubscribe from 'react-mailchimp-subscribe'
import NewsletterForm from './NewsletterForm'

const NewsletterSubscribe = () => {
  const MAILCHIMP_URL = process.env.NEXT_PUBLIC_MAILCHIMP_URL

  return (
    <NewsletterForm
      status={'status'}
      message={'message'}
      onValidated={(formData) => subscribe(formData)}
    />
  )
}

export default NewsletterSubscribe
