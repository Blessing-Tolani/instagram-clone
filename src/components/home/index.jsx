import MoreOption from '../assets/MoreOption';
import NotificationIcon from '../assets/NotificationIcon';
import CommentIcon from '../assets/CommentIcon';
import AppLayout from '../layout';
import ShareIcon from '../assets/ShareIcon';
import SaveIcon from '../assets/SaveIcon';
import Emoji from '../assets/Emoji';
import { useState } from 'react';

export default function HomePage() {
  const [openMenu, toggleMenu] = useState(false);
  return (
    <AppLayout>
      <div className="lg:hidden px-5 ">
        <div className=" w-full flex items-center justify-between">
          <a href="https://paystack.com/">
            <svg
              fill="none"
              height={22}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 157 28"
            >
              <defs></defs>
              <g>
                <path
                  d="M22.32 2.663H1.306C.594 2.663 0 3.263 0 3.985v2.37c0 .74.594 1.324 1.307 1.324h21.012c.73 0 1.307-.602 1.324-1.323V4.002c0-.738-.594-1.34-1.323-1.34zm0 13.192H1.306a1.3 1.3 0 00-.924.388 1.33 1.33 0 00-.383.935v2.37c0 .74.594 1.323 1.307 1.323h21.012c.73 0 1.307-.584 1.324-1.322v-2.371c0-.739-.594-1.323-1.323-1.323zm-9.183 6.58H1.307c-.347 0-.68.139-.924.387a1.33 1.33 0 00-.383.935v2.37c0 .74.594 1.323 1.307 1.323H13.12c.73 0 1.307-.6 1.307-1.322v-2.371a1.29 1.29 0 00-1.29-1.323zM23.643 9.258H1.307c-.347 0-.68.14-.924.387a1.33 1.33 0 00-.383.936v2.37c0 .739.594 1.323 1.307 1.323h22.32c.73 0 1.306-.601 1.306-1.323v-2.37a1.301 1.301 0 00-1.29-1.323z"
                  fill="#00C3F7"
                ></path>
                <path
                  d="M48.101 8.005a6.927 6.927 0 00-2.274-1.563 7.041 7.041 0 00-2.716-.55 5.767 5.767 0 00-2.63.567c-.55.263-1.046.63-1.46 1.082V7.13a.876.876 0 00-.22-.567.721.721 0 00-.56-.258h-2.937a.697.697 0 00-.56.258.796.796 0 00-.221.567v19.566c0 .206.085.412.22.566a.776.776 0 00.56.224h2.971c.204 0 .39-.086.543-.224a.7.7 0 00.238-.566v-6.683c.424.464.967.808 1.561 1.014.781.292 1.596.43 2.427.43.95 0 1.884-.173 2.75-.55a6.859 6.859 0 002.308-1.58 7.45 7.45 0 001.562-2.457 8.34 8.34 0 00.577-3.213 8.761 8.761 0 00-.577-3.229A7.775 7.775 0 0048.1 8.005zm-2.681 7.077a3.33 3.33 0 01-.696 1.117 3.177 3.177 0 01-2.36 1.013c-.458 0-.899-.086-1.306-.275a3.324 3.324 0 01-1.07-.738 3.673 3.673 0 01-.713-1.117 3.837 3.837 0 010-2.748c.153-.412.408-.79.713-1.1a3.576 3.576 0 011.07-.755 2.888 2.888 0 011.306-.275c.459 0 .9.086 1.324.274.39.19.747.43 1.053.74.305.326.526.686.696 1.099a3.976 3.976 0 01-.017 2.765zm20.808-8.778h-2.953a.728.728 0 00-.543.24.823.823 0 00-.237.585v.36a4.143 4.143 0 00-1.341-1.03 5.652 5.652 0 00-2.58-.567 7.222 7.222 0 00-5.075 2.096 7.733 7.733 0 00-1.63 2.456 8.036 8.036 0 00-.61 3.23 8.15 8.15 0 00.61 3.23 7.88 7.88 0 001.613 2.456 6.959 6.959 0 005.058 2.112c.9.018 1.782-.171 2.597-.567.509-.257.984-.6 1.358-1.03v.395c0 .206.084.412.237.567.153.137.34.223.543.223h2.953a.855.855 0 00.56-.223.768.768 0 00.221-.567V7.129a.796.796 0 00-.22-.567.697.697 0 00-.56-.258zm-3.988 8.761a3.33 3.33 0 01-.696 1.117 3.83 3.83 0 01-1.052.755c-.832.378-1.8.378-2.631 0a3.575 3.575 0 01-1.07-.755 3.326 3.326 0 01-.695-1.117 3.976 3.976 0 010-2.731c.152-.412.39-.773.696-1.1.305-.309.661-.566 1.069-.755a3.194 3.194 0 012.63 0c.391.189.748.429 1.053.738.289.327.526.687.696 1.1.34.893.34 1.872 0 2.748zm33.437-1.77a4.794 4.794 0 00-1.443-.875 10.054 10.054 0 00-1.731-.516l-2.258-.446c-.577-.103-.984-.258-1.205-.447a.712.712 0 01-.305-.567c0-.24.136-.446.424-.618.39-.206.815-.31 1.256-.275.577 0 1.154.12 1.68.343.51.224 1.019.482 1.477.79.662.413 1.222.344 1.612-.12l1.087-1.236c.203-.207.322-.481.34-.773a1.06 1.06 0 00-.408-.773c-.459-.395-1.188-.825-2.156-1.237-.967-.412-2.19-.636-3.632-.636a8.343 8.343 0 00-2.597.378 6.273 6.273 0 00-1.986 1.03 4.552 4.552 0 00-1.273 1.564 4.417 4.417 0 00-.441 1.907c0 1.22.373 2.216 1.103 2.954.73.739 1.698 1.22 2.903 1.46l2.342.516c.51.086 1.018.24 1.494.464.254.103.424.36.424.652 0 .258-.136.498-.424.705-.289.206-.764.343-1.375.343a4.051 4.051 0 01-1.85-.412 6.792 6.792 0 01-1.51-.996 2.037 2.037 0 00-.68-.378c-.271-.086-.594 0-.95.292l-1.29.979a1.147 1.147 0 00-.458 1.134c.067.43.424.858 1.086 1.357a9.543 9.543 0 005.516 1.632 8.993 8.993 0 002.699-.378 6.83 6.83 0 002.087-1.048c.56-.43 1.036-.98 1.358-1.615a4.543 4.543 0 00.475-2.01 4.168 4.168 0 00-.373-1.82 4.638 4.638 0 00-1.018-1.323zm12.899 3.574a.857.857 0 00-.645-.43c-.271 0-.543.086-.764.24a2.43 2.43 0 01-1.205.396c-.136 0-.288-.017-.424-.052a.777.777 0 01-.39-.206 1.43 1.43 0 01-.323-.446 2.092 2.092 0 01-.136-.79v-5.36h3.836a.86.86 0 00.594-.258.77.77 0 00.255-.567V7.13a.773.773 0 00-.255-.584.833.833 0 00-.577-.24h-3.836v-3.66a.736.736 0 00-.237-.584.814.814 0 00-.544-.223h-2.987a.817.817 0 00-.577.223.838.838 0 00-.254.584v3.66h-1.698a.697.697 0 00-.56.257.876.876 0 00-.22.567v2.267c0 .206.084.413.22.567a.65.65 0 00.56.258h1.698v6.373a5.14 5.14 0 00.441 2.199 4.575 4.575 0 001.137 1.477c.475.395 1.035.67 1.612.842a6.125 6.125 0 001.851.275 7.73 7.73 0 002.427-.396 4.802 4.802 0 001.918-1.202.999.999 0 00.101-1.271l-1.018-1.65zm16.175-10.565h-2.953a.728.728 0 00-.543.24.822.822 0 00-.238.585v.36a4.13 4.13 0 00-1.341-1.03 5.67 5.67 0 00-2.596-.567 7.152 7.152 0 00-5.058 2.096 7.468 7.468 0 00-1.63 2.456 8.017 8.017 0 00-.611 3.212 8.156 8.156 0 00.611 3.23c.374.91.934 1.752 1.613 2.456a7.006 7.006 0 005.041 2.13 5.884 5.884 0 002.596-.55c.51-.257.985-.6 1.358-1.03v.378c.002.21.084.41.23.557a.783.783 0 00.551.233h2.97a.78.78 0 00.781-.773V7.13a.795.795 0 00-.221-.567.696.696 0 00-.56-.258zm-3.988 8.761a3.34 3.34 0 01-.696 1.117 3.83 3.83 0 01-1.053.755 2.907 2.907 0 01-1.323.275c-.459 0-.9-.103-1.307-.275a3.576 3.576 0 01-1.07-.755 3.34 3.34 0 01-.696-1.117 3.982 3.982 0 010-2.731 3.27 3.27 0 01.696-1.1c.306-.309.662-.566 1.07-.755a3.077 3.077 0 011.307-.275c.458 0 .899.086 1.323.274.391.19.747.43 1.053.74.305.326.543.686.696 1.099a3.67 3.67 0 010 2.748zm20.198 1.615l-1.698-1.306c-.322-.257-.628-.326-.899-.223a1.82 1.82 0 00-.628.447 6.03 6.03 0 01-1.29 1.168c-.509.292-1.07.43-1.647.395a3.165 3.165 0 01-1.855-.575 3.224 3.224 0 01-1.183-1.555 4.046 4.046 0 01-.237-1.34c0-.464.067-.928.237-1.374.153-.413.374-.79.679-1.1.306-.309.662-.567 1.052-.739a3.175 3.175 0 011.324-.291 3.06 3.06 0 011.647.412 5.61 5.61 0 011.29 1.168c.169.189.373.343.611.447.271.103.577.034.882-.224l1.698-1.288c.203-.138.373-.344.441-.584a.923.923 0 00-.068-.79 7.35 7.35 0 00-2.614-2.457c-1.12-.635-2.461-.962-3.955-.962a8.163 8.163 0 00-3.072.601 7.65 7.65 0 00-2.495 1.65 7.357 7.357 0 00-1.663 2.473 8.154 8.154 0 000 6.133c.39.927.95 1.769 1.663 2.456a7.876 7.876 0 005.567 2.25c1.494 0 2.835-.326 3.955-.962a7.307 7.307 0 002.631-2.473.886.886 0 00.068-.773 1.167 1.167 0 00-.441-.584zm15.716 3.057l-4.667-6.854 3.989-5.273a.978.978 0 00.169-.86c-.068-.205-.254-.429-.746-.429h-3.157a1.39 1.39 0 00-.527.12 1.058 1.058 0 00-.458.447l-3.191 4.467h-.764V.79a.794.794 0 00-.22-.567.78.78 0 00-.56-.223h-2.954a.856.856 0 00-.56.223.72.72 0 00-.237.567v19.48c0 .223.084.43.237.567a.778.778 0 00.56.223h2.954a.856.856 0 00.56-.223.794.794 0 00.22-.567v-5.153h.849l3.479 5.342c.204.378.595.618 1.019.618h3.31c.509 0 .712-.24.797-.446a.933.933 0 00-.102-.894zM83.015 6.304h-3.31a.852.852 0 00-.662.258 1.178 1.178 0 00-.305.55l-2.445 9.104H75.7l-2.613-9.104a1.54 1.54 0 00-.255-.533.756.756 0 00-.594-.275h-3.429c-.44 0-.712.138-.831.43-.085.257-.085.55 0 .807l4.192 12.798c.068.189.17.378.323.515.17.155.39.24.627.223h1.766l-.153.413-.39 1.185c-.12.36-.34.687-.645.927a1.58 1.58 0 01-.985.327c-.305 0-.61-.069-.882-.19a3.618 3.618 0 01-.781-.463 1.29 1.29 0 00-.747-.24h-.034a.908.908 0 00-.747.463l-1.052 1.546c-.424.67-.187 1.1.085 1.34a5.36 5.36 0 001.952 1.151 7.679 7.679 0 002.495.412c1.51 0 2.783-.412 3.75-1.236a7.067 7.067 0 002.122-3.333l4.855-15.838c.102-.275.119-.567.017-.842-.085-.189-.272-.395-.73-.395z"
                  fill="#011B33"
                ></path>
              </g>
            </svg>
          </a>
          <button
            id="js-mobile-nav-trigger"
            className={` cursor-pointer relative z-20  ${
              openMenu ? 'hamburger-menu-active' : 'hamburger-menu'
            } `}
            onClick={() => toggleMenu(!openMenu)}
          >
            <div className="bg-[rgba(1,27,51,0.95)] h-[0.133rem] w-[1.25rem]  transition"></div>
            <div className="bg-[rgba(1,27,51,0.95)] h-[0.133rem] w-[1.25em] transition"></div>
            <div className="bg-[rgba(1,27,51,0.95)] h-[0.133rem] w-[1.25em] transition"></div>
          </button>
        </div>
        <div
          className={`flex flex-col text-[#011b33] text-sm w-full space-y-5 font-medium mt-10 ${
            openMenu ? '' : 'hidden'
          }`}
        >
          <a href="https://paystack.com/">Why Paystack</a>
          <a href="https://paystack.com/">Customers</a>
          <a href="https://paystack.com/">Pricing</a>
        </div>
      </div>

      <div className="grid grid-cols-[57%_43%] w-[70%]  mx-auto max-lg:hidden  ">
        <section>
          <div className="flex space-x-3 text-center bg-white border border-[#DBDBDB] p-5 rounded-lg">
            <div className=" flex flex-col">
              <div className="flex relative">
                <img alt="" src="/images/gradient.jpg" />
                <div className='bg-[url("/images/image5.jpg")] bg-center bg-cover w-[55px] h-[55px] rounded-full absolute mt-[4.5px] ml-[5.5px]'></div>
              </div>
              <p className="text-primary text-xs mt-1">temitope</p>
            </div>
            <div className=" flex flex-col">
              <div className="flex relative">
                <img alt="" src="/images/gradient.jpg" />
                <div className='bg-[url("/images/image2.jpg")] bg-center bg-cover w-[55px] h-[55px] rounded-full absolute mt-[4.5px] ml-[5.5px]'></div>
              </div>
              <p className="text-primary text-xs mt-1">adebayo</p>
            </div>
            <div className=" flex flex-col">
              <div className="flex relative">
                <img alt="" src="/images/gradient.jpg" />
                <div className='bg-[url("/images/image3.jpg")] bg-center bg-cover w-[55px] h-[55px] rounded-full absolute mt-[4.5px] ml-[5.5px]'></div>
              </div>
              <p className="text-primary text-xs mt-1">olamide</p>
            </div>
            <div className=" flex flex-col">
              <div className="flex relative">
                <img alt="" src="/images/gradient.jpg" />
                <div className='bg-[url("/images/image4.jpg")] bg-center bg-cover w-[55px] h-[55px] rounded-full absolute mt-[4.5px] ml-[5.5px]'></div>
              </div>
              <p className="text-primary text-xs mt-1">tolulope</p>
            </div>
          </div>

          <div className="mt-5 border bg-white border-[#DBDBDB] rounded-lg">
            <div className=" rounded-t-lg  p-2 items-center flex justify-between w-[100%]">
              <div className=" flex items-center ">
                <div className="relative flex ">
                  <img
                    alt=""
                    src="/images/gradient.jpg"
                    className="w-[42px] h-[42px]"
                  />
                  <div className='bg-[url("/images/image5.jpg")] bg-center bg-cover w-[32px] h-[32px] rounded-full absolute mt-[4.5px] ml-[5.3px]'></div>
                </div>
                <p className="text-primary text-sm  ml-2 font-semibold">
                  temitope
                </p>
              </div>
              <MoreOption />
            </div>
            <div className='bg-[url("/images/image1.jpg")] bg-cover bg-center w-full h-[353px]'></div>
            <div className="p-3">
              <div className="flex items-center justify-between w-full ">
                <div className="flex space-x-3 items-center">
                  <NotificationIcon />
                  <CommentIcon />
                  <ShareIcon />
                </div>
                <SaveIcon />
              </div>
              <p className="text-primary text-sm  mt-4 mb-2 font-semibold">
                1,000 likes
              </p>
              <p className="text-primary text-sm ">
                <span className="font-semibold">temitope</span>
                <span> A VIEW OF MY LAPTOP ... </span>
                <span className="text-gray">more</span>
              </p>
              <p className="text-gray my-2 text-sm">View all 10 comments</p>
              <p className="text-gray text-[10px]">2 HOURS AGO</p>
            </div>
            <hr className="border-[#DBDBDB] " />
            <div className="flex p-3 items-center justify-between w-full">
              <div className="flex space-x-3 items-center">
                <Emoji />
                <span className="text-gray text-sm">Add a comment...</span>
              </div>
              <span className="text-[#b3dbff]">Post</span>
            </div>
          </div>

          <div className="mt-4 border bg-white border-[#DBDBDB] rounded-lg">
            <div className=" rounded-t-lg  p-2 items-center flex justify-between w-[100%]">
              <div className=" flex items-center ">
                <div className="relative flex ">
                  <img
                    alt=""
                    src="/images/gradient.jpg"
                    className="w-[42px] h-[42px]"
                  />
                  <div className='bg-[url("/images/image2.jpg")] bg-center bg-cover w-[32px] h-[32px] rounded-full absolute mt-[4.5px] ml-[5.3px]'></div>
                </div>
                <p className="text-primary text-sm  ml-2 font-semibold">
                  adebayo
                </p>
              </div>
              <MoreOption />
            </div>
            <div className='bg-[url("/images/image2.jpg")] bg-cover bg-center w-full h-[353px]'></div>
            <div className="p-3">
              <div className="flex items-center justify-between w-full">
                <div className="flex space-x-3 items-center">
                  <NotificationIcon />
                  <CommentIcon />
                  <ShareIcon />
                </div>
                <SaveIcon />
              </div>
              <p className="text-primary text-sm  mt-4 mb-2 font-semibold">
                1,500 likes
              </p>
              <p className="text-primary text-sm ">
                <span className="font-semibold">adebayo.sanni</span>
                <span> BEAUTIFUL LAPTOP AND PHONE ... </span>
                <span className="text-gray">more</span>
              </p>
              <p className="text-gray my-2 text-sm">View all 4 comments</p>
              <p className="text-gray text-[10px]">3 HOURS AGO</p>
            </div>
            <hr className="border-[#DBDBDB] " />
            <div className="flex p-3 items-center justify-between w-full">
              <div className="flex space-x-3 items-center">
                <Emoji />
                <span className="text-gray text-sm">Add a comment...</span>
              </div>
              <span className="text-[#b3dbff]">Post</span>
            </div>
          </div>

          <div className="mt-4 border bg-white border-[#DBDBDB] rounded-lg">
            <div className=" rounded-t-lg  p-2 items-center flex justify-between w-[100%]">
              <div className=" flex items-center ">
                <div className="relative flex ">
                  <img
                    alt=""
                    src="/images/gradient.jpg"
                    className="w-[42px] h-[42px]"
                  />
                  <div className='bg-[url("/images/image3.jpg")] bg-center bg-cover w-[32px] h-[32px] rounded-full absolute mt-[4.5px] ml-[5.3px]'></div>
                </div>
                <p className="text-primary text-sm  ml-2 font-semibold">
                  olamide
                </p>
              </div>
              <MoreOption />
            </div>
            <div className='bg-[url("/images/image3.jpg")] bg-cover bg-center w-full h-[353px]'></div>
            <div className="p-3">
              <div className="flex items-center justify-between w-full">
                <div className="flex space-x-3 items-center">
                  <NotificationIcon />
                  <CommentIcon />
                  <ShareIcon />
                </div>
                <SaveIcon />
              </div>
              <p className="text-primary text-sm  mt-4 mb-2 font-semibold">
                10,000 likes
              </p>
              <p className="text-primary text-sm ">
                <span className="font-semibold">olamide</span>
                <span> GUCCI FLORA PERFUME ... </span>
                <span className="text-gray">more</span>
              </p>
              <p className="text-gray my-2 text-sm">View all 1,000 comments</p>
              <p className="text-gray text-[10px]">5 HOURS AGO</p>
            </div>
            <hr className="border-[#DBDBDB] " />
            <div className="flex p-3 items-center justify-between w-full">
              <div className="flex space-x-3 items-center">
                <Emoji />
                <span className="text-gray text-sm">Add a comment...</span>
              </div>
              <span className="text-[#b3dbff]">Post</span>
            </div>
          </div>

          <div className="mt-4 border bg-white border-[#DBDBDB] rounded-lg">
            <div className=" rounded-t-lg  p-2 items-center flex justify-between w-[100%]">
              <div className=" flex items-center ">
                <div className="relative flex ">
                  <img
                    alt=""
                    src="/images/gradient.jpg"
                    className="w-[42px] h-[42px]"
                  />
                  <div className='bg-[url("/images/image4.jpg")] bg-center bg-cover w-[32px] h-[32px] rounded-full absolute mt-[4.5px] ml-[5.3px]'></div>
                </div>
                <p className="text-primary text-sm  ml-2 font-semibold">
                  tolulope
                </p>
              </div>
              <MoreOption />
            </div>
            <div className='bg-[url("/images/image4.jpg")] bg-cover bg-center w-full h-[353px]'></div>
            <div className="p-3">
              <div className="flex items-center justify-between w-full">
                <div className="flex space-x-3 items-center">
                  <NotificationIcon />
                  <CommentIcon />
                  <ShareIcon />
                </div>
                <SaveIcon />
              </div>
              <p className="text-primary text-sm  mt-4 mb-2 font-semibold">
                100,000 likes
              </p>
              <p className="text-primary text-sm ">
                <span className="font-semibold">tolulope</span>
                <span> BEAUTY AND FLOWER ... </span>
                <span className="text-gray">more</span>
              </p>
              <p className="text-gray my-2 text-sm">View all 10,000 comments</p>
              <p className="text-gray text-[10px]">8 HOURS AGO</p>
            </div>
            <hr className="border-[#DBDBDB] " />
            <div className="flex p-3 items-center justify-between w-full">
              <div className="flex space-x-3 items-center">
                <Emoji />
                <span className="text-gray text-sm">Add a comment...</span>
              </div>
              <span className="text-[#b3dbff]">Post</span>
            </div>
          </div>
        </section>
        <Aside />
      </div>
    </AppLayout>
  );
}

