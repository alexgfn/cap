import React from 'react';
import './FooterComponent.css';

function FooterComponent() {
  return (
    <footer className="footer">
      <div className="container">
        <section className="flex-wrap">
          <div className="column">
            <h5 className="section-title">Solutions</h5>
            <nav className="nav-links">
              <a href="/get-credit/" className="link">Business credit</a>
              <a href="/partners/" className="link">Partners</a>
              <a href="/insights/" className="link">Insights</a>
            </nav>
          </div>

          <div className="column">
            <h5 className="section-title">Resources</h5>
            <nav className="nav-links">
              <a href="/resources/guides/funding/" className="link">Business Funding Guide</a>
              <a href="/resources/guides/lines-credit/" className="link">Business Line of Credit</a>
              <a href="/marketplace/" className="link">Partner Marketplace</a>
              <a href="/resources/" className="link">Resources Library</a>
              <a href="/blog/" className="link">Blog</a>
            </nav>
          </div>

          <div className="column">
            <h5 className="section-title">Get in touch</h5>
            <nav className="nav-links">
              <a href="tel:8555727707" className="link">Questions: (404)-920-4946</a>
              <a href="https://help.fundbox.com/hc/en-us" className="link">Help Center</a>
              <a href="/about/" className="link">About</a>
              <a href="/about/press/" className="link">Press</a>
              <a href="/careers/" className="link">Careers</a>
            </nav>
          </div>

          {/* Divider */}
          <div className="divider"></div>

          {/* Additional content */}
          <div className="additional-content">
            <nav className="social-links">
              {/* ... Social media icons */}
            </nav>
            <div className="security-info">
              <p>Security is our top priority. We use industry best practice security protocols.</p>
            </div>
          </div>
        </section>

        <section className="footer-bottom">
          <div className="white-bar"></div>
          <nav className="bottom-nav">
            <a href="/tou/" className="bottom-link">Terms of Use</a>
            <a href="/privacy/" className="bottom-link">Privacy Policy</a>
            <a href="/disclaimers/" className="bottom-link">Disclaimers</a>
            <a href="/prohibited-businesses/" className="bottom-link">Prohibited Businesses</a>
          </nav>
        </section>
      </div>
    </footer>
  );
}

export default FooterComponent;
