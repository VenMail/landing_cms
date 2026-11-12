import MotionPreview from './MotionPreview';

export default function PrimaryInboxPreview() {
  return <MotionPreview
    name="Primary inbox"
    caption="Primary inbox · Sample data"
    alt="Sample primary inbox with briefing and message composition"
    aspectClass="aspect-[390/844] sm:aspect-[5/3]"
    desktop={{ motion: '/home/primary-inbox-motion-desktop.gif', poster: '/home/primary-inbox-motion-desktop-poster.png', fallback: '/home/primary-inbox-motion-desktop-poster.png', width: 960, height: 576 }}
    mobile={{ motion: '/home/primary-inbox-motion-mobile.gif', poster: '/home/primary-inbox-motion-mobile-poster.png', fallback: '/home/primary-inbox-motion-mobile-poster.png' }}
  />;
}
