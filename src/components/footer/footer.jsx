// para utilizar o componente crie o import na página que deseja
// coloque o nome da pessoa entre <Footer>NomePessoa</Footer>
// passe a informação dentro da tag Footer - LINK
// <Footer link()>isabela-pr</Footer>
import SocialLinks from "../socialLinks/socialLinks";
import "./footer.module.css";
import "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"

const Footer = ({ children, link }) => {
  return (
    <footer>
      <p>
        Feito com <ion-icon name="heart" /> por{" "}
        <a href={link} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      </p>
        <SocialLinks icon={"logo-github"} href={"https://github.com/isabela-pr"} />
        <SocialLinks icon={"logo-instagram"} href={"https://www.instagram.com/okisabela_/"} />
        <SocialLinks icon={"logo-twitch"} href={"#"} />
        <SocialLinks icon={"logo-twitter"} href={"#"} />
    </footer>
  );
};

export default Footer;
