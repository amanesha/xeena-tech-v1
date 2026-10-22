import { LegalPageLayout } from '../../components/legal/LegalPageLayout'
import { LegalContent } from '../../components/legal/LegalContent'

const CONTENT = `
XEENA IT INFRASTRUCTURE L.L.C. ("XEENA", "we", "us", or "our") uses cookies and similar technologies on xeena.tech (the "Website") to provide, secure, operate, and improve our Website and, where applicable, understand how visitors interact with it.

This Cookie Policy explains what cookies are, how we may use them, the types of cookies that may be used on our Website, and how you can manage your preferences.

This Cookie Policy should be read together with our Privacy Policy.

Where applicable, our use of cookies and similar technologies is intended to comply with relevant UAE privacy and data protection requirements, including the UAE Federal Decree-Law No. 45 of 2021 Concerning the Protection of Personal Data, as well as applicable international privacy and electronic communications requirements, including the EU General Data Protection Regulation (GDPR) and UK GDPR, where applicable.

1. What Are Cookies?

Cookies are small text files that may be placed on your computer, mobile device, tablet, or other device when you visit a website.

Cookies allow a website to recognise a user's device and remember certain information about the user's preferences or activities.

Cookies may be:

Session cookies, which are deleted when you close your browser; or

Persistent cookies, which remain on your device for a specified period or until you delete them.

We may also use similar technologies, such as pixels, tags, scripts, local storage, and other tracking technologies.

2. Why We Use Cookies

Depending on how our Website is configured, XEENA may use cookies and similar technologies to:

Operate the Website;

Maintain website functionality;

Protect the Website against security threats;

Remember user preferences;

Improve website performance;

Understand how visitors use the Website;

Measure website traffic;

Analyse website performance;

Improve our services and user experience;

Support marketing activities where permitted; and

Comply with applicable legal and regulatory requirements.

We do not use cookies for purposes that are incompatible with the purposes communicated to users or permitted by applicable law.
Measure website, product or conversion performance and understand interactions with our website, tools or digital services.

3. Types of Cookies We May Use

The specific cookies used on xeena.tech may change as we update our website and technology providers.

3.1 Strictly Necessary Cookies

These cookies are necessary for the Website to function properly.

They may be used for purposes such as:

Website security;

Session management;

Authentication;

Network management;

Load balancing;

Form functionality; and

Maintaining essential website features.

Because these cookies may be necessary for the operation and security of the Website, they may not always be capable of being disabled through a cookie preference tool.

3.2 Functional Cookies

Functional cookies may allow the Website to remember choices or preferences made by users.

For example, they may remember:

Language preferences;

Region;

Display preferences; or

Other settings selected by the user.

These cookies are intended to improve the user experience.

3.3 Analytics and Performance Cookies

Where enabled, analytics cookies help us understand how visitors use our Website.

They may collect information such as:

Pages visited;

Time spent on pages;

General traffic patterns;

Browser or device information;

Referring websites; and

Website interactions.

Analytics information may be used to understand website performance and improve the Website.

Where consent is legally required, these cookies will only be activated after the relevant consent has been obtained.

3.4 Marketing and Advertising Cookies

Where applicable, marketing or advertising cookies may be used to:

Measure marketing campaigns;

Understand interactions with advertisements;

Deliver or personalise relevant advertising; or

Measure advertising effectiveness.

These cookies will only be used where permitted by applicable law and, where required, after obtaining appropriate consent.

XEENA does not sell personal data through the use of cookies.

3.5 Third-Party Cookies

Some cookies or similar technologies may be placed or used by third-party service providers whose services are integrated into or used in connection with our website.

These providers may include, depending on the technologies actually implemented on xeena.tech:

Website analytics providers;

Website security providers;

Embedded content providers;

Marketing platforms;

Social media platforms;

Customer support technologies;

Technology integration and API providers; and

Other technology or service providers.

Third-party technologies may be used to support Website functionality, analytics, security, communications, integrations, or other services made available through the Website.

Where applicable, third-party providers may process information collected through cookies or similar technologies in accordance with their own privacy policies and applicable data protection requirements.

XEENA does not control the privacy practices of third-party providers. We recommend reviewing the privacy policies and cookie policies of relevant third-party providers where applicable.

4. Cookies and Personal Data

Some cookies may collect or generate information that can constitute personal data, such as an IP address, online identifier, device information, or browsing activity.

Where cookie-related information constitutes personal data, it will be handled in accordance with our Privacy Policy and applicable data protection legislation.

For more information about how XEENA processes personal data, please refer to our Privacy Policy.

5. Cookie Consent

Where applicable law requires consent for non-essential cookies or similar technologies, XEENA will seek consent before placing or activating those technologies.

Users may be provided with a cookie banner, consent management platform, or similar mechanism allowing them to:

Accept applicable cookies;

Reject non-essential cookies;

Select specific categories of cookies; and

Change or withdraw their preferences.

Strictly necessary cookies may continue to operate where they are required to provide the Website or a service requested by the user.

6. Managing Your Cookie Preferences

You may manage cookies through:

6.1 Our Cookie Preference Tool

Where available, you can use the cookie preference tool displayed on our website to manage your preferences.

You may change or withdraw your consent at any time through the available cookie settings.

6.2 Browser Settings

Most web browsers allow you to control or delete cookies through their settings.

You can generally:

Block cookies;

Delete existing cookies;

Allow cookies;

Receive notifications before cookies are stored; or

Block third-party cookies.

Please note that disabling certain cookies may affect the functionality or performance of the Website.

7. International Data Transfers

Some third-party technology and service providers may process information outside the United Arab Emirates.

Where cookie-related personal data is transferred internationally, XEENA will take appropriate measures required by applicable data protection law.

Where GDPR applies, applicable international transfer mechanisms and safeguards will be used where required.

8. Cookie Retention

Cookies may remain on your device for different periods depending on their purpose.

Some cookies are deleted when you close your browser, while others may remain for a specified period.

The retention period depends on the particular cookie and its purpose.

XEENA will seek to ensure that cookie-related personal data is not retained for longer than reasonably necessary for the relevant purpose, subject to applicable legal requirements.

9. Do Not Track Signals

Some browsers provide "Do Not Track" or similar signals.

Because there is currently no universally consistent technical standard for responding to such signals, XEENA may not respond to all browser-based Do Not Track signals.

Where applicable law requires a particular response to such signals, XEENA will comply with the applicable requirement.

10. Children's Privacy

Our Website is not intentionally directed toward children.

We do not knowingly use cookies to collect personal data from children where such collection is prohibited by applicable law.

If you believe that personal information relating to a child has been collected through our Website, please contact us.

11. Changes to This Cookie Policy

We may update this Cookie Policy from time to time to reflect:

Changes to our Website;

Changes to cookies or tracking technologies we use;

Changes to our service providers;

Changes to our business practices;

Changes in applicable legislation; or

Changes in regulatory requirements.

When we make changes, we will update the "Last Updated" date at the beginning of this Policy.

Where required, we may also provide additional notice or request renewed consent.

12. Contact Us

If you have questions about this Cookie Policy or how XEENA uses cookies and similar technologies, please contact us.

XEENA IT INFRASTRUCTURE L.L.C.

Website: xeena.tech

Privacy Contact: privacy@xeena.tech

Support Contact: support@xeena.tech

13. Governing Law

This Cookie Policy is primarily governed by the applicable laws and regulations of the United Arab Emirates.

Where mandatory privacy, data protection, or electronic communications requirements of another jurisdiction apply to a particular user or processing activity, XEENA will comply with those mandatory requirements to the extent legally applicable.

Nothing in this Cookie Policy is intended to exclude or limit any rights that cannot lawfully be excluded or limited under applicable law.
`

export function CookiePolicy() {
  return (
    <LegalPageLayout title="Cookie Policy" effectiveDate="19 August 2026" light>
      <LegalContent text={CONTENT} light />
    </LegalPageLayout>
  )
}
