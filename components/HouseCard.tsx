interface IProps {
  house: "Ravenclaw" | "Griffindor" | "Hufflepuff" | "Slytherin" | string;
}

const HouseCard: React.FC<IProps> = ({ house }) => {
  return (
    <div className="mt-4">
      {house === "Ravenclaw" && (
        <img src="/img/ravenclaw.png" className="w-64" />
      )}
      {house === "Griffindor" && (
        <img src="/img/griffindor.png" className="w-64" />
      )}
      {house === "Hufflepuff" && (
        <img src="/img/hufflepuff.png" className="w-64" />
      )}
      {house === "Slytherin" && (
        <img src="/img/slytherin.png" className="w-64" />
      )}
    </div>
  );
};

export default HouseCard;
