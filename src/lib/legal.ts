/**
 * Template legal copy for Maverick Creatives. Drafted to reflect how a Lagos-based
 * media, branding and event-coverage agency actually operates, but it is a
 * starting point — it must be reviewed by a qualified Nigerian legal
 * practitioner before it is relied on.
 */

export type Block =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] };

export type Section = { heading: string; blocks: Block[] };

export type LegalDoc = {
  slug: string;
  title: string;
  updated: string;
  intro: string;
  sections: Section[];
};

const CONTACT = "themaverickcreatives@gmail.com";
const ADDRESS = "9 Ayoka Street, opposite Justrite Supermarket, Bariga, Lagos, Nigeria";

export const termsOfService: LegalDoc = {
  slug: "terms",
  title: "Terms of Service",
  updated: "11 August 2026",
  intro:
    "These Terms of Service govern your access to the Maverick Creatives website and your engagement of our creative, media production, branding, event coverage, digital and training services. Please read them carefully — by using our website or commissioning work from us, you agree to be bound by them.",
  sections: [
    {
      heading: "1. Who we are",
      blocks: [
        {
          type: "p",
          text: `Maverick Creatives ("Maverick Creatives", "we", "us" or "our") is a creative agency operating from ${ADDRESS}. We provide branding and strategy, media production, digital services, event coverage, and training and growth programmes. References to "you" or "Client" mean the individual or organisation accessing our website or engaging our services.`,
        },
      ],
    },
    {
      heading: "2. Acceptance of these Terms",
      blocks: [
        {
          type: "p",
          text: "By browsing this website, submitting an enquiry, signing a proposal, paying a deposit, or otherwise instructing us to begin work, you confirm that you have read, understood and accepted these Terms. If you are agreeing on behalf of a company or other legal entity, you represent that you have authority to bind that entity.",
        },
        {
          type: "p",
          text: "If you do not agree with any part of these Terms, you should not use our website or engage our services.",
        },
      ],
    },
    {
      heading: "3. Engaging our services",
      blocks: [
        {
          type: "p",
          text: "Each engagement is defined by a written proposal, quotation, statement of work or booking confirmation (each, a \"Project Document\"). The Project Document sets out the agreed deliverables, timelines, fees and any project-specific terms.",
        },
        {
          type: "p",
          text: "Where a Project Document conflicts with these Terms, the Project Document prevails for that engagement only. Quotations are valid for thirty (30) days from issue unless stated otherwise, and are based on the scope described to us at the time.",
        },
      ],
    },
    {
      heading: "4. Fees, deposits and payment",
      blocks: [
        {
          type: "ul",
          items: [
            "A non-refundable booking deposit — typically fifty per cent (50%) of the project fee — is payable before work commences or a date is reserved.",
            "The balance falls due on the schedule stated in the Project Document, and in any event before final files, masters or high-resolution deliverables are released.",
            "All fees are exclusive of Value Added Tax and any other applicable taxes, levies or withholding, which are payable by the Client.",
            "Third-party costs — talent, licensed music, stock footage, printing, equipment hire, permits, travel and accommodation — are billed in addition unless expressly stated as included.",
            "Invoices unpaid after fourteen (14) days may attract interest at 2% per month on the outstanding balance, and we may suspend work until the account is settled.",
          ],
        },
      ],
    },
    {
      heading: "5. Client responsibilities",
      blocks: [
        {
          type: "p",
          text: "Timely delivery depends on your cooperation. You agree to provide accurate briefs, brand assets, access, approvals and site permissions when reasonably required, and to nominate a single point of contact with authority to approve work.",
        },
        {
          type: "p",
          text: "You warrant that any material you supply to us — including logos, photographs, footage, music, copy and trade marks — is either owned by you or properly licensed for the intended use, and that our use of it will not infringe any third-party right.",
        },
      ],
    },
    {
      heading: "6. Timelines, revisions and approvals",
      blocks: [
        {
          type: "p",
          text: "Timelines in a Project Document are good-faith estimates and assume prompt feedback. Delays caused by late materials, late approvals or expanded scope will move delivery dates accordingly.",
        },
        {
          type: "p",
          text: "Unless stated otherwise, each deliverable includes two (2) rounds of consolidated revisions within the agreed scope. Further revisions, or changes that alter the agreed direction after sign-off, are chargeable at our prevailing rates and may require a revised Project Document.",
        },
        {
          type: "p",
          text: "Deliverables are deemed approved if you do not raise written comments within seven (7) days of delivery.",
        },
      ],
    },
    {
      heading: "7. Intellectual property",
      blocks: [
        {
          type: "p",
          text: "All intellectual property in work created by us remains our property until we have received payment in full. On full payment, we assign to you the rights in the final approved deliverables for the purposes described in the Project Document.",
        },
        {
          type: "ul",
          items: [
            "Working files, project files, raw footage, unused concepts, source designs and outtakes remain our property unless expressly purchased.",
            "Tools, templates, methodologies, know-how and pre-existing materials we bring to a project remain ours; you receive a non-exclusive licence to use them as embedded in the deliverables.",
            "Third-party assets such as fonts, stock imagery and licensed music are supplied under their own licence terms, which pass to you subject to those terms and any usage limits.",
            "Extending use beyond the agreed territory, media or duration may require an additional licence fee.",
          ],
        },
      ],
    },
    {
      heading: "8. Portfolio and credit",
      blocks: [
        {
          type: "p",
          text: "Unless you tell us otherwise in writing before the work begins, we may display completed work in our portfolio, on this website, in pitch materials, on social media and in award submissions, and may identify you as a client.",
        },
        {
          type: "p",
          text: "We will honour reasonable confidentiality or embargo requests, and will not disclose commercially sensitive information in doing so.",
        },
      ],
    },
    {
      heading: "9. Event coverage, likeness and consent",
      blocks: [
        {
          type: "p",
          text: "For event coverage, you are responsible for securing venue permissions and for informing attendees that photography and filming will take place. Where required by law, you are responsible for obtaining consents from attendees, performers and minors' guardians.",
        },
        {
          type: "p",
          text: "We will use reasonable care to respect individuals who object to being recorded, and will remove a specific individual from published material on reasonable written request where it is technically practicable to do so.",
        },
      ],
    },
    {
      heading: "10. Cancellation, postponement and refunds",
      blocks: [
        {
          type: "ul",
          items: [
            "Booking deposits are non-refundable, as they reserve capacity we turn away other work to hold.",
            "If you cancel after work has begun, you remain liable for all work performed and all third-party costs committed up to the cancellation date.",
            "Event bookings postponed with fewer than fourteen (14) (fourteen) days' notice may attract a rescheduling fee, and we cannot guarantee availability on a new date.",
            "If we cancel for reasons within our control, we will refund sums paid for work not yet performed, which is your sole remedy in those circumstances.",
          ],
        },
      ],
    },
    {
      heading: "11. Training programmes and community",
      blocks: [
        {
          type: "p",
          text: "Places on our training programmes are confirmed on payment and are personal to the participant. Course materials are licensed for personal learning only and may not be reproduced, resold or distributed without our written permission.",
        },
        {
          type: "p",
          text: "We may remove any participant whose conduct is unlawful, harassing, discriminatory or materially disruptive, without refund.",
        },
      ],
    },
    {
      heading: "12. Acceptable use of this website",
      blocks: [
        {
          type: "p",
          text: "You agree not to misuse this website. In particular, you must not attempt to gain unauthorised access to it, introduce malicious code, scrape or harvest content at scale, reproduce substantial parts of it without permission, or use it in any way that is unlawful or infringes the rights of others.",
        },
      ],
    },
    {
      heading: "13. Third-party links and services",
      blocks: [
        {
          type: "p",
          text: "Our website may link to third-party sites and platforms that we do not control. We provide those links for convenience only and accept no responsibility for their content, availability, or privacy and security practices.",
        },
      ],
    },
    {
      heading: "14. Warranties and disclaimers",
      blocks: [
        {
          type: "p",
          text: "We warrant that our services will be performed with reasonable skill and care by suitably experienced personnel. Beyond that, and to the fullest extent permitted by law, our website and services are provided on an \"as is\" and \"as available\" basis without further warranties of any kind.",
        },
        {
          type: "p",
          text: "We do not warrant any particular commercial outcome, audience growth, engagement level, ranking or revenue arising from creative or marketing work.",
        },
      ],
    },
    {
      heading: "15. Limitation of liability",
      blocks: [
        {
          type: "p",
          text: "Nothing in these Terms excludes liability for death or personal injury caused by negligence, for fraud, or for any liability that cannot lawfully be excluded.",
        },
        {
          type: "p",
          text: "Subject to that, we are not liable for indirect or consequential loss, loss of profit, loss of business, loss of anticipated savings, loss of goodwill, or loss or corruption of data. Our total aggregate liability arising out of any engagement is limited to the total fees paid by you to us for that engagement.",
        },
        {
          type: "p",
          text: "We maintain backups of project media for a reasonable period but are not a data-archiving service; you should keep your own copies of delivered files.",
        },
      ],
    },
    {
      heading: "16. Indemnity",
      blocks: [
        {
          type: "p",
          text: "You agree to indemnify us against claims, losses and reasonable costs arising from material you supplied to us, from your use of deliverables beyond the agreed licence, or from your breach of these Terms.",
        },
      ],
    },
    {
      heading: "17. Force majeure",
      blocks: [
        {
          type: "p",
          text: "Neither party is liable for failure or delay caused by events beyond its reasonable control, including natural disaster, epidemic, civil unrest, industrial action, government restriction, power or telecommunications failure, or the cancellation of a venue by its operator. Affected obligations are suspended for the duration of the event.",
        },
      ],
    },
    {
      heading: "18. Confidentiality",
      blocks: [
        {
          type: "p",
          text: "Each party will keep the other's non-public information confidential, use it only for the purposes of the engagement, and protect it with at least reasonable care. This obligation does not apply to information that is public through no breach, independently developed, or required to be disclosed by law.",
        },
      ],
    },
    {
      heading: "19. Termination",
      blocks: [
        {
          type: "p",
          text: "Either party may terminate an engagement on written notice if the other commits a material breach that is not remedied within fourteen (14) days of notice, or becomes insolvent. On termination you remain liable for work performed and costs committed. Clauses that by their nature should survive — including intellectual property, confidentiality, liability and governing law — continue to apply.",
        },
      ],
    },
    {
      heading: "20. Governing law and disputes",
      blocks: [
        {
          type: "p",
          text: "These Terms are governed by the laws of the Federal Republic of Nigeria. The parties will first attempt to resolve any dispute in good faith through discussion between senior representatives.",
        },
        {
          type: "p",
          text: "If a dispute is not resolved within thirty (30) days, it will be referred to mediation in Lagos before either party commences proceedings. Subject to that, the courts of Lagos State have exclusive jurisdiction.",
        },
      ],
    },
    {
      heading: "21. Changes to these Terms",
      blocks: [
        {
          type: "p",
          text: "We may update these Terms from time to time. The version published on this page at the date of your Project Document applies to that engagement. Continued use of the website after changes are posted constitutes acceptance of the updated Terms.",
        },
      ],
    },
    {
      heading: "22. Contact us",
      blocks: [
        {
          type: "p",
          text: `Questions about these Terms can be sent to ${CONTACT}, or by post to ${ADDRESS}.`,
        },
      ],
    },
  ],
};

