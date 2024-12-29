"use client";

import { signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Header = styled.nav`
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
    background-image: url("/icons/search/search.png");
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
    background-image: url("/icons/header/settings/image.png");
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
    background-image: url("/icons/header/notification/image.png");
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

const SignOutButton = styled.button`
  padding: 12px;
  width: 60px;
  height: 60px;
  position: absolute;
  top: 20px;
  right: 40px;
  background-color: rgb(196, 196, 196);
  background-image: url('/icons/logout-icon.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 50%;  
  cursor: pointer;
  border: none;
  border-radius: 50%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    background-color: rgb(158, 158, 158);
    transform: scale(1.1);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 4px rgba(100, 149, 237, 0.5);
  }

  background-color: #ccc;
  background-blend-mode: multiply;
`;



const HeaderComponent = () => {
  const pathname = usePathname();

  let routeName = [
    { href: "/dashboard/overview", label: "Overview" },
    { href: "/dashboard/cards", label: "Credit Cards" },
    { href: "/dashboard/services", label: "Services" },
    { href: "/dashboard/loans", label: "Loans" },
  ].find(el => el.href === pathname)?.label

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <Header>
        <div className="flex justify-center items-center h-full">
          <p className="text-4xl font-semibold text-gray-500 animate-pulse">
            Loading ...
          </p>
        </div>
      </Header>
    );
  }

  return (
    <Header>
      <ImageContainer src="/icons/logo/image.png" alt="" />
      <RouteLabel>{routeName}</RouteLabel>
      <SearchInput placeholder="Search for something"></SearchInput>
      <SettingsButton />
      <NotificationButton />
      <SignOutButton onClick={() => signOut()}/>
      <BottomBorderline />
    </Header>
  );
};

export default HeaderComponent;