import ChasmsArt from '../../chasms-art.jpg';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Song from '../Song';
import '../../styles/pages/Home.css';

export default function Home() {
  return (
    <div className='home'>
      <Parallax pages={3}>
        <ParallaxLayer
          speed={.05}
          factor={1}
          style={{
            backgroundImage: `url(${ChasmsArt})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '250vh',
            width: '100%'
          }}
        >
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={.5}
          style={{
            backgroundColor: '#282c34'
          }}
        >
          <Song></Song>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={.5}
          style={{
            backgroundColor: '#282c34'
          }}
        >
          <h1>SOCIALS</h1>
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}