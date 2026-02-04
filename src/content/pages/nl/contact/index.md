---
sections:
  - block: contact-1
    title: Laten we praten
    description: Deel je projectdetails en we reageren snel.
    form:
      action: /api/contact/
      submit: Bericht verzenden
      fields:
        - type: text
          name: name
          label: Naam
          placeholder: Je naam
          required: true
        - type: email
          name: email
          label: E-mail
          placeholder: Je e-mailadres
          required: true
        - type: textarea
          name: message
          label: Bericht
          placeholder: Vertel ons meer
          required: true
seo:
  title: Contact - fulldev/ui
  description: Neem contact op met het fulldev/ui team.
---