export const privacyPolicy: LegalDoc = {
  slug: "privacy",
  title: "Privacy Policy",
  updated: "11 August 2026",
  intro:
    "This Privacy Policy explains how Maverick Creatives collects, uses, shares and protects personal information when you visit our website, enquire about our services, engage us on a project, attend an event we are covering, or join one of our training programmes.",
  sections: [
    {
      heading: "1. Who is responsible for your data",
      blocks: [
        {
          type: "p",
          text: `Maverick Creatives is the data controller for the personal information described in this Policy. We are based at ${ADDRESS} and can be reached at ${CONTACT}.`,
        },
        {
          type: "p",
          text: "We process personal data in line with the Nigeria Data Protection Act 2023 and, where it applies to a particular engagement, other applicable data protection law.",
        },
      ],
    },
    {
      heading: "2. Information we collect",
      blocks: [
        { type: "p", text: "We collect the following categories of information:" },
        {
          type: "ul",
          items: [
            "Information you give us — your name, business name, email address, phone number, project brief, budget indication and any other details you include in an enquiry, proposal discussion or contract.",
            "Client and billing records — engagement history, invoices, payment references and correspondence. We do not store full card or bank credentials; payments are handled by our bank or payment provider.",
            "Photographic, video and audio media — images, footage and recordings captured during event coverage, production shoots and training sessions, which may include identifiable individuals.",
            "Training participant data — registration details, attendance records and, where relevant, submitted coursework.",
            "Technical and usage data — IP address, device and browser type, referring page, pages visited and approximate location, collected automatically when you browse the site.",
            "Recruitment data — CVs and application details, where you apply to work or intern with us.",
          ],
        },
      ],
    },
    {
      heading: "3. How and why we use your information",
      blocks: [
        {
          type: "ul",
          items: [
            "To respond to enquiries and prepare proposals and quotations — on the basis of steps taken at your request before entering a contract.",
            "To deliver, manage and invoice for our services — on the basis of performing our contract with you.",
            "To capture, edit and deliver event and production media — on the basis of our contract with the commissioning client and our legitimate interest in documenting commissioned work.",
            "To showcase completed work in our portfolio and marketing — on the basis of our legitimate interest in promoting our services, subject to any confidentiality agreed with you.",
            "To send service updates and, where you have opted in, marketing communications — on the basis of consent, which you may withdraw at any time.",
            "To operate, secure and improve our website — on the basis of our legitimate interest in a functional and safe service.",
            "To comply with tax, accounting and other legal obligations — on the basis of legal obligation.",
          ],
        },
      ],
    },
    {
      heading: "4. Photography, filming and your likeness",
      blocks: [
        {
          type: "p",
          text: "Where we cover an event, the organiser is normally responsible for notifying attendees that filming and photography will take place. Media captured may be used to deliver the commission and, subject to the client's instructions, in our portfolio.",
        },
        {
          type: "p",
          text: "If you appear in media we have captured and would prefer not to, contact us with enough detail to identify the material. We will remove or obscure you in content we control where it is reasonably practicable, though we may be unable to recall material already published or distributed by a client or third party.",
        },
      ],
    },
    {
      heading: "5. Cookies and similar technologies",
      blocks: [
        {
          type: "p",
          text: "Our website uses a small number of cookies and similar technologies to keep the site working, remember preferences and understand aggregate usage. Strictly necessary cookies are required for the site to function.",
        },
        {
          type: "p",
          text: "You can block or delete cookies through your browser settings. Doing so may affect how parts of the site behave.",
        },
      ],
    },
    {
      heading: "6. When we share information",
      blocks: [
        { type: "p", text: "We do not sell your personal information. We share it only as follows:" },
        {
          type: "ul",
          items: [
            "With service providers who work on our behalf — hosting and website infrastructure, cloud storage and file transfer, email and scheduling tools, accounting software, and payment processors.",
            "With production collaborators — freelance photographers, videographers, editors, sound engineers and printers engaged for your project, bound by confidentiality obligations.",
            "With our professional advisers — lawyers, accountants and insurers, where necessary.",
            "Where required by law, regulation, court order or a lawful request from a public authority.",
            "In connection with a business reorganisation, merger or sale of assets, subject to appropriate protections.",
          ],
        },
      ],
    },
    {
      heading: "7. International transfers",
      blocks: [
        {
          type: "p",
          text: "Some of the tools we use — cloud storage, email and analytics in particular — are operated by providers outside Nigeria. Where personal data is transferred abroad, we take reasonable steps to ensure an adequate level of protection through appropriate contractual safeguards.",
        },
      ],
    },
    {
      heading: "8. How long we keep information",
      blocks: [
        {
          type: "ul",
          items: [
            "Enquiries that do not become projects — up to twenty-four (24) months.",
            "Client project records and contracts — for the duration of the engagement and for a minimum of six (6) years afterwards, to meet tax and legal requirements.",
            "Project media and archives — retained as part of our portfolio and working archive unless you ask us to remove specific material and we are able to do so.",
            "Marketing contacts — until you unsubscribe or ask us to delete your details.",
            "Website technical logs — a short rolling period, typically no more than twelve (12) months.",
          ],
        },
      ],
    },
    {
      heading: "9. How we protect your information",
      blocks: [
        {
          type: "p",
          text: "We apply access controls, encrypted transfer, reputable cloud storage and staff confidentiality obligations to protect personal data. No system is completely secure, but we work to protect information proportionately to its sensitivity and will notify you and the relevant authority of a qualifying breach as required by law.",
        },
      ],
    },
    {
      heading: "10. Your rights",
      blocks: [
        {
          type: "p",
          text: "Subject to the conditions in applicable law, you have the right to:",
        },
        {
          type: "ul",
          items: [
            "Ask what personal data we hold about you and receive a copy of it.",
            "Have inaccurate or incomplete information corrected.",
            "Ask us to delete personal data where there is no continuing lawful reason for us to keep it.",
            "Object to, or ask us to restrict, processing that relies on our legitimate interests.",
            "Withdraw consent at any time, without affecting processing carried out before withdrawal.",
            "Receive certain data you gave us in a portable, machine-readable format.",
            "Lodge a complaint with the Nigeria Data Protection Commission.",
          ],
        },
        {
          type: "p",
          text: `To exercise any of these rights, email ${CONTACT}. We may ask for information to verify your identity, and will respond within the period required by law.`,
        },
      ],
    },
    {
      heading: "11. Marketing preferences",
      blocks: [
        {
          type: "p",
          text: "If you have opted in to hear from us, you can unsubscribe at any time using the link in any marketing email or by contacting us directly. We will still send you necessary messages about projects you have commissioned.",
        },
      ],
    },
    {
      heading: "12. Children",
      blocks: [
        {
          type: "p",
          text: "Our services are directed at businesses and adults. We do not knowingly collect personal data from children without appropriate consent from a parent or guardian. Where minors appear in event or training media, we rely on the organiser or guardian to provide the necessary consent. If you believe we hold a child's data inappropriately, contact us and we will address it promptly.",
        },
      ],
    },
    {
      heading: "13. Third-party websites",
      blocks: [
        {
          type: "p",
          text: "This Policy covers only our own website and services. Social platforms and other sites we link to have their own privacy practices, and we encourage you to read them.",
        },
      ],
    },
    {
      heading: "14. Changes to this Policy",
      blocks: [
        {
          type: "p",
          text: "We may update this Policy to reflect changes in our practices or the law. The date at the top of this page shows when it was last revised, and material changes will be highlighted on this page.",
        },
      ],
    },
    {
      heading: "15. Contact and complaints",
      blocks: [
        {
          type: "p",
          text: `For any question about this Policy or how we handle your information, email ${CONTACT} or write to us at ${ADDRESS}. If you are not satisfied with our response, you may complain to the Nigeria Data Protection Commission.`,
        },
      ],
    },
  ],
};

export const legalDocs: Record<string, LegalDoc> = {
  terms: termsOfService,
  privacy: privacyPolicy,
};
