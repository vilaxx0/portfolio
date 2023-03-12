import "./styles/footer.css";

import {
  LinkedIn_Button,
  Github_Button,
  Instagram_Button,
  Twitter_Button,
  Telegram_Button,
} from "../components/Buttons";

export default function Footer() {
  return (
    <footer id="Footer">
      <h1>Vilius BUČINSKAS</h1>
      <div className="socials">
        <LinkedIn_Button />
        <Github_Button />
        <Instagram_Button />
        <Twitter_Button />
        <Telegram_Button />
      </div>
      <p>© Vilius BUČINSKAS, All rights reserved</p>
    </footer>
  );
}
