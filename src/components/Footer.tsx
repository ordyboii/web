import SocialLinks from "components/SocialLinks";

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='container'>
        <div>
          <p>© Jake Ord, {new Date().getFullYear()}</p>
          <a rel='norefferer' target='_blank' href='/Jake_Ord_Design_CV.pdf'>
            CV
          </a>
        </div>
        <SocialLinks inverse />
      </div>
    </footer>
  );
}
