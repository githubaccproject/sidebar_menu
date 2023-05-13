import { useState } from "react";


function MenuItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = item.nodes.length > 0;

  const toggleMenu = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <>
     <li>
    <div href="#" target="_blank" class="flex items-center p-2 text-base font-normal  rounded-lg">
    <div class="flex items-center mr-4">
    <input type="checkbox" className="h-5 w-5 ease-soft text-base checked:bg-green-500" />


</div>   <span class="flex-1 ml-3 whitespace-nowrap">{hasChildren ? (
            <span className="font-bold text-white ">{item.label}</span>
          ) : (
            <a href={item.url}  target="_blank" className=" hover:underline " rel="noreferrer">
              {item.label}
            </a>
          )}</span>
       <span class="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-white  rounded-full ">
       {hasChildren && (
            <button onClick={toggleMenu} className=" float-left">
              {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 pl-2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
            
              
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 pl-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
                          
              )}
            </button>
          )}



       </span>
    </div>
    </li>
    <div>
    {isOpen && (
        <div className="pl-7 border-l-2 border-white">
          {item.nodes.map((subItem) => (
            <MenuItem key={subItem.key} item={subItem} />
          ))}
        </div>
      )}
    </div>
    </>
  );
}

export default MenuItem;