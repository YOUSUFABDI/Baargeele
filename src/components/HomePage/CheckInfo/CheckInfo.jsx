import "./check_info.css";
import { RiExchangeFundsFill } from "react-icons/ri";
import { MdOutlineRefresh } from "react-icons/md";
import { useLocalData } from "../../../DataContext";

const CheckInfo = ({ setEnteredId }) => {
  const { inputValue, setInputValue } = useLocalData();

  const handleBackBtn = () => {
    setEnteredId(false);
  };

  return (
    <div className="check__info">
      <div className="check__info__banner">
        <div className="check__info__head">
          <span>Nh-YOUSUF</span>
          <span onClick={handleBackBtn}>
            <RiExchangeFundsFill />
          </span>
        </div>

        <div className="check__info__middle">
          <span>Player ID:</span>
          <span>{inputValue}</span>
        </div>
      </div>
      <div className="check__info__footer">
        <span>Check again:</span>
        <div className="check__info__refresh">
          <span>Refresh</span>
          <span>
            <MdOutlineRefresh />
          </span>
        </div>
      </div>
    </div>
  );
};

export default CheckInfo;
