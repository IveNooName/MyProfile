import "./Legal.css";

function Legal() {
    return (
        <div className="legal">
            <h1>Legal Aspects of Publishing a Website</h1>

            <p>Publishing a website is not a legal vacuum. In Switzerland, four areas matter in particular: the imprint
                requirement, copyright, the choice of server location, and the protection of personality rights.</p>

            <h2>Imprint</h2>

            <p>Switzerland has an imprint requirement under Art. 3 para. 1 lit. s of the Federal Act against Unfair
                Competition (UWG). It applies to anyone offering goods or services online — not just to registered
                companies. A private hobby site with no commercial element is generally exempt, but the boundary is
                blurry, so an imprint is rarely a mistake.</p>

            <p>Minimum contents:</p>

            <ul>
                <li>Full name (or company name) and postal address</li>
                <li>An email address or contact form</li>
                <li>For companies: commercial register number and VAT number</li>
            </ul>

            <p>The imprint must be reachable from every page, typically via a footer link. Naming it "Impressum," "Legal
                Notice," or "Contact" is acceptable as long as it is easy to find.</p>

            <h2>Copyright</h2>

            <p>Under the Swiss Copyright Act (URG), a work is protected automatically from the moment it is created — no
                registration, no copyright notice required. Absence of a © symbol therefore means nothing.</p>

            <p>Practical consequences:</p>

            <ul>
                <li>Images from a Google image search are protected by default. The license filter is only a hint; the
                    license
                    must be verified at the source.
                </li>
                <li>Text may not simply be copied. Short, marked quotations with a source reference are permitted;
                    wholesale
                    reuse is not.
                </li>
                <li>Editing an image does not remove protection. Reverse image search and digital watermarks reliably
                    identify
                    modified originals.
                </li>
                <li>Icons and fonts have licenses too. Bootstrap Icons (MIT) and Material Icons (Apache 2.0) are
                    permissive;
                    Apple's SF Symbols are restricted to Apple platforms.
                </li>
            </ul>

            <p>Safe sources: Unsplash, Pexels, Pixabay, openly licensed icon libraries, self-created assets</p>

            <h2>Server Location</h2>

            <p>The server location determines which jurisdiction governs the stored data.</p>

            <ul>
                <li><strong>Switzerland:</strong> subject to the Swiss Data Protection Act (DSG). Best choice for
                    sensitive data and a
                    common
                    customer requirement.
                </li>
                <li><strong>EU:</strong> subject to the GDPR. Broadly comparable protection level.</li>
                <li><strong>USA:</strong> subject to US law, including the CLOUD Act, which can compel providers to
                    disclose data even
                    when it is
                    physically stored outside the USA.
                </li>
            </ul>

            <p>The GDPR also applies to Swiss websites as soon as they address users in the EU. A global CDN such as
                Cloudflare distributes content across many locations, which makes a precise answer to "where is my data"
                difficult — a relevant point when a customer explicitly requires Swiss data residency.</p>

            <h2>Protection of Personality Rights</h2>

            <p>Art. 28 of the Swiss Civil Code (ZGB) protects personality rights, which include the right to one's own
                image. Recognizable people may only be published with their consent. This applies to photographs of
                colleagues, customers, and passers-by alike.</p>

            Also relevant:

            <ul>
                <li><strong>Data protection:</strong> contact forms collect personal data. A privacy policy must explain
                    what is
                    collected, why,
                    for how long, and who has access.
                </li>
                <li><strong>Cookies and tracking:</strong> analytics tools require consent. Under the revised DSG,
                    transparency is
                    mandatory; the
                    GDPR additionally requires active opt-in.
                </li>
                <li><strong>Defamation:</strong> untrue or disparaging statements about identifiable persons can trigger
                    both civil and
                    criminal
                    liability.
                </li>
            </ul>
            <h2>Conclusion</h2>

            <p>The four areas overlap in practice: a contact form touches data protection, a team photo touches
                personality
                rights, and the hosting decision determines the legal framework for both. For this module, the practical
                rules are to add an imprint, use only licensed or self-created media, and document the source and
                license of
                every asset.</p>

            <p><i>This article is a summary for educational purposes and does not constitute legal advice.</i></p>
        </div>
    );
}

export default Legal;