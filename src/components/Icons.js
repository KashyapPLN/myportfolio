import React from 'react';

// Inline SVG icons so they can't break the way hotlinked images do.

export function PhoneIcon() {
  return (
    <div className='contact-icon ring'>
      <svg viewBox='0 0 24 24' aria-hidden='true'>
        <path d='M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z' />
      </svg>
    </div>
  );
}

export function EmailIcon() {
  return (
    <div className='contact-icon bounce'>
      <svg viewBox='0 0 24 24' aria-hidden='true'>
        <path d='M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z' />
      </svg>
    </div>
  );
}

export function ResumeIcon({ className }) {
  return (
    <svg className={className} viewBox='0 0 24 24' fill='currentColor' aria-hidden='true'>
      <path d='M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z' />
    </svg>
  );
}
