"use client";

import styled from "styled-components";
import searchIcon from "@/app/icons/search/search.png";
import settingsimage from '@/app/icons/header/settings/image.png';
import notificationimage from '@/app/icons/header/notification/image.png';

const Sidebar = styled.nav`
  display: flex;
  position: absolute;
  width: 1440px;
  height: 101px;
  left: 0;
  right: 0;
  top: 0;
  bottom: 1074px;

  @media (max-width: 375px) {
    display: none;
  }
`;

const BottomBorderline = styled.div`
  position: absolute;
  left: 250px;
  width: 100%;
  height: 1px;
  bottom: 0;
  background: rgb(230, 239, 245);
`;

const ImageContainer = styled.img`
  position: relative;
  width: 183px;
  height: 38px;
  top: 31px;
  margin-left: 38px;
`;

const RouteLabel = styled.p`
    position: relative;
    width: auto;
    height: 34px;
    top: 33px;
    margin-left: 69px;
    color: rgb(52, 60, 106);
    font-size: 28px;
    font-weight: 600;
    line-height: 34px;
    letter-spacing: 0%;
    text-align: left;
`;

const SearchInput = styled.input`
  padding-left: 20px;
  position: absolute;
  right: 295px;
  width: 255px;
  height: 50px;
  top: 25px;
  border-radius: 40px;
  background: rgb(245, 247, 250);
  border: none;
  &::placeholder { 
    background-image: url(${searchIcon.src});
    background-repeat: no-repeat;
    background-position: 10px center; 
    background-size: 18px;
    color: rgb(139, 163, 203);
    font-family: Inter;
    font-size: 15px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0%;
    text-align: center; 
  }
`;

const SettingsButton = styled.button`
    padding: 12px;
    background-image: url(${settingsimage.src});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 50%;
    right: 215px;
    position: absolute;
    width: 50px;
    height: 50px;
    top: 25px;
    background-color: rgb(245, 247, 250);
    cursor: pointer;
    border-radius: 100px;
`;

const NotificationButton = styled.button`
    padding: 12px;
    background-image: url(${notificationimage.src});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 50%;
    right: 135px;
    position: absolute;
    width: 50px;
    height: 50px;
    top: 25px;
    background-color: rgb(245, 247, 250);
    cursor: pointer;
    border-radius: 100px;
`;

interface AccountProps {
    $accountImgpath: string;
}

const AccountButton = styled.button<AccountProps>`
    padding: 12px;
    background-image: url(accountImgpath);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    right: 40px;
    position: absolute;
    width: 60px;
    height: 60px;
    top: 20px;
    background-color: rgb(196, 196, 196);;
    cursor: pointer;
    border-radius: 100px;
`;

const SidebarComponent = () => {


    return (
        <Sidebar>
            <ImageContainer src="/icons/logo/image.png" alt="" />
            <RouteLabel>Overview</RouteLabel>
            <SearchInput placeholder="Search for something"></SearchInput>
            <SettingsButton />
            <NotificationButton />
            <AccountButton $accountImgpath={""}/>
            <BottomBorderline />
        </Sidebar>
    );
};

export default SidebarComponent;