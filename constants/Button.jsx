import Image from "next/image";
import React from "react";

const Button = ({ type, title, icon, variant, full }) => {
  return (
    <button type={type} className={`flexCenter gap-3 rounded-full border ${variant} ${ full && 'w-full'}`}>
      {icon && <Image src={icon} width={24} height={24} alt={title}/>}
      <label className={`bold-16 whitespace-nowrap cursor-pointer`}></label>
      {title}
    </button>
  );
};

export default Button;
