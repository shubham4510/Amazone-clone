'use client'
import Image from "next/image";
import amazonLogo from "../public/amazon-logo-2.webp";
import { BiCart } from "react-icons/bi";
import { CgSearch } from "react-icons/cg";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";


const itemList = [
    "All",
    "Fresh",
    "Amazon miniTV",
    "Sell",
    "Gift Cards",
    "Baby",
    "Buy Again",
    "Browsing History",
    "Amazon Pay",
    "Gift Ideas",
    "Health, Household & Personal Care"
]

const Header = () => {
    const [query, setQuery] = useState<string>("");
    const router = useRouter();
    const searchHandler = () => {
      router.push(`/search/${query}`)
    }

  return (
    <>
    <div className="bg-[#131921] text-white  py-2">
      <div className=" flex items-center justify-between w-[90%] mx-auto">
        <div className="">
          <Image src={amazonLogo} alt="Logo" width={150} height={150} />
        </div>
        <div className=" w-[60%] flex items-center">
          <input value={query} 
           className=" w-full p-1.5 outline-none text-black rounded-l-md"
            type="text" 
            placeholder="Search Amazon.in" 
            onChange={e=>setQuery(e.target.value)}/>
          <div
          onClick={searchHandler}
          className=" bg-[#FEB069] cursor-pointer p-1.5 rounded-r-md">
          <CgSearch size={24}/>
          </div>
        </div>
        <div className=" flex items-center gap-3 cursor-pointer">
          <div>
            <h1>Hello, Shubham</h1>
            <h1 className=" font-medium text-sm">Account & Lists</h1>
          </div>
          <div>
            <p className=" font-medium text-sm">Returns</p>
            <h1 className=" font-medium text-sm">& Orders</h1>
          </div>
          <div>
            <p className=" relative top-3 left-5">0</p>
            <div className=" flex">
              <div>
                <BiCart size={40} />
              </div>
              <h1 className=" mt-4">cart</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-[#232F3E] w-full text-white p-2 flex justify-between items-center px-4">
        <div>
        {
            itemList.map((link,idx) => {
                return (
                    <Link key={idx} className=" mx-2 hover:border border border-transparent hover:border-white p-2" href={`/${link}`}>
                    {link}
                    </Link>
                )
            })
        }
        </div>
        <div>
    <h1 className=" text-[#FEB069] cursor-pointer hover:underline">Sign out</h1>
        </div>
    </div>
    </>
    
  );
};

export default Header;
