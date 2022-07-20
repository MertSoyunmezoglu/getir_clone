import {register} from "../firebase";
import { useState } from "react";

export default function Register() {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
  
    const handleSubmit = async (e,email, password)=>{
  
      e.preventDefault();
      const user = await register(email,password)
      console.log(user);
    }
   return( 
    
   <form className=" max-w-xl mx-auto grid gap-y-4 py-4" onSubmit={handleSubmit}>

    <div>
    <label htmlFor="email" className="block text-sm font-medium text-gray-600">E-Mail</label>
    <div className="mt-1">
        <input value={email} onChange={e =>setEmail(e.target.value)} type="email" name="email" id="email" className="shadow-sm focus:ring-indigo-400 focus:border-indigo-500 block w-full sm:text-sm border-gray-100" placeholder="you@example.com" />
    </div>
    </div>

    <div>
    <label htmlFor="sifre" className="block text-sm font-medium text-gray-600">Şifre</label>
    <div className="mt-1">
        <input value={password} onChange={e =>setPassword(e.target.value)} type="password" name="password" id="password" className="shadow-sm focus:ring-indigo-400 focus:border-indigo-500 block w-full sm:text-sm border-gray-100" placeholder="*******" />
    </div>
    </div>

    <button type='submit' className=' bg-brand-yellow h-12 mt-2 mb-5 text-primary-brand-color hover:text-brand-yellow hover:bg-primary-brand-color  w-20  flex items-center justify-center rounded-md font-semibold text-sm font-sans'>Kayıt Ol</button>
    </form>
    )
}