// import React from 'react'
type TRankStar = {
  number: number;
};
export const RankStar = ({ number = 1 }: TRankStar) => {
  const dotWhite = {
    width: 10,
    height: 10,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    display: "inline-flex",
    paddingRight: 10,
  };
  const dotYellow = {
    width: 10,
    height: 10,
    backgroundColor: "#F7C609",
    borderRadius: 10,
    display: "inline-flex",
  };
  const stars = [1, 2, 3, 4, 5];
  return (
    <div>
      {stars.map((star) => {
        if (star > number) {
          return <span className="mr-1" style={dotWhite}></span>;
        } else {
          return <span className="mr-1" style={dotYellow}></span>;
        }
      })}
    </div>
  );
};
