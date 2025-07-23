import { FaYoutube, FaInstagram, FaTwitter } from "react-icons/fa";

function SocialLinks() {
  return (
    <section className="flex justify-center gap-4 py-6">
      <a href="#"><FaYoutube size={30} /></a>
      <a href="#"><FaInstagram size={30} /></a>
      <a href="#"><FaTwitter size={30} /></a>
    </section>
  );
}
export default SocialLinks;
