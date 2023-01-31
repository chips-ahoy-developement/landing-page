import React from "react";
import styles from "./features.module.scss"
import marketingIcon from "../../assets/icon_marketing.svg"
import designIcon from "../../assets/icon_design.svg"
import engineIcon from "../../assets/icon_engineering.svg"
const Features = () => {
  return (
    <div className="row mb-5 mt-5 py-5">
      <div className={`col-sm-12 col-md-12 text-start mb-5 px-4 ${styles.promisingSubheading}`} >

        
        <p>
        Revolutionize your online presence with Center Point. Our team of expert developers specializes in creating innovative web applications that drive business success. Utilizing the latest technologies, we craft custom solutions that meet your unique needs and exceed your expectations. From concept to launch, we're with you every step of the way, delivering exceptional customer service and unparalleled results. Whether you're looking to streamline your internal processes, engage with customers in new ways, or simply bring your vision to life, Center Point is here to help. Contact us today to learn more about how we can transform your online presence.
        </p>
        
      </div> 
    </div>
  );
};

export default Features;
