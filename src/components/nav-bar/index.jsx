import React from 'react';
import HomeIcon from '../assets/HomeIcon';
import SearchIcon from '../assets/SearchIcon';
import ExploreIcon from '../assets/ExploreIcon';
import MessageIcon from '../assets/MessageIcon';
import NotificationIcon from '../assets/NotificationIcon';
import CreateIcon from '../assets/CreateIcon';
import Instagram from '../assets/Instagram';
import classes from './index.module.css';
import SettingsIcon from '../assets/SettingsIcon';

export default function NavigationBar() {
  return (
    <section className="relative h-screen pt-10 pl-3">
      <span className="pl-3 inline-block">
        <Instagram />
      </span>
      <nav className="mt-8  flex flex-col space-y-4">
        <div
          className={`${classes.navLink} flex items-center w-[95%] py-3 pl-3 hover:bg-[#FAFAFA] rounded-full`}
        >
          <span>
            <HomeIcon />
          </span>
          <span className="text-primary ml-4 font-semibold">Home</span>
        </div>
        <div
          className={`${classes.navLink} flex items-center w-[95%] py-3 pl-3 hover:bg-[#FAFAFA] rounded-full`}
        >
          <span>
            <SearchIcon />
          </span>
          <span className="text-primary ml-4">Search</span>
        </div>
        <div
          className={`${classes.navLink} flex items-center w-[95%] py-3 pl-3 hover:bg-[#FAFAFA] rounded-full`}
        >
          <span>
            <ExploreIcon />
          </span>
          <span className="text-primary ml-4">Explore</span>
        </div>
        <div
          className={`${classes.navLink} flex items-center w-[95%] py-3 pl-3 hover:bg-[#FAFAFA] rounded-full`}
        >
          <span>
            <MessageIcon />
          </span>
          <span className="text-primary ml-4">Messages</span>
        </div>
        <div
          className={`${classes.navLink} flex items-center w-[95%] py-3 pl-3 hover:bg-[#FAFAFA] rounded-full`}
        >
          <span>
            <NotificationIcon />
          </span>
          <span className="text-primary ml-4">Notifications</span>
        </div>
        <div
          className={`${classes.navLink} flex items-center w-[95%] py-3 pl-3 hover:bg-[#FAFAFA] rounded-full`}
        >
          <span>
            <CreateIcon />
          </span>
          <span className="text-primary ml-4">Create</span>
        </div>
        <div
          className={`${classes.navLink} flex items-center w-[95%] py-3 pl-3 hover:bg-[#FAFAFA] rounded-full`}
        >
          <span>
            <img
              alt=""
              crossOrigin="anonymous"
              draggable="false"
              src="/images/profile.jpg"
              className="w-6 h-6"
            />
          </span>
          <span className="text-primary ml-4">Profile</span>
        </div>
      </nav>
      <div
        className={`${classes.navLink} absolute bottom-7 flex items-center w-[95%] py-3 pl-3 hover:bg-[#FAFAFA] rounded-full`}
      >
        <span>
          <SettingsIcon />
        </span>
        <span className="text-primary ml-4">More</span>
      </div>
    </section>
  );
}
