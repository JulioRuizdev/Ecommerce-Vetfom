
import { titleFont } from '@/app/config/fonts';
import { LoginForm } from './ui/LoginForm';
import Link from 'next/link';
import { IoReturnDownBack } from 'react-icons/io5';

export default function LoginPage() {
  return (
    <div className="flex flex-col min-h-screen pt-32 sm:pt-52">
          <Link href="/">
            <div className="flex items-center text-gray-600 hover:text-red-800 ">
              <IoReturnDownBack className="w-5 h-5 mr-1" />
              <span>Volver al inicio</span>
            </div>
          </Link>     

      <h1 className={ `${ titleFont.className } text-4xl mb-5` }>Ingresar</h1>

      <LoginForm />
    </div>
  );
}