import Timer from "./Timer"
import SocialMediaIcon from "./SocialMediaIcon"
import FacebookIcon from "../assets/images/icon-facebook.svg";
import PinterestIcon from "../assets/images/icon-pinterest.svg";
import InstagramIcon from "../assets/images/icon-instagram.svg";

const MainContainer = () => {
  return (
    <div className="flex flex-col gap-14 z-40">
        <div>
            <h1 className="text-white" style={{letterSpacing: '6px'}}>WE'RE LAUNCHING SOON</h1>
        </div>

        <div className="flex justify-between gap-4 sm:gap-8">
            <Timer title='Days'/>
            <Timer title='Hours'/>
            <Timer title='Minutes'/>
            <Timer title='Seconds'/>
        </div>

        <footer className="flex justify-center gap-8 mt-32">
            <SocialMediaIcon imageSrc={FacebookIcon}/>
            <SocialMediaIcon imageSrc={PinterestIcon}/>
            <SocialMediaIcon imageSrc={InstagramIcon}/>
        </footer>
    </div>
  )
}

export default MainContainer