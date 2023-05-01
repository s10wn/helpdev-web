import type { LiskListType } from "src/types/lisk-list-type";

export const ItemSide = ({ title, icon, link }: LiskListType) => {
  const Icons = icon;

  return (
    <div>
      {title}
      <Icons />
      <a href="logo">{link}</a>
    </div>
  );
};
