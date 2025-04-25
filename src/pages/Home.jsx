import React from "react";
import HideIcon from "../assets/svg/Hide.svg";
import ArrowRightIcon from "../assets/svg/ArrowRight.svg";
import CardItem from "../components/CardItem";
import WalletImage from "../assets/images/Wallet.png";
import CursorIcon from "../assets/svg/cursor.svg";
import PlusIcon from "../assets/svg/Plus.svg";
import FacebookIcon from "../assets/svg/facebook.svg";
import SpotifyIcon from "../assets/svg/Spotify.svg";

const Home = () => {
	return (
		<div className="my-4">
			<div>
				<div className="relative h-[380px] overflow-hidden">
					<div className="absolute rounded-[40px] bg-[#0293E4] w-full h-[265px] bottom-0"></div>
					<div className="absolute w-full bottom-0 p-[12px]">
						<div className="relative w-full">
							<div className="h-[160px] w-full rounded-tl-[30px] rounded-tr-[35px] bg-[#F6F6F6] border-dashed border-[1px] border-[#C0C0C0] flex justify-center pt-2 gap-2">
								<p className="text-[#9A9A9A] font-normal leading-[21px] text-[12px]">
									Click to see more cards
								</p>
								<img
									src={ArrowRightIcon}
									alt="right"
									className="w-[18px] h-[18px]"
								/>
							</div>
							<CardItem
								title="Dollar"
								amount="$34,567.00"
								color="#EA5C00"
								height="120px"
							/>
							<CardItem
								title="Euro"
								amount="$34,567.00"
								color="#E59F00"
								height="80px"
							/>
							<CardItem
								title="Naira"
								amount="$34,567.00"
								color="#375A6E"
								height="45px"
							/>
						</div>
						<div className="w-full h-[185px] bg-[#375A6E] rounded-b-[37px] relative flex flex-col items-center justify-center">
							<img
								src={WalletImage}
								alt="wallet"
								className="w-full h-[185px]"
							/>
							<div className="h-[175px] absolute text-[#FFFFFF] leading-[21px] font-normal z-20 flex flex-col items-center justify-center">
								<p className="text-[12px]">Total balance</p>
								<p className="text-[24px] mt-[15px]">$103,500.00</p>
								<div className="flex rounded-full mt-[20px] flex-row border-[1.5px] h-[31px] w-[139px] border-[#FFFFFF] border-dashed items-center justify-center gap-4">
									<img
										src={HideIcon}
										alt="hide"
										className="w-[24px] h-[24px]"
									/>
									<p className="text-[12px]">Hide balance</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="flex items-center justify-between h-[54px] w-full gap-3 font-normal text-[12px] leading-[21px] my-6">
				<div className="w-1/2 rounded-[12px] flex items-center justify-center gap-2 bg-[#EFEFEF] h-full">
          <img src={CursorIcon} alt="" className="w-[24px] h-[24px]" />
          <p className="text-[12px]">
            Transfer
          </p>
        </div>
				<div className="w-1/2 rounded-[12px] flex items-center justify-center gap-2 bg-[#EFEFEF] h-full">
          <img src={PlusIcon} alt="" className="w-[24px] h-[24px]" />
          <p>
            Add money
          </p>
        </div>
			</div>
      <div className="flex items-center justify-center w-full gap-5">
        <div className="h-[122px] w-1/2 flex flex-col justify-center gap-[5px] items-start p-[12px] border-[1px] border-[#C0C0C0] rounded-[12px]">
          <p className="text-[12px] leading-[21px] font-normal">Apr <span className="text-[#9A9A9A]">Expenses</span></p>
          <p className="text-[16px] font-medium leading-[21px]">$4,567.45</p>
          <p className="text-[12px] font-normal leading-[21px] text-[#9A9A9A]">Saved out of <span className="text-black">$10,000</span></p>
          <div className="flex items-center w-[140px] h-[8px]">
            <span className="h-[8px] bg-[#EF5E01] w-[62px] rounded-tl-full rounded-bl-full"></span>
            <span className="h-full bg-[#E7A300] w-[32px]"></span>
            <span className="h-full bg-[#355B6A] w-[26px]"></span>
            <span className="h-full bg-[#D9D9D9] w-[20px] rounded-tr-full rounded-br-full"></span>
          </div>
        </div>
        <div className="h-[122px] w-1/2 flex flex-col justify-center gap-[5px] items-start p-[12px] border-[1px] border-[#C0C0C0] rounded-[12px]">
          <p className="text-[12px] leading-[21px] font-normal">Savings</p>
          <p className="text-[16px] font-medium leading-[21px]">$4,567.45</p>
          <p className="text-[12px] font-normal leading-[21px] text-[#9A9A9A]">Saved out of <span className="text-black">$10,000</span></p>
          <div className="flex items-center w-[140px] h-[8px]">
            <span className="bg-[#EF5E01] h-[8px] w-[102px] rounded-tl-full rounded-bl-full"></span>
            <span className="h-full bg-[#E7A300] w-[38px] rounded-tr-full rounded-br-full"></span>
          </div>
        </div>
      </div>
      <div className="w-full h-[41px] my-6 flex items-center justify-center gap-3 bg-[#EFEFEF] text-[#9A9A9A] rounded-[20px]">
        <p>Spend and save</p>
        <img src={ArrowRightIcon} alt="right" className="w-[20px] h-[20px]" />
      </div>
      <div className="w-full">
        <div className="w-full flex items-center justify-between flex-row mb-4">
          <h2 className="font-normal text-[16px] leading-[21px]">Transactions</h2>
          <p className="text-[#9A9A9A] text-[12px] leading-[21px]">See all</p>
        </div>
        <div className="w-full flex flex-col gap-7 mb-[100px]">
          <div className="flex items-center flex-row h-[35px] w-full justify-between">
            <div className="flex items-center justify-center gap-2">
              <img src={FacebookIcon} alt="fb" className="w-[35px] h-[35px]" />
              <div className="h-full flex flex-col justify-between font-normal leading-[21px]">
                <h2 className="text-[16px]">Facebook ad revenue</h2>
                <p className="text-[#9A9A9A] text-[12px]">11:33</p>
              </div>
            </div>
            <div className="font-normal leading-[21px]">
              <h2 className="text-[16px]">+12,445.87</h2>
              <p className="text-right text-[#EF1616] text-[12px]">USD</p>
            </div>
          </div>
          <div className="flex items-center flex-row h-[35px] w-full justify-between">
            <div className="flex items-center justify-center gap-2">
              <img src={SpotifyIcon} alt="fb" className="w-[35px] h-[35px]" />
              <div className="h-full flex flex-col justify-between font-normal leading-[21px]">
                <h2 className="text-[16px]">Spotify</h2>
                <p className="text-[#9A9A9A] text-[12px]">11:33</p>
              </div>
            </div>
            <div className="font-normal leading-[21px]">
              <h2 className="text-[16px]">+12,445.87</h2>
              <p className="text-right text-[#EF1616] text-[12px]">USD</p>
            </div>
          </div>
        </div>
      </div>
		</div>
	);
};

export default Home;
