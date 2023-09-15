import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("mrgwlpnr");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
      <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}

export default ContactForm;

// import { useForm } from '@formspree/react';

// function MyForm() {
//   const [state, handleSubmit] = useForm('{your-form-id}');
//   if (state.succeeded) {
//     return <div>Thank you for signing up!</div>;
//   }
//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="email">Email</label>
//       <input id="email" type="email" name="email" />
//       <button type="submit" disabled={state.submitting}>Sign up</button>
//     </form>
//   )
// }
// export default MyForm;

//https://help.formspree.io/hc/en-us/articles/360055613373-The-Formspree-React-library
