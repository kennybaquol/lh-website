import '../styles/Socials.css'

export default function Socials () {
  return (
    <div className='socials' id='socials'>
      <a
        href='https://facebook.com/thisislucidhavoc'
        aria-label='Facebook'
      >
        <i className='fa-brands fa-facebook fa-3x' aria-hidden="true" />
      </a>
      <a
        href='https://instagram.com/thisislucidhavoc'
        aria-label='Instagram'
      >
        <i className='fa-brands fa-instagram fa-3x' aria-hidden="true" />
      </a>
      <a
        href='https://tiktok.com/@thisislucidhavoc'
        aria-label='TikTok'
      >
        <i className='fa-brands fa-tiktok fa-3x' aria-hidden="true" />
      </a>
      <a
        href='mailto:thisislucidhavoc@gmail.com'
        aria-label='Email'
      >
        <i
          className='fa-solid fa-envelope fa-3x'
          aria-hidden="true"
        />
      </a>
    </div>
  )
}