const Aside = () => {
  return (
    <section className="pt-12 pl-8">
      <div className="w-full flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img
            alt=""
            crossOrigin="anonymous"
            draggable="false"
            src="/images/profile.png "
            className="w-14 h-14 "
          />
          <p className="flex flex-col text-sm">
            <span className="text-primary font-semibold">tolani3659</span>
            <span className="text-gray ">Tolani Ojo</span>
          </p>
        </div>
        <span className="text-[#0095f6] text-xs cursor-pointer font-semibold">
          Switch
        </span>
      </div>

      <div className="w-full flex justify-between items-center my-4">
        <span className="text-gray font-semibold text-sm">
          Suggestions For You
        </span>
        <span className="text-black text-xs font-semibold cursor-pointer">
          See All
        </span>
      </div>

      <div className="w-full flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className='bg-[url("/images/image5.jpg")] bg-white bg-center bg-cover w-8 h-8 rounded-full'></div>
          <p className="flex flex-col text-sm">
            <span className="text-primary font-semibold">themonthlypd</span>
            <span className="text-gray ">Followed by tolulope</span>
          </p>
        </div>
        <span className=" cursor-pointer text-[#0095f6] text-xs font-semibold">
          Follow
        </span>
      </div>

      <div className="w-full flex justify-between items-center my-4">
        <div className="flex items-center space-x-3">
          <div className='bg-[url("/images/image3.jpg")] bg-white bg-center bg-cover w-8 h-8 rounded-full'></div>
          <p className="flex flex-col  text-sm">
            <span className="text-primary font-semibold">perfumenigeria</span>
            <span className="text-gray ">Suggested for you</span>
          </p>
        </div>
        <span className=" cursor-pointer text-[#0095f6] text-xs font-semibold">
          Follow
        </span>
      </div>

      <div className="w-full flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className='bg-[url("/images/image4.jpg")] bg-white bg-center bg-cover w-8 h-8 rounded-full'></div>
          <p className="flex flex-col  text-sm">
            <span className="text-primary font-semibold">acupofkaffi</span>
            <span className="text-gray ">Suggested for you</span>
          </p>
        </div>
        <span className=" cursor-pointer text-[#0095f6] text-xs font-semibold">
          Follow
        </span>
      </div>

      <div className="w-full flex justify-between items-center my-4">
        <div className="flex items-center space-x-3">
          <div className='bg-[url("/images/image1.jpg")] bg-center bg-cover w-8 h-8 rounded-full'></div>
          <p className="flex flex-col  text-sm">
            <span className="text-primary font-semibold">sweetrose</span>
            <span className="text-gray ">Followed by kenny</span>
          </p>
        </div>
        <span className=" cursor-pointer text-[#0095f6] text-xs font-semibold">
          Follow
        </span>
      </div>

      <div className="w-full flex items-center space-x-1 text-[rgb(199,199,199)]  text-xs mt-8">
        <span>About</span>
        <span>&#x2022;</span>
        <span>Help</span>
        <span>&#x2022;</span>
        <span>Press</span>
        <span>&#x2022;</span>
        <span>API</span>
        <span>&#x2022;</span>
        <span>Jobs</span>
        <span>&#x2022;</span>
        <span>Privacy</span>
        <span>&#x2022;</span>
        <span>Terms</span>
      </div>

      <div className="w-full flex space-x-1 items-center text-[rgb(199,199,199)]  text-xs mt-1">
        <span>Locations</span>
        <span>&#x2022;</span>
        <span>Language</span>
      </div>

      <p className="text-[rgb(199,199,199)] text-xs mt-5">
        © 2022 INSTAGRAM FROM META
      </p>
    </section>
  );
};
