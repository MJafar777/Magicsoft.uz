import { blueBorder } from "../../../../assets/images";
import PageSectionNumber from "../../../../components/pageSectionNumber/PageSectionNumber";
import {
  OurCommunityCard,
  OurCommunityCards,
  OurCommunityTitle,
  OurCommunityWrapper,
  OurCommunityPageNumber,
  OurCommunityCardImageBox,
} from "./OurCommunityStyles";

import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TelegramIcon from "@mui/icons-material/Telegram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { FaDiscord } from "react-icons/fa";

const OurCommunity = () => {
  return (
    <OurCommunityWrapper>
      <OurCommunityPageNumber>
        <PageSectionNumber fullPageNumber={12} currentPageNumber={"07"} />
      </OurCommunityPageNumber>

      <OurCommunityTitle>Our Commmunity</OurCommunityTitle>

      <OurCommunityCards>
        <OurCommunityCard>
          <OurCommunityCardImageBox>
            <img src={blueBorder} alt="border" />

            <p>GitHub</p>

            <GitHubIcon className="cardIcon" />

            <span>Follow</span>

            <h2>+10k</h2>
          </OurCommunityCardImageBox>
          <ArrowOutwardIcon className="cardArrowIcon" />
        </OurCommunityCard>

        <OurCommunityCard>
          <OurCommunityCardImageBox>
            <img src={blueBorder} alt="border" />

            <p>Telegram</p>

            <TelegramIcon className="cardIcon" />

            <span>JOIN</span>

            <h2>+10k</h2>
          </OurCommunityCardImageBox>
          <ArrowOutwardIcon className="cardArrowIcon" />
        </OurCommunityCard>

        <OurCommunityCard>
          <OurCommunityCardImageBox>
            <img src={blueBorder} alt="border" />

            <p>Twitter</p>

            <TwitterIcon className="cardIcon" />

            <span>Follow</span>

            <h2>+10k</h2>
          </OurCommunityCardImageBox>
          <ArrowOutwardIcon className="cardArrowIcon" />
        </OurCommunityCard>

        <OurCommunityCard>
          <OurCommunityCardImageBox>
            <img src={blueBorder} alt="border" />

            <p>Instagram</p>

            <InstagramIcon className="cardIcon" />

            <span>Follow</span>

            <h2>+10k</h2>
          </OurCommunityCardImageBox>
          <ArrowOutwardIcon className="cardArrowIcon" />
        </OurCommunityCard>

        <OurCommunityCard>
          <OurCommunityCardImageBox>
            <img src={blueBorder} alt="border" />

            <p>Linkedin</p>

            <LinkedInIcon className="cardIcon" />

            <span>Follow</span>

            <h2>+10k</h2>
          </OurCommunityCardImageBox>
          <ArrowOutwardIcon className="cardArrowIcon" />
        </OurCommunityCard>

        <OurCommunityCard>
          <OurCommunityCardImageBox>
            <img src={blueBorder} alt="border" />

            <p>Youtube</p>

            <YouTubeIcon className="cardIcon" />

            <span>JOIN</span>

            <h2>+10k</h2>
          </OurCommunityCardImageBox>
          <ArrowOutwardIcon className="cardArrowIcon" />
        </OurCommunityCard>

        <OurCommunityCard>
          <OurCommunityCardImageBox>
            <img src={blueBorder} alt="border" />

            <p>Discord</p>

            <FaDiscord className="cardIcon" />

            <span>Follow</span>

            <h2>+10k</h2>
          </OurCommunityCardImageBox>
          <ArrowOutwardIcon className="cardArrowIcon" />
        </OurCommunityCard>

        <OurCommunityCard>
          <OurCommunityCardImageBox>
            <img src={blueBorder} alt="border" />

            <p>Facebook</p>

            <FacebookIcon className="cardIcon" />

            <span>JOIN</span>

            <h2>+10k</h2>
          </OurCommunityCardImageBox>
          <ArrowOutwardIcon className="cardArrowIcon" />
        </OurCommunityCard>
      </OurCommunityCards>
    </OurCommunityWrapper>
  );
};

export default OurCommunity;
