import Application from '@/components/applications/Applications';
import dotenv from 'dotenv'
dotenv.config();

export default function ApplicationPage() {
  return (
    <div>
      <Application />
    </div>
  );
}
