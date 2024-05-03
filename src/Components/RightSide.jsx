const RightSide = ({ title, subTitle1, subTitle2, description }) => {
  return (
    <div className="experience__container bd-grid" >
      <div className="experience__content">
        <div className="experience__time">
          <span className="experience__rounder"></span>
          <span className="experience__line"></span>
        </div>
        <div className="experience__data bd-grid">
          <h3 className="experience__title">{title}</h3>
          <span className="experience__proyect">{subTitle1}</span>
          <span className="experience__proyect">{subTitle2}</span>

          <p className="experience__description" >{description}</p>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
