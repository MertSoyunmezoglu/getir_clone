

export default function Category({category:{id,title,image}}) {
  return (
    <a href="#" className="  flex flex-col gap-y-4 items-center transition hover:bg-purple-100  text-center p-4 ">
        <img src={image} alt={title}  className=" w-12 h-12   rounded "/>
         <span className=" tracking-tight text-sm whitespace-nowrap"> 
            {title} 
         </span>
    </a>
  )
}
