/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const Footer = () => {
  return (
    <footer id="footer" className="bg-dark2 w-full font-Montserrat text-white">
      <div className="w-11/12 px-3 mx-auto py-20">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-col w-full">
            <img
              src="https://ik.imagekit.io/lshkgi0dm/trixie/logo/Logo.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1670937740134"
              alt=""
              className="w-1/4"
            />
            <div className="w-1/4 bg-gray2 p-[1px] mt-7"></div>
            <p className="text-xl font-medium mt-5 w-1/6">
              Kapal, Badung 80351, Bali, Indonesia
            </p>
          </div>
          <div className="flex flex-col w-1/4">
            <h3 className="my-5 text-lg">Menu</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="#about" scroll={false}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/shop">Shop</Link>
              </li>
              <li>
                <Link href="#help">Help</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col w-1/4">
            <h3 className="my-5 text-lg">Temukan Kami</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.instagram.com/trixiefootwear/"
                  target="_blank"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/Trixie_Footwear?t=kn3zE7oZIjxV2bABC7Y2vA&s=09"
                  target="_blank"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://wa.me//085896131604" target="_blank">
                  Whatsapp
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full bg-gray2 p-[1px] mt-10"></div>
        <p className="text-center text-sm mt-5">
          ©Trixie Footwear 2022. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
