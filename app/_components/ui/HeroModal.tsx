"use client";
import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { FaPhone } from "react-icons/fa6";
import { FaRegCalendarTimes } from "react-icons/fa";
import Link from "next/link";

function HeroModal() {
  return (
    <div>
      <div className="flex flex-col items-start gap-4">
        <div className="flex place-items-center gap-3 text-sm font-semibold uppercase">
          <div className="rounded-full bg-black p-2 font-bold text-pink-50 shadow-2xl">
            <FaPhone />
          </div>
          <div className="">
            <Link href="" className="mb-1 inline-block">
              Call to order
            </Link>
            <div> 07037270201</div>
          </div>
        </div>

        <div className="flex place-content-center place-items-center gap-4 text-sm font-semibold uppercase">
          <div className="rounded-full bg-black p-2 font-bold text-pink-50 shadow-2xl">
            <BsWhatsapp />
          </div>
          <div className="">
            <Link href="" className="mb-1 inline-flex w-max flex-row">
              order on whatsapp
            </Link>
            <div className="">+2347048380172</div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex items-center gap-3 text-sm font-semibold uppercase">
        <div className="rounded-full bg-black p-2 font-bold text-pink-50 shadow-2xl">
          <FaRegCalendarTimes />
        </div>
        <Link href="">Today&poas;s best deals</Link>
      </div>
    </div>
  );
}

export default HeroModal;
