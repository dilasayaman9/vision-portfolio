import { Link } from 'react-router-dom';
import { profile } from '../data/siteData.js';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <Link className="footer-wordmark" to="/">
            {profile.name}
          </Link>
          <p>{profile.name} is a web designer and developer focused on thoughtful, responsive websites.</p>
        </div>
        <nav aria-label="Footer">
          <a href={profile.linkedIn} target="_blank" rel="noreferrer noopener">
            LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer noopener">
            GitHub
          </a>
          <a href={profile.emailLink}>Email</a>
          <Link to="/book">Book a Call</Link>
        </nav>
        <p className="copyright">&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
