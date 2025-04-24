import React from "react";
import HideIcon from "../assets/svg/Hide.svg";
import ArrowRightIcon from "../assets/svg/ArrowRight.svg";
import CardItem from "../components/CardItem";
import WalletImage from "../assets/svg/Wallet.svg";
import CursorIcon from "../assets/svg/cursor.svg";
import PlusIcon from "../assets/svg/Plus.svg";

const Home = () => {
	return (
		<div className="my-4">
			<div>
				<div className="relative h-[380px] overflow-hidden">
					<div className="absolute rounded-[40px] bg-[#0293E4] w-full h-[265px] bottom-0"></div>
					<div className="absolute w-auto inset-x-[-4px] bottom-0 m-[12px]">
						<div className="relative">
							<div className="h-[160px] rounded-tl-[30px] rounded-tr-[35px] bg-[#F6F6F6] border-dashed border-[1px] border-[#C0C0C0] flex justify-center pt-2 gap-2">
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
						<div className="w-full h-[185px] rounded-b-[37px] relative flex flex-col items-center justify-center">
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
      <div>
        <div>
          <p>Apr<span>Expenses</span></p>
          <p>$4,567.45</p>
          <p>Spend out of $10,000</p>
          <div>
            <span>red</span>
          </div>
        </div>
      </div>
		</div>
	);
};

export default Home;
