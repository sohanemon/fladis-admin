import { redirect } from 'next/navigation';

export default function Customer() {
  redirect('/dashboard/contacts/customers/123/edit');
}
