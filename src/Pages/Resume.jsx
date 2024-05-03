import { useState, useEffect } from "react";
import { Profile } from "../Components/Profile";
import { AboutMe } from "../Components/AboutMe";
import { Menu } from "../Components/Menu";
import { SEO } from "../Components/SEO";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails } from "../store/user/api";
import { useNavigate, useParams } from "react-router-dom";
import LeftSide from "../Components/LeftSide";
import RightSide from "../Components/RightSide";

export const Resume = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    data: userResume,
    isLoading,
    isError,
  } = useSelector((state) => state.user);

  const [leftSideContent, setleftSideContent] = useState();
  const [rightSideContent, setRightSideContent] = useState();
  const [menuList, setMenuList] = useState();

  const params = useParams();
  const query = "(min-width: 968px)";
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    dispatch(getUserDetails({ name: params?.name }));
  }, [params, dispatch, navigate]);

  useEffect(() => {
    if (userResume) {
      const sortedGroupMapper = [...(userResume.group_mapper || [])].sort(
        (a, b) => a.order - b.order
      );
      const leftGroupMapper = sortedGroupMapper.filter(
        (item) => item.type === "left"
      );
      setleftSideContent(leftGroupMapper);

      const rightGroupMapper = sortedGroupMapper.filter(
        (item) => item.type === "right"
      );
      setRightSideContent(rightGroupMapper);

      setMenuList([
        ...leftGroupMapper.map((item) => getFormattedMenuItem(item)),
        ...rightGroupMapper.map((item) => getFormattedMenuItem(item)),
      ]);
    }
  }, [userResume]);

  const getFormattedMenuItem = (item) => {
    return {
      label: item.title,
      section: `#${item.title.toLowerCase().replace(/\s+/g, "")}`,
      className: "bx-" + item.title.toLowerCase().replace(/\s+/g, "-"),
    };
  };

  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [dispatch, matches]);

  if (isLoading)
    return (
      <div className="margin_top loader_wrapper">
        <div className="loader"></div>
      </div>
    );

  if (isError) navigate("/404");

  return (
    <div className="margin_top">
      <SEO
        name={userResume?.name || ""}
        ocupation={userResume?.role || ""}
        description={userResume?.description_text || ""}
      />
      {!matches && <Menu menu={menuList} userName={params?.name || ""} />}
      <main className="l-main bd-container" id="bd-container">
        <div className="resume" id="area-cv">
          <div className="resume__left">
            <Profile
              email={""}
              image={userResume?.profile_url}
              location={userResume?.location}
              ocupation={userResume?.role}
              name={userResume?.name}
              social={userResume.social_link_mapper || []}
              key={`user-profile`}
              isMobileView={!matches}
            />
            <AboutMe
              description={userResume?.description_text || ""}
              label={userResume?.description_title || ""}
              key={`about-me`}
            />
            {(leftSideContent || [])?.map((item, index) => {
              return (
                <div
                  key={`left-${index}`}
                  id={item.title.toLowerCase().replace(/\s+/g, "")}
                >
                  <h2 className="section-title">{item.title}</h2>
                  {[...(item?.group_item_mapper || [])]
                    ?.sort((a, b) => a.order - b.order)
                    ?.map((item, index) => {
                      return (
                        <LeftSide
                          title={item.title}
                          subTitle1={item.subtitle_1}
                          subTitle2={item.subtitle_2}
                          key={`left-child-${index}`}
                        />
                      );
                    })}
                </div>
              );
            })}
          </div>
          <div className="resume__right">
            {(rightSideContent || [])?.map((item, index) => {
              return (
                <div
                  key={`right-${index}`}
                  id={item.title.toLowerCase().replace(/\s+/g, "")}
                >
                  <h2 className="section-title" style={{ marginTop: "35px" }}>
                    {item.title}
                  </h2>
                  {[...(item?.group_item_mapper || [])]
                    .sort((a, b) => a.order - b.order)
                    ?.map((item, index) => {
                      return (
                        <RightSide
                          title={item.title}
                          subTitle1={item.subtitle_1}
                          subTitle2={item.subtitle_2}
                          description={item.description}
                          key={`right-child-${index}`}
                        />
                      );
                    })}
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};
