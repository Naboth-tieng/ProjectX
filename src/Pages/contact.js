// ContactUs.js
import React from 'react';

const ContactUs = () => {
  const santaEmail = 'santa@example.com';

  const openEmailToSanta = () => {
    window.location.href = `mailto:${santaEmail}?subject=Christmas Wishes&body=Dear Santa,`;
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <p>
        Submit your email and wishes to Santa to get on the 'Nice List' this Christmas!
      </p>
      <form>
        {/* Add form fields for email and message */}
        <button type="button" onClick={openEmailToSanta}>
          Send Email to Santa
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
