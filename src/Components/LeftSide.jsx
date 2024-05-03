const LeftSide = ({ title, subTitle1, subTitle2, description }) => {
  return (
    <>
      <section>
        <div className="skills__content bd-grid">
          <ul className="skills__data">
            <div className="skills__name">
              <div className="skill__title">
                <span className="skills__circle" /> {title}
                {subTitle1 && (
                  <div className="skills__description">{subTitle1}</div>
                )}
                {subTitle2 && (
                  <div className="skills__description"> {subTitle2}</div>
                )}
                {description && (
                  <div className="skills__description">{description}</div>
                )}
              </div>
            </div>
          </ul>
        </div>
      </section>
    </>
  );
};

export default LeftSide;
