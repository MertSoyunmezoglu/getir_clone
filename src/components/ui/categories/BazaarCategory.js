export default function BazaarCategory({category:{id,title,image}}) {
    return (
      <a href="#" className="  flex flex-col gap-y-4 items-center transition hover:bg-purple-100 text-gray-700   hover:text-primary-brand-color text-center p-4 ">
          <img src={image} alt={title}  className=" w-12 object-cover h-12  border-x-y border-opacity-30 rounded-lg "/>
          
          <span className="  text-sm font-semibold  whitespace-normal tracking-normal"> 
              {title} 
           </span>
      </a>
    )
  }
  