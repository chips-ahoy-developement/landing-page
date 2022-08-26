import React from "react";
import styles from "./features.module.scss"
import marketingIcon from "../../assets/icon_marketing.svg"
import designIcon from "../../assets/icon_design.svg"
import engineIcon from "../../assets/icon_engineering.svg"
const Features = () => {
  return (
    <div className="row mb-5 mt-5 py-5">
      <div className={`col-sm-12 col-md-12 text-start mb-5 px-4 ${styles.promisingSubheading}`} >
      
        <h2>A UI /UX Design and Web Development Studio<span className={styles.eyebrow}></span></h2>
        
        <p>
          supporting copy lorem Ipsum, Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.{" "}
        </p>
        
      </div>

      <div className="col-sm-12 col-md-4 mt-3 mb-5">
        <img src={marketingIcon} alt="" className="mb-3"/>
        <p className="subheader mb-3">
          Digital Marketing 
        </p>

        <ul>
          <li>
            At rerum harum cum minima error eos voluptates dignissimos non ipsam
            voluptas aut asperiores repellat ut nihil amet.
          </li>
          <li>
            At rerum harum cum minima error eos voluptates dignissimos non ipsam
            voluptas aut asperiores repellat ut nihil amet.
          </li>
        </ul>
      </div>
      <div className="col-sm-12 col-md-4 mt-3 ">
      <img src={designIcon} className="mb-3" width={50} alt=""/>
        <p className="subheader mb-3">
          Design / UI / UX 
        </p>

        <ul>
          <li>
            At rerum harum cum minima error eos voluptates dignissimos non ipsam
            voluptas aut asperiores repellat ut nihil amet.
          </li>
          <li>
            At rerum harum cum minima error eos voluptates dignissimos non ipsam
            voluptas aut asperiores repellat ut nihil amet.
          </li>
        </ul>
      </div>
      <div className="col-sm-12 col-md-4 mt-3 ">
      <img src={engineIcon} width={50} className="mb-3" alt=""/>
        <p className="subheader mb-3">
          Web Development 
        </p>

        <ul>
          <li>
            At rerum harum cum minima error eos voluptates dignissimos non ipsam
            voluptas aut asperiores repellat ut nihil amet.
          </li>
          <li>
            At rerum harum cum minima error eos voluptates dignissimos non ipsam
            voluptas aut asperiores repellat ut nihil amet.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Features;
