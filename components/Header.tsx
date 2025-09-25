import Image from "next/image";
import React from "react";
import userimage from "../public/assets/images/dummy.jpg";
import Link from "next/link";
import upload from "../public/assets/icons/upload.svg";
import record from "../public/assets/icons/record.svg"
import search from "../public/assets/icons/search.svg"
const Header = ({ subHeader, title, userImg }: SharedHeaderProps) => {
  return (
    <header className="header">
      <section className="header-container">
        <div className="details">
          {userImg && (
            <Image
              src={userImg || userimage}
              alt="user"
              width={66}
              height={66}
              className="rounded-full"
            />
          )}
          <article>
            <p>{subHeader}</p>
            <h1>{title}</h1>
          </article>
        </div>
        <aside>
          <Link href="/upload">
            <Image src={upload} alt="upload" width={16} height={16} />
            <span>Upload a video</span>
          </Link>
          <div className="record">
            <button className="primary-btn">
              <Image src={record} alt="record " width={16} height={16} />
              <span>Record a video</span>
            </button>
          </div>
        </aside>
      </section>
      <section className="search-filter">
        <div className="search">
          <input 
          type="text"
          placeholder="Search for videos, tags, folders ..."
          />
          <Image src={search} alt="search" width={16} height={16}/>
        </div>

      </section>
    </header>
  );
};

export default Header;
