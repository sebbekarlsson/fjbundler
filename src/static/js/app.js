import { initializeNav } from './nav';
import { initializeTerminal } from './terminal/init';
import { CookieBanner } from './cookiebanner.min.js';

const options = { message: "We use cookies to enhance your experience. If you continue to use this website, you consent.", moreinfo: "https://gdpr.eu/cookies/" };
const cb = new Cookiebanner(options); cb.run();


initializeNav();
initializeTerminal();
