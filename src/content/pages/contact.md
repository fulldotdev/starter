---
presets: [base]
sections:
  - component: Contact
    heading: Contact us
    text: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ac libero ultrices tincidunt. Nullam nec purus ac libero ultrices tincidunt.
    form:
      fields:
        - type: text
          name: name
          label: Name
          required: true
        - type: email
          name: email
          label: Email
          required: true
        - type: textarea
          name: message
          label: Message
          required: true
      button: Send Message
    channels:
      - heading: Phone
        icon: phone
        text: 123-456-7890
        href: tel:123-456-7890
      - heading: Email
        icon: mail
        text: contact@example.com
        href: mailto:contact@example.com
      - heading: Address
        icon: pin
        text: 1234 Main St, Springfield, IL 62701
        href: https://maps.google.com/maps?q=1234+Main+St,+Springfield,+IL+62701
    socials:
      - icon: brand-facebook
        href: https://www.facebook.com
      - icon: brand-x
        href: https://www.twitter.com
      - icon: brand-instagram
        href: https://www.instagram.com
      - icon: brand-linkedin
        href: https://www.linkedin.com
      - icon: brand-youtube
        href: https://www.youtube.com
    image: /placeholder.webp
---
