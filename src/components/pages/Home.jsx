import ChasmsArt from '../../chasms-art.jpg';
import { useRef } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import NavBar from '../NavBar';
import Music from './Music';
import Socials from '../Socials';
import '../../styles/pages/Home.css';

export default function Home() {
  const parallaxRef = useRef();

  return (
    <div className='home'>
      <Parallax ref={parallaxRef} pages={2}>
      <NavBar parallaxRef={parallaxRef} />
        <ParallaxLayer
          speed={.03}
          style={{
            backgroundImage: `url(${ChasmsArt})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '200vh',
            width: '100%'
          }}
        >
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.8}
          speed={1.25}
        >
          <div className='gradient-background'>
            <Music />
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.85}
        >
          <div className='gradient-background'>
            <Socials />
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}