import { blueBorder } from "../../../../assets/images";
import PageSectionNumber from "../../../../components/pageSectionNumber/PageSectionNumber";
import {
  OurCommunityCard,
  OurCommunityCards,
  OurCommunityTitle,
  OurCommunityWrapper,
  OurCommunityPageNumber,
  OurCommunityCardImageBox,
  OurCommunityCotainerWrapper,
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
import useLocales from "../../../../locales/useLocales";

const OurCommunity = () => {
  const { translate } = useLocales();

  return (
    <OurCommunityCotainerWrapper>
      <OurCommunityWrapper>
        <OurCommunityPageNumber>
          <PageSectionNumber fullPageNumber={12} currentPageNumber={"07"} />
        </OurCommunityPageNumber>

        <OurCommunityTitle>{translate("OurCommmunity")}</OurCommunityTitle>

        <OurCommunityCards>
          <OurCommunityCard>
            <OurCommunityCardImageBox>
              <img src={blueBorder} alt="border" />

              <p>{translate("GitHub")}</p>

              <div className="cardIcon-box">
                <GitHubIcon className="cardIcon" />
              </div>

              <span>{translate("Follow")}</span>

              <h2>+10k</h2>
            </OurCommunityCardImageBox>
            <ArrowOutwardIcon className="cardArrowIcon" />
          </OurCommunityCard>

          <OurCommunityCard>
            <OurCommunityCardImageBox>
              <img src={blueBorder} alt="border" />

              <p>{translate("Telegram")}</p>

              <div className="cardIcon-box">
                <TelegramIcon className="cardIcon" />
              </div>

              <span>{translate("JOIN")}</span>

              <h2>+10k</h2>
            </OurCommunityCardImageBox>
            <ArrowOutwardIcon className="cardArrowIcon" />
          </OurCommunityCard>

          <OurCommunityCard>
            <OurCommunityCardImageBox>
              <img src={blueBorder} alt="border" />

              <p>{translate("Twitter")}</p>

              <div className="cardIcon-box">
                <TwitterIcon className="cardIcon" />
              </div>

              <span>{translate("Follow")}</span>

              <h2>+10k</h2>
            </OurCommunityCardImageBox>
            <ArrowOutwardIcon className="cardArrowIcon" />
          </OurCommunityCard>

          <OurCommunityCard>
            <OurCommunityCardImageBox>
              <img src={blueBorder} alt="border" />

              <p>{translate("Instagram")}</p>

              <div className="cardIcon-box">
                <InstagramIcon className="cardIcon" />
              </div>

              <span>{translate("Follow")}</span>

              <h2>+10k</h2>
            </OurCommunityCardImageBox>
            <ArrowOutwardIcon className="cardArrowIcon" />
          </OurCommunityCard>

          <OurCommunityCard>
            <OurCommunityCardImageBox>
              <img src={blueBorder} alt="border" />

              <p>{translate("Linkedin")}</p>

              <div className="cardIcon-box">
                <LinkedInIcon className="cardIcon" />
              </div>

              <span>{translate("Follow")}</span>

              <h2>+10k</h2>
            </OurCommunityCardImageBox>
            <ArrowOutwardIcon className="cardArrowIcon" />
          </OurCommunityCard>

          <OurCommunityCard>
            <OurCommunityCardImageBox>
              <img src={blueBorder} alt="border" />

              <p>{translate("Youtube")}</p>

              <div className="cardIcon-box">
                <YouTubeIcon className="cardIcon" />
              </div>

              <span>{translate("JOIN")}</span>

              <h2>+10k</h2>
            </OurCommunityCardImageBox>
            <ArrowOutwardIcon className="cardArrowIcon" />
          </OurCommunityCard>

          <OurCommunityCard>
            <OurCommunityCardImageBox>
              <img src={blueBorder} alt="border" />

              <p>{translate("Discord")}</p>

              <div className="cardIcon-box">
                <FaDiscord className="cardIcon" />
              </div>

              <span>{translate("Follow")}</span>

              <h2>+10k</h2>
            </OurCommunityCardImageBox>
            <ArrowOutwardIcon className="cardArrowIcon" />
          </OurCommunityCard>

          <OurCommunityCard>
            <OurCommunityCardImageBox>
              <img src={blueBorder} alt="border" />

              <p>{translate("Facebook")}</p>

              <div className="cardIcon-box">
                <FacebookIcon className="cardIcon" />
              </div>

              <span>{translate("JOIN")}</span>

              <h2>+10k</h2>
            </OurCommunityCardImageBox>
            <ArrowOutwardIcon className="cardArrowIcon" />
          </OurCommunityCard>
        </OurCommunityCards>
      </OurCommunityWrapper>
    </OurCommunityCotainerWrapper>
  );
};

export default OurCommunity;
