import iperf3_img from '../../images/header_lawcat.png';
import styledcat from '../../images/styledcat.png';
const LawcatHeader = () => {
  return (
    <>
      <div id="LawcatHeader">
        <img id="header_lawcat" src={iperf3_img} alt="header lawcat"></img>
        <img id="header_styledcat" src={styledcat} alt="header styledcat"></img>
      </div>
    </>
  );
};

export default LawcatHeader;
