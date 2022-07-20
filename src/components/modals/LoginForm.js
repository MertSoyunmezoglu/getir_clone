
import { useState } from "react"
import ReactFlagsSelect from "react-flags-select";


export default function LoginForm({handleSubmit}){
    const [selected, setSelected] = useState("TR");
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  
    const handle = (e)=>{
        handleSubmit(e,email,password)
    }
    return( 
    
        <form className=" max-w-xl mx-auto grid gap-y-4 py-4" onSubmit={handle}>
        <div className="ml-12  rounded-lg text-center sm:w-80 sm:h-44  ">
        <h4 className="text-primary-brand-color font-semibold text-center mt-4  text-sm ">Giriş Yap veya Kayıt Ol</h4>
        <div className='flex mt-4'> <ReactFlagsSelect
                    countries={["US", "GB","TR", "FR", "DE", "IT"]}
                    customLabels={{ US: "+1", GB: "+10",TR:"+90", FR: "+33", DE: "+75", IT: "+5" }}
                    placeholder="Select Country"
                    onSelect={code => setSelected(code)}
                    selected={selected}
                    className="flag-select"
                    /> 
                    <label  className=' ml-5 relative block group '>
                      <input required type="text" className='border-2 peer  border-gray-300  rounded-md h-12  w-44 group-focus:border-primary-brand-color peer-focus:border-primary-brand-color group-hover:border-secondary-brand-color ' />
                      <span className=' absolute -top-1 left-0 h-full px-2 text-sm text-gray-500 flex items-center peer-focus:text-primary-brand-color focus:border-primary-brand-color text-md peer-focus:h-5 mt-1 peer-focus:text-xs transition-all peer-valid:h-5 peer-valid:text-xs peer-valid:text-secondary-brand-color'>Telefon Numarası</span>
                    </label>
                  </div>
        <div className="flex ">
    
                    <label htmlFor="email" className=" ml-5 relative block group">  
                       <input  className='border-2 peer  border-gray-300  rounded-md h-12  w-44 group-focus:border-primary-brand-color peer-focus:border-primary-brand-color group-hover:border-secondary-brand-color' value={email} onChange={e =>setEmail(e.target.value)} type="email" name="email" id="email"  />
                       <span className=' absolute -top-1 left-0 h-full px-2 text-sm text-gray-500 flex items-center peer-focus:text-primary-brand-color focus:border-primary-brand-color text-md peer-enabled:h-5 peer-enabled:mt-1 peer-enabled:text-xs transition-all  '>E-Mail</span>    
                    </label>
          </div>
    
            <div className="flex gap-y-2">
            <label htmlFor="sifre" className="ml-5 relative block group">
                
                    <input   className=' border-2 peer  border-gray-300  rounded-md h-12  w-44 group-focus:border-primary-brand-color peer-focus:border-primary-brand-color group-hover:border-secondary-brand-color' value={password} onChange={e =>setPassword(e.target.value)} type="password" name="password" id="password"  />
                    <span className=' absolute -top-1 left-0 h-full px-2 text-sm text-gray-500 flex items-center peer-focus:text-primary-brand-color focus:border-primary-brand-color text-md transition-all peer-enabled:h-5 mt-1 peer-enabled:text-xs  '>Sifre</span>    
            </label>
            </div>
        </div>
        <button type='submit' className=' mt-20 ml-22 bg-brand-yellow h-12 text-primary-brand-color hover:text-brand-yellow hover:bg-primary-brand-color  w-72 ml-4 flex items-center justify-center rounded-md font-semibold text-sm font-sans'>Giriş Yap</button>
        </form>
        )
}