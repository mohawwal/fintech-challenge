import React from "react";

const CardItem = ({ title, amount, color, height, hideBalance }) => {
	return (
		<div
			className={`absolute bottom-0 w-full rounded-tl-[30px] rounded-tr-[35px] p-3 transition-all duration-300`}
			style={{
				backgroundColor: color,
				height: hideBalance ? parseInt(height) * 0.78 + "px" : height,
			}}
		>
			<div className="flex flex-row justify-between items-center text-[12px] leading-[21px] font-normal text-[#F5F5F58A] px-2">
				<p>{title}</p>
				<p>{hideBalance ? "*****" : amount}</p>
			</div>
		</div>
	);
};

export default CardItem;