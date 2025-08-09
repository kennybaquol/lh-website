import ChasmsArt from '../../chasms-art.jpg';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Music from './Music';
import '../../styles/pages/Home.css';

export default function Home() {
  return (
    <div className='home'>
      <Parallax pages={3}>
        <ParallaxLayer
          speed={.05}
          // factor={3}
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
          offset={0.9}
          speed={1.25}
          style={{
            // backgroundColor: '#282c34'
          }}
        >
          <Music></Music>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          // speed={1.25}
          // factor={.75}
          style={{
            backgroundColor: '#282c34',
            // height: '20vh'
          }}
        >
          <h1>SOCIALS</h1>
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}