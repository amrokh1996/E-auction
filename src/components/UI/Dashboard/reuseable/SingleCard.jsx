/* eslint-disable react/prop-types */

import Counter from "../../Counter";

const SingleCard = (props) => {
  const { title, totalNumber, icon } = props.item;
  return (
    <div className="single__card">
      <div className="card__content">
        <h4>{title}</h4>
        <span><Counter value={totalNumber}/></span>
      </div>

      <span className="card__icon">
        <i className={icon}></i>
      </span>
    </div>
  );
};

export default SingleCard;
