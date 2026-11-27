import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

export const MyForm = () => {
  const [state, handleSubmit] = useForm('mnpdyajv');
  const [focusedField, setFocusedField] = useState(null);
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  if (state.succeeded) {
    return (
      <div style={styles.successBox}>
        <h3 style={styles.successTitle}>Message Sent!</h3>
        <p style={styles.successText}>
          Thanks for reaching out. Our team will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <div style={styles.wrapper}>
      <form onSubmit={handleSubmit} style={styles.formCard}>
        <h2 style={styles.heading}>Get in Touch</h2>
        <p style={styles.subtext}>
          Tell us what your business needs and we’ll follow up with a clear scope.
        </p>

        {/* Email Field */}
        <div style={styles.fieldGroup}>
          <label htmlFor="email" style={styles.label}>
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="you@company.com"
            required
            onFocus={() => setFocusedField('email')}
            onBlur={() => setFocusedField(null)}
            style={{
              ...styles.input,
              borderColor: focusedField === 'email' ? '#007bff' : '#d1d5db',
              boxShadow:
                focusedField === 'email'
                  ? '0 0 0 3px rgba(0, 123, 255, 0.15)'
                  : 'none',
            }}
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
            style={styles.errorText}
          />
        </div>

        {/* Message Field */}
        <div style={styles.fieldGroup}>
          <label htmlFor="message" style={styles.label}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="How can we help your business?"
            required
            rows={4}
            onFocus={() => setFocusedField('message')}
            onBlur={() => setFocusedField(null)}
            style={{
              ...styles.textarea,
              borderColor: focusedField === 'message' ? '#007bff' : '#d1d5db',
              boxShadow:
                focusedField === 'message'
                  ? '0 0 0 3px rgba(0, 123, 255, 0.15)'
                  : 'none',
            }}
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
            style={styles.errorText}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={state.submitting}
          onMouseEnter={() => setIsButtonHovered(true)}
          onMouseLeave={() => setIsButtonHovered(false)}
          style={{
            ...styles.button,
            backgroundColor: isButtonHovered ? '#0056b3' : '#007bff',
            opacity: state.submitting ? 0.65 : 1,
            cursor: state.submitting ? 'not-allowed' : 'pointer',
          }}
        >
          {state.submitting ? 'Sending...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

const styles = {
  wrapper: {
    width: '100%',
    padding: '40px 20px',
    display: 'flex',
    justifyContent: 'center',
  },
  formCard: {
    width: '100%',
    maxWidth: '480px',
    backgroundColor: '#ffffff',
    padding: '32px',
    borderRadius: '16px',
    border: '1px solid #e5e7eb',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.06)',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    textAlign: 'left',
  },
  heading: {
    margin: 0,
    fontSize: '1.65rem',
    fontWeight: '700',
    color: '#007bff',
  },
  subtext: {
    margin: '-10px 0 4px 0',
    fontSize: '0.95rem',
    color: '#4b5563',
    lineHeight: 1.5,
  },
  fieldGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  label: {
    fontSize: '0.95rem',
    fontWeight: '600',
    color: '#1f2937',
  },
  input: {
    width: '100%',
    padding: '11px 14px',
    fontSize: '1rem',
    color: '#111827',
    backgroundColor: '#fff',
    border: '1px solid #d1d5db',
    borderRadius: '10px',
    outline: 'none',
    boxSizing: 'border-box',
    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
  },
  textarea: {
    width: '100%',
    padding: '11px 14px',
    fontSize: '1rem',
    color: '#111827',
    backgroundColor: '#fff',
    border: '1px solid #d1d5db',
    borderRadius: '10px',
    outline: 'none',
    resize: 'vertical',
    fontFamily: 'inherit',
    boxSizing: 'border-box',
    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
  },
  errorText: {
    color: '#dc2626',
    fontSize: '0.85rem',
    marginTop: '2px',
  },
  button: {
    width: '100%',
    padding: '12px 20px',
    fontSize: '1rem',
    fontWeight: '600',
    color: '#ffffff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '10px',
    transition: 'background-color 0.2s ease, opacity 0.2s ease',
    marginTop: '4px',
  },
  successBox: {
    maxWidth: '480px',
    margin: '40px auto',
    padding: '28px',
    borderRadius: '16px',
    backgroundColor: '#ecfdf5',
    border: '1px solid #a7f3d0',
    textAlign: 'center',
  },
  successTitle: {
    margin: '0 0 8px 0',
    color: '#065f46',
    fontSize: '1.35rem',
  },
  successText: {
    margin: 0,
    color: '#047857',
    fontSize: '0.98rem',
  },
};

export default MyForm;
