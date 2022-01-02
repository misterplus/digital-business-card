import avatar from "../images/avatar.jpg";
import EmailIcon from '@mui/icons-material/Email';

export default function Info() {
  return (
    <div className="info">
      <img className="info-avatar" src={avatar} alt="" />
      <div className="info-text">
        <h2 className="info-name">MisterPlus</h2>
        <h4 className="info-role">Web3 Developer</h4>
        <h5 className="info-domain">misterplus.eth</h5>
        <a href="mailto:misterplus@163.com"><button className="button-email"><div className="button-email-text"><EmailIcon />Email</div></button></a>
      </div>
    </div>
  );
}
