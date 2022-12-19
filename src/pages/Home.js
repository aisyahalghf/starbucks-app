import React from "react";
import CardReward from "../Component/CardRewards";
import { Button } from "@chakra-ui/react";
import CardBox from "../Component/CardBox";
import CardQuestion from "../Component/CardQuestion";
import DropDown from "../Component/DropDown.js";
import Footer from "../Component/Footer";

export default function Home() {
  return (
    <div className="flex">
      <div className="w-[40%] h-[800px] flex items-center justify-center font-extrabold text-[30px]  bg-white  ">
        <div className="fixed">Holiday your way 🧣</div>
      </div>
      <div className=" border-l border-slate-200  ">
        <div className="flex-col ml-10 mt-[30px] ">
          <h1 className=" font-extrabold mb-[30px] ">STARBUCKS® REWARDS</h1>
          <div className="flex justify-center gap-3 ">
            <CardReward
              img="https://content-prod-live.cert.starbucks.com/binary/v2/asset/digitalcontent.starbucks.com/udp/us/en/assets/rewards-carousel-1_tcm121-77064.jpg"
              text="Let us treat you—earn and redeem Stars for free drinks, food and more."
            />
            <CardReward
              img="https://content-prod-live.cert.starbucks.com/binary/v2/asset/digitalcontent.starbucks.com/udp/us/en/assets/rewards-carousel-2_tcm121-77065.jpg"
              text="Customize your order in the app and pick it up when it’s ready."
            />
            <CardReward
              img="https://content-prod-live.cert.starbucks.com/binary/v2/asset/digitalcontent.starbucks.com/udp/us/en/assets/rewards-carousel-3_tcm121-77066.jpg"
              text="Stop in on your birthday for a special treat on the house."
            />
          </div>
          <div className="flex gap-4 mb-10 ">
            <button className=" border rounded-3xl text-white w-[130px] h-[40px] bg-black ">
              Join Now
            </button>
            <Button border="2px" borderRadius="3xl" bgColor="white">
              Learn More
            </Button>
          </div>
        </div>
        <div className=" bg-gray-100 flex flex-col pt-[10px] pb-[50px] items-center w-full border ">
          <CardQuestion />
          <CardBox
            img={
              "https://content-prod-live.cert.starbucks.com/binary/v2/asset/digitalcontent.starbucks.com/udp/us/en/assets/SFLOwnedArt_tcm121-82220.jpg"
            }
            header="Play for your chance to win"
            text="Starbucks for Life is here. Join Starbucks® Rewards to play for gift cards, drinks and more."
            button="Join now"
          />
          <CardBox
            img="https://content-prod-live.cert.starbucks.com/binary/v2/asset/digitalcontent.starbucks.com/udp/us/en/assets/FY23DeltaHolidayUnauthAppIMAGE_tcm121-81975.jpg"
            header="Closer to moments that matter "
            text="Add extra cheer this holiday season by joining Starbucks® Rewards, linking it to Delta SkyMiles® to unlock 1 mile per $1 spent at Starbucks (excludes taxes & tips)."
            button="Sign up + link"
          />
        </div>
        <div>
          <div>
            <DropDown
              text="About Us"
              item1="Our Company"
              item2="Our Coffee"
              item3="Story and News"
              item4=" Starbuck Archive "
              item5=" Investor Relations "
            />
            <DropDown
              text="Careers"
              item1="Our Company"
              item2="Our Coffee"
              item3="Story and News"
              item4=" Starbuck Archive "
              item5=" Investor Relations "
            />
            <DropDown
              text="Sosial Impact"
              item1="Our Company"
              item2="Our Coffee"
              item3="Story and News"
              item4=" Starbuck Archive "
              item5=" Investor Relations "
            />
            <DropDown
              text="For Business Partners"
              item1="Our Company"
              item2="Our Coffee"
              item3="Story and News"
              item4=" Starbuck Archive "
              item5=" Investor Relations "
            />
            <DropDown
              text="Order and Pickup"
              item1="Our Company"
              item2="Our Coffee"
              item3="Story and News"
              item4=" Starbuck Archive "
              item5=" Investor Relations "
            />
          </div>
          <div>
            <hr></hr>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
