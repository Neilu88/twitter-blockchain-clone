import React from "react"
import "./Rightbar.css"
import blockchainnews from "../images/blockchainnews.jpg"
import valonews from "../images/valonews.webp"
import ainews from "../images/ainews.jpg"
import ethnews from "../images/ethnews.jpg"

import { Input } from "web3uikit"

const Rightbar = () => {
  const trends = [
    {
      img: blockchainnews,
      text: "Crypto's Great Reset: How Digital Asset Investors Will Recover From The Market's $1 Trillion Meltdown",
      link: "https://www.forbes.com/sites/michaeldelcastillo/2022/05/17/cryptos-great-reset-how-digital-asset-investors-and-blockchain-will-come-back-from-cryptos-2-trillion-meltdown/?sh=7767e8543b1b",
    },
    {
      img: valonews,
      text: "Here are the VALORANT Patch 4.03 notes",
      link: "https://dotesports.com/valorant/news/valorant-patch-4-03-notes",
    },
    {
      img: ainews,
      text: "‘The Game is Over’: Google’s DeepMind says it is on verge of achieving human-level AI",
      link: "https://www.independent.co.uk/tech/ai-deepmind-artificial-general-intelligence-b2080740.html",
    },
    {
      img: ethnews,
      text: "2 key Ethereum price metrics suggest traders will struggle to hold the $2K support level",
      link: "https://cointelegraph.com/news/2-key-ethereum-price-metrics-suggest-traders-will-struggle-to-hold-the-2k-support-level",
    },
  ]

  return (
    <>
      <div className="rightbarContent">
        <Input
          label="Search Twitter"
          name="Search Twitter"
          prefixIcon="search"
          labelBgColor="#141d26"
        ></Input>

        <div className="trends">
          News For You
          {trends.map((trend) => {
            return (
              <div className="trend" onClick={() => window.open(trend.link)}>
                <img src={trend.img} alt="" className="trendImg" />
                <div className="trendText">{trend.text}</div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Rightbar
