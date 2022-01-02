import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Footer() {
    return (
        <div className="footer">
            <a href="https://twitter.com/mrplus_plus"><TwitterIcon /></a>
            <a href="https://github.com/misterplus"><GitHubIcon /></a>
            <a href="https://www.youtube.com/channel/UC-VXawiAwT1pQ45RBNS70Kg/featured"><YouTubeIcon /></a>
        </div>
    )
}