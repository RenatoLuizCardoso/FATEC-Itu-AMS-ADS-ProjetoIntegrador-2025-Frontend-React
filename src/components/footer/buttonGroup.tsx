import { Facebook, Instagram, Twitter } from 'lucide-react';
import { LinkButton } from './linkButton';

export function ButtonGroup() {
  return (
    <div className="flex gap-2 my-7">
      <LinkButton icon={Twitter} />
      <LinkButton icon={Facebook} />
      <LinkButton icon={Instagram} />
    </div>
  );
}
