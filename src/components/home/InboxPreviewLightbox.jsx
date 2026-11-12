import MotionPreview from './MotionPreview';

export default function InboxPreviewLightbox() {
  return <MotionPreview
    name="Shared inbox"
    caption="Shared inbox · Sample data"
    note="Access may be limited."
    alt="Sample shared inbox: searching conversations and assigning a teammate"
    desktop={{ motion: '/home/shared-inbox-assignment-desktop.gif', poster: '/home/shared-inbox-motion-desktop-poster.png', fallback: '/home/shared-inbox-desktop.png' }}
    mobile={{ motion: '/home/shared-inbox-assignment-mobile.gif', poster: '/home/shared-inbox-motion-mobile-poster.png', fallback: '/home/shared-inbox-mobile.png' }}
  />;
}
