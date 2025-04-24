import React from "react";

const CardItem = ({ title, amount, color, height }) => {
	return (
		<div
			className={`absolute bottom-0 w-full rounded-tl-[30px] rounded-tr-[35px] p-3`}
			style={{
				backgroundColor: color,
				height: height,
			}}
		>
			<div className="flex flex-row justify-between items-center text-[12px] leading-[21px] font-normal text-[#F5F5F58A] px-2">
				<p>{title}</p>
				<p>{amount}</p>
			</div>
		</div>
	);
};

export default CardItem;
