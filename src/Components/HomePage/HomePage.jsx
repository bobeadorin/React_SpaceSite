import ExploreBtn from "./exploreButton/exploreBtn";
import DescriptionContainer from "./homePageDescription/homePageDescription";
import "./HomePageStyles.css";

export default function Home(props) {
  const setBtnClick = props;
  return (
    <div className="containerHome">
      <div className="contentContainer">
        <DescriptionContainer />
        <ExploreBtn props={setBtnClick} />
      </div>
    </div>
  );
}
