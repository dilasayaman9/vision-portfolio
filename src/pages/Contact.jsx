import { Github, Linkedin, Mail } from 'lucide-react';
import { useState } from 'react';
import ButtonLink from '../components/ButtonLink.jsx';
import PageHero from '../components/PageHero.jsx';
import PageMeta from '../components/PageMeta.jsx';
import { profile } from '../data/siteData.js';

const endpoint = 'https://formspree.io/f/xvkokkyq';

const initialForm = {
  name: '',
  email: '',
  inquiryType: '',
  subject: '',
  message: '',
  company: '',
};

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = 'Please enter your name.';
  if (!form.email.trim()) errors.email = 'Please enter your email address.';
  if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!form.inquiryType) errors.inquiryType = 'Please choose an inquiry type.';
  if (!form.subject.trim()) errors.subject = 'Please enter a subject.';
  if (!form.message.trim()) errors.message = 'Please include a message.';
  return errors;
}

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus('error');
      return;
    }

    if (form.company) return;

    setStatus('loading');
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          inquiryType: form.inquiryType,
          subject: form.subject,
          message: form.message,
        }),
      });

      if (!response.ok) throw new Error('Form submission failed');
      setForm(initialForm);
      setStatus('success');
    } catch {
      setStatus('failed');
    }
  };

  return (
    <>
      <PageMeta
        title="Contact | Dilasa Yaman"
        description="Contact Dilasa Yaman about internships, collaborations, website projects, or general questions."
      />
      <PageHero eyebrow="Contact" title="Start a Conversation">
        <p>
          I would be happy to hear about internship opportunities, collaborations, website projects,
          or general questions.
        </p>
      </PageHero>

      <section className="section section-cream">
        <div className="container contact-layout">
          <aside className="contact-intro" aria-labelledby="contact-links-heading">
            <h2 id="contact-links-heading">Contact details</h2>
            <p>
              Send a note through the form, email me directly, or connect with me on LinkedIn and GitHub.
            </p>
            <div className="contact-links">
              <a href={profile.emailLink}>
                <Mail aria-hidden="true" size={18} />
                {profile.email}
              </a>
              <a href={profile.linkedIn} target="_blank" rel="noreferrer noopener">
                <Linkedin aria-hidden="true" size={18} />
                LinkedIn
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer noopener">
                <Github aria-hidden="true" size={18} />
                GitHub
              </a>
            </div>
            <ButtonLink to="/book" variant="secondary">
              Book a Call
            </ButtonLink>
          </aside>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="honeypot" aria-hidden="true">
              <label htmlFor="company">Company</label>
              <input id="company" name="company" value={form.company} onChange={updateField} tabIndex="-1" autoComplete="off" />
            </div>
            <div className="field-pair">
              <div className="form-field">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" value={form.name} onChange={updateField} aria-describedby={errors.name ? 'name-error' : undefined} />
                {errors.name ? <p className="field-error" id="name-error">{errors.name}</p> : null}
              </div>
              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={updateField}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email ? <p className="field-error" id="email-error">{errors.email}</p> : null}
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="inquiryType">Inquiry type</label>
              <select
                id="inquiryType"
                name="inquiryType"
                value={form.inquiryType}
                onChange={updateField}
                aria-describedby={errors.inquiryType ? 'inquiry-error' : undefined}
              >
                <option value="">Choose one</option>
                <option>Internship or professional opportunity</option>
                <option>Website project</option>
                <option>Collaboration</option>
                <option>General question</option>
              </select>
              {errors.inquiryType ? <p className="field-error" id="inquiry-error">{errors.inquiryType}</p> : null}
            </div>
            <div className="form-field">
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                name="subject"
                value={form.subject}
                onChange={updateField}
                aria-describedby={errors.subject ? 'subject-error' : undefined}
              />
              {errors.subject ? <p className="field-error" id="subject-error">{errors.subject}</p> : null}
            </div>
            <div className="form-field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="7"
                value={form.message}
                onChange={updateField}
                aria-describedby={errors.message ? 'message-error' : undefined}
              />
              {errors.message ? <p className="field-error" id="message-error">{errors.message}</p> : null}
            </div>
            <button className="button button-primary" type="submit" disabled={status === 'loading'}>
              <span>{status === 'loading' ? 'Sending...' : 'Submit Message'}</span>
            </button>
            <div className="form-status" aria-live="polite">
              {status === 'success' ? <p>Your message was sent. Thank you for reaching out.</p> : null}
              {status === 'failed' ? <p>Something went wrong. Please email me directly instead.</p> : null}
              {status === 'error' ? <p>Please review the highlighted fields before submitting.</p> : null}
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
