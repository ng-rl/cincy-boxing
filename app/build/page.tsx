import type { Metadata } from 'next';
import BuilderContent from './BuilderContent';

export const metadata: Metadata = {
  title: 'Build Your Training | Cincy Boxing',
  description:
    'Customize your boxing training experience. Choose a program, add coaching, and get the gear you need. Start your transformation today.',
  openGraph: {
    title: 'Build Your Custom Boxing Training | Cincy Boxing',
    description: 'Pick a program. Customize your coaching. Add gear. One simple flow.',
  },
};

export default function BuildPage() {
  return <BuilderContent />;
}
