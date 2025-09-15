import '../styles/NavBar.css';

export default function NavBar({ parallaxRef }) {
  return (
    <nav className='navbar gradient-background'>
      <h3>
        <a
          href="#"
          onClick={e => {
            e.preventDefault();
            parallaxRef.current.scrollTo(0.4);
          }}
        >
          MUSIC
        </a>
      </h3>
      <h3>
        <a 
          href='https://lucidhavoc.bandcamp.com/' 
          target="_blank" 
          rel="noopener noreferrer"
        >
          SHOP
        </a>
      </h3>
      <h3>
        <a
          href="#"
          onClick={e => {
            e.preventDefault();
            parallaxRef.current.scrollTo(1.85);
          }}
        >
          CONTACT
        </a>
      </h3>
    </nav>
  )
}