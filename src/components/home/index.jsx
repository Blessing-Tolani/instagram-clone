import MoreOption from '../assets/MoreOption';
import NotificationIcon from '../assets/NotificationIcon';
import CommentIcon from '../assets/CommentIcon';
import AppLayout from '../layout';
import ShareIcon from '../assets/ShareIcon';
import SaveIcon from '../assets/SaveIcon';
import Emoji from '../assets/Emoji';

export default function HomePage() {
  return (
    <AppLayout>
      <div className="grid grid-cols-[57%_43%] w-[70%]  mx-auto ">
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
