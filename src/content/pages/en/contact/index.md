---
sections:
  - block: contact-1
    title: Let's talk
    description: Share your project details and we will respond quickly.
    form:
      action: /api/contact/
      submit: Send message
      fields:
        - type: text
          name: name
          label: Name
          placeholder: Your name
          required: true
        - type: email
          name: email
          label: Email
          placeholder: Your email
          required: true
        - type: textarea
          name: message
          label: Message
          placeholder: Tell us more
          required: true
seo:
  title: Contact - fulldev/ui
  description: Reach out to the fulldev/ui team.
---
