'use client'
import styles from "./page.module.css";
import { IoMenu } from "react-icons/io5";
import { FaAngleRight, FaPlus, FaTwitter } from "react-icons/fa";
import Image from "next/image";
import iconImage from './assets/iconImage.jpg';
import sliderImage from './assets/sliderImage.jpg';
import nflMen from './assets/nflMen.jpg';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import NflA from './assets/NflA.png';
import NflN from './assets/NflN.png';
import nflBrand1 from './assets/nflBrand1.png';
import FooterLogo from './assets/logoNfl.png';
import bgBanner from './assets/sidebar_bg.png';
import logos from './assets/logoNfl.png';
import USAfootball_1_edit from './assets/USAfootball_1_edit.jpg';
import mission_bg from './assets/mission_bg.png';
import Slider from "react-slick";
import { TbGridDots } from "react-icons/tb";
import { useEffect, useRef, useState } from "react";




export default function Home() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
    ]
  };
  var settings2 = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  const firstSlider = useRef()
  const secondSliderRef = useRef()

  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  console.log(windowWidth)
  return (
    <div className={`${styles.MainContainer} container-fluid`}>
      {windowWidth > 1300 &&
        <div className={styles.SideBar} style={{ backgroundImage: `url(${bgBanner.src})` }}>
          <div className={styles.diagonal_box}>

          </div>
          <div className={styles.main_logo} style={{ backgroundImage: `url(${logos.src})` }}>
          </div>
          <div className={styles.menu_launch}>
            <div className={styles.closed} bis_skin_checked="1">
              <span style={{color:'white'}}>Menu</span>
              <IoMenu className={styles.HamburgerIcon} />
            </div>
          </div>
          <view className={`${styles.loginFormation}`}>
            <h3>Login</h3>
            <input type="text" placeholder="Email" />
            <div className={styles.passwordContainer}>
              <input type="text" placeholder="Password" className={styles.PasswordInput} />
              <button className={styles.LoginBtn}>
                <FaAngleRight className={styles.loginIcon} />
              </button>
            </div>
            <h3 className={styles.LinksAction}>Forgot password?</h3>
            <h3 className={styles.LinksAction}>Register!</h3>

            <div className={styles.socialMediaContainer}>
              <FaTwitter />
              <h2>Follow us on Twitter</h2>
            </div>
          </view>
        </div>
      }

      <div className={styles.ResponsiveHeader} style={{ backgroundImage: `url(${bgBanner.src})` }}>
        <div style={{ display: "flex", alignItems: 'center' }}>
          <div className={styles.RedSideNav}>
            <IoMenu className={styles.HamburgerIcon} />
          </div>
        </div>
        <div></div>
        <div className={styles.TransFormResponsiveHead}>
          <Image src={FooterLogo} className={styles.TransFormResponsiveHeadImage} />
        </div>
      </div>


      <div className="row h-100 position-relative">

        {windowWidth > 1300 &&
          <div className="col-md-7 bg-dark h-100 p-0">
            <div className={styles.BannerLeft} style={{ backgroundImage: `url(${USAfootball_1_edit.src})` }}>
              <div className={styles.impectSection}>
                <h3>
                  IMPACT
                </h3>
                <FaPlus className={styles.plusIcon} />
              </div>
            </div>
          </div>
        }


        <div className={`${windowWidth > 1300 ? "col-md-5" : "col-md-12"} bg-light h-100 p-0`}>
          <div className={styles.BannerRight}>
            <h1 className={styles.transformingBanner}>
              Mission
            </h1>
            <div>
              <p>
                The Kriya Shakti Foundation (KSF) is a nonprofit organization committed to promoting social wellness, healthy living, and happiness through the power of sports and the arts. Since our founding in 2017, we have been dedicated to our mission of "Social Wellness through Arts and Sports," impacting individuals from diverse backgrounds, skill levels, ethnicities, and communities. Our aim is not only to encourage healthy lifestyles but also to bring people together, fostering community bonds and camaraderie.

              </p>
              <p>
                The founders of the Kriya Shakti Foundation firmly believe that happiness and good health are essential for a positive outlook on life. They recognize the importance of practicing and sharing these values within a community to inspire positive thinking and a healthy lifestyle. As they explored ways to achieve this, they sought a universal platform that could transcend geographical, cultural, and ethnic boundaries. Sports and the arts naturally emerged as the ideal mediums, leading to the creation and mission of the Kriya Shakti Foundation.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <a>
                  Find out more
                </a>
                <a>Our Board of directors</a>
              </div>
            </div>
          </div>
        </div>


        <div className={styles.featuresAbsolute}>
          <div className="container-fluid h-100">
            <div className={`row h-100`}>
              {windowWidth > 1300 &&
                <div className="col-md-3 p-0">
                </div>
              }

              {windowWidth > 1300 ?
                <div className="col-md-8 p-0 d-flex align-items-center justify-content-between">
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <div className={styles.featureContent}>
                      <Image src={iconImage} />
                    </div>
                    <h4 className={styles.featureTitle}>Grant Programs</h4>
                    <h6 className={styles.featureLink}>More</h6>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <div className={styles.featureContent}>
                      <Image src={iconImage} />
                    </div>
                    <h4 className={styles.featureTitle}>Youth Football                  </h4>
                    <h6 className={styles.featureLink}>More</h6>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <div className={styles.featureContent}>
                      <Image src={iconImage} />
                    </div>
                    <h4 className={styles.featureTitle}>Community</h4>
                    <h6 className={styles.featureLink}>More</h6>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <div className={styles.featureContent}>
                      <Image src={iconImage} />
                    </div>
                    <h4 className={styles.featureTitle}>Health & Safety                  </h4>
                    <h6 className={styles.featureLink}>More</h6>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <div className={styles.featureContent}>
                      <Image src={iconImage} />
                    </div>
                    <h4 className={styles.featureTitle}>Character<br />Education</h4>
                    <h6 className={styles.featureLink}>More</h6>
                  </div>
                </div>
                :
                <div className="col-md-12 p-0">
                  <div className="row">
                    <div className="col-md-2 col-sm-4 d-flex align-items-center justify-content-center flex-column">
                      <div className={styles.featureContent}>
                        <Image src={iconImage} />
                      </div>
                      <h4 className={styles.featureTitle}>Grant Programs</h4>
                      <h6 className={styles.featureLink}>More</h6>
                    </div>
                    <div className="col-md-2 col-sm-4  d-flex align-items-center justify-content-center flex-column">
                      <div className={styles.featureContent}>
                        <Image src={iconImage} />
                      </div>
                      <h4 className={styles.featureTitle}>Youth Football                  </h4>
                      <h6 className={styles.featureLink}>More</h6>
                    </div>
                    <div className="col-md-2 col-sm-4  d-flex align-items-center justify-content-center flex-column">
                      <div className={styles.featureContent}>
                        <Image src={iconImage} />
                      </div>
                      <h4 className={styles.featureTitle}>Community</h4>
                      <h6 className={styles.featureLink}>More</h6>
                    </div>
                    <div className="col-md-2 col-sm-4  d-flex align-items-center justify-content-center flex-column">
                      <div className={styles.featureContent}>
                        <Image src={iconImage} />
                      </div>
                      <h4 className={styles.featureTitle}>Health & Safety                  </h4>
                      <h6 className={styles.featureLink}>More</h6>
                    </div>
                    <div className="col-md-2 col-sm-4  d-flex align-items-center justify-content-center flex-column">
                      <div className={styles.featureContent}>
                        <Image src={iconImage} />
                      </div>
                      <h4 className={styles.featureTitle}>Character<br />Education</h4>
                      <h6 className={styles.featureLink}>More</h6>
                    </div>
                  </div>
                </div>
              }
              {windowWidth > 1300 &&
                <div className="col-md-1 p-0">
                </div>
              }
            </div>
          </div>
        </div>
      </div>

      <div className={`row h-100 ${styles.secondSection}`}>
        <div className="col-md-4 p-0">
        </div>
        <div className="col-md-8 p-0">
        </div>
      </div>

      <div className={`row h-100 ${styles.thirdSection}`}>
        <div className={`col-md-4 p-0 ${styles.RedSection}`}>
          <div className={styles.transformDivh1}>
            <h1>
              Grant <br />Programs
            </h1>
          </div>
          <div className={styles.controller}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <button onClick={() => firstSlider?.current?.slickNext()} className={styles.controllBtn}>
                <FaChevronLeft style={{ color: '#5eb1e8', fontSize: "20px" }} />
              </button>
              <button onClick={() => firstSlider?.current?.slickPrev()} className={styles.controllBtn}>
                <FaChevronRight style={{ color: '#5eb1e8', fontSize: "20px" }} />
              </button>
            </div>
            <h4>VIEW ALL</h4>
          </div>
        </div>

        <div className={`col-sm-12 ${styles.RedSectionResponsive}`}>
          <h1>
            Grant <br />Programs
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', paddingBottom: "10px" }}>
            <button onClick={() => firstSlider?.current?.slickNext()} className={styles.controllBtn}>
              <FaChevronLeft style={{ color: '#5eb1e8', fontSize: "20px" }} />
            </button>
            <button onClick={() => firstSlider?.current?.slickPrev()} className={styles.controllBtn}>
              <FaChevronRight style={{ color: '#5eb1e8', fontSize: "20px" }} />
            </button>
          </div>
        </div>

        <div className="col-md-8 p-0" style={{ overflow: 'hidden' }}>
          <Slider {...settings} ref={firstSlider}>
            <div className={`${styles.courouselItem}`}>
              <Image src={sliderImage} className={styles.SliderImageTop} />
              <h2>Player Matching Grants</h2>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <TbGridDots style={{ color: '#bcc4c9', fontSize: "25px", marginRight: '7px' }} />
                <p className="p-0 m-0">Youth Football</p>
                <p className="p-0 m-0" style={{ borderLeft: '2px solid #bcc4c9', marginLeft: "7px !important", paddingLeft: "7px !important" }}>Matching Grants</p>
              </div>
              <p>NFL Foundation Player Matching Grants are designed to provide nonprofit organizations or schools and youth football organizations with funding of up to $5,000 per grant, on behalf of a current NFL Player or NFL Legend (i.e., former player) that has contributed to the organization.</p>
              <h3>Find out more</h3>
            </div>
            <div className={`${styles.courouselItem}`}>
              <Image src={sliderImage} className={styles.SliderImageTop} />

              <h2>Player Matching Grants</h2>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <TbGridDots style={{ color: '#bcc4c9', fontSize: "25px", marginRight: '7px' }} />
                <p className="p-0 m-0">Youth Football</p>
              </div>
              <p>NFL Foundation Player Matching Grants are designed to provide nonprofit organizations or schools and youth football organizations with funding of up to $5,000 per grant, on behalf of a current NFL Player or NFL Legend (i.e., former player) that has contributed to the organization.</p>
              <h3>Find out more</h3>
            </div>
            <div className={`${styles.courouselItem}`}>
              <Image src={sliderImage} className={styles.SliderImageTop} />
              <h2>Player Matching Grants</h2>
              <p>NFL Foundation Player Matching Grants are designed to provide nonprofit organizations or schools and youth football organizations with funding of up to $5,000 per grant, on behalf of a current NFL Player or NFL Legend (i.e., former player) that has contributed to the organization.</p>
              <h3>Find out more</h3>
            </div>
          </Slider>
        </div>
      </div>

      <div className={`row ${styles.thirdSection} py-0`}>
        {windowWidth > 1300 &&
          <div className={`col-md-2 p-0`}>

          </div>
        }
        <div className={`${windowWidth > 1300 ? "col-md-10" : "col-md-12"}  ${styles.programDertailcubes}`}>
          <div className="row">
            <div className="col-md-3 d-flex align-items-center justify-content-center text-center flex-column">
              <div className={styles.ProgramDetail}>
                <Image src={nflMen} />
              </div>
              <h3>2.6 Million Impacted</h3>
            </div>
            <div className="col-md-3 d-flex align-items-center justify-content-center text-center flex-column">
              <div className={styles.ProgramDetail}>
                <Image src={nflMen} />
              </div>
              <h3>2.6 Million Impacted</h3>
            </div>
            <div className="col-md-3 d-flex align-items-center justify-content-center text-center flex-column">
              <div className={styles.ProgramDetail}>
                <Image src={nflMen} />
              </div>
              <h3>2.6 Million Impacted</h3>
            </div>
            <div className="col-md-3 d-flex align-items-center justify-content-center text-center flex-column">
              <div className={styles.ProgramDetail}>
                <Image src={nflMen} />
              </div>
              <h3>2.6 Million Impacted</h3>
            </div>
          </div>
        </div>
      </div>

      <div className={`row ${styles.thirdSection}`}>
        {windowWidth > 1300 &&
          <div className={`col-md-2 p-0`}>
          </div>
        }
        <div className={`${windowWidth > 1300 ? "col-md-10" : "col-md-12"} d-flex justify-content-center position-relative ${styles.secondSlider}`} >
          {windowWidth > 1300 &&
            <h1>News</h1>
          }
          <div className={`pt-5 ${styles.secondSliderIndicatior}`}>
            <button onClick={() => secondSliderRef?.current?.slickNext()} className={styles.controllBtn2}>
              <FaChevronLeft style={{ color: '#5eb1e8', fontSize: "20px" }} />
            </button>
          </div>
          <h1 className={styles.ResponsiveHeading}>News</h1>

          <Slider {...settings2} ref={secondSliderRef}>
            <div className="px-4 col-md-10">
              <div className="d-flex align-items-center">
                <div className={styles.DateSlade}>
                  <h6>Jan 23</h6>
                </div>
                <div className={styles.DateSlade}>
                  <h6>2023</h6>
                </div>
              </div>
              <h2>
                NFL FOUNDATION-LISC GRASSROOTS FIELD<br /> GRANT PROGRAM AWARDS $3 MILLION FOR NEW<br /> AND REFURBISHED COMMUNITY FOOTBALL<br /> FIELDS
              </h2>
              <h5 className={styles.secondSliderPara}>
                NFL FOUNDATION/LISC GRASSROOTS FIELD GRANT PROGRAM AWARDS $3<br /> MILLION FOR NEW AND  REFURBISHED COMMUNITY FOOTBALL FIELDS IN 16 CITIES AND<br /> TOWNS NATIONWIDE
              </h5>
            </div>
          </Slider>

          <view className={styles.secondSliderIndicatiorResponsive}>
            <button onClick={() => secondSliderRef?.current?.slickNext()} className={styles.controllBtn2}>
              <FaChevronLeft style={{ color: '#5eb1e8', fontSize: "20px" }} />
            </button>
            <button onClick={() => secondSliderRef?.current?.slickPrev()} className={styles.controllBtn2}>
              <FaChevronRight style={{ color: '#5eb1e8', fontSize: "20px" }} />
            </button>
          </view>
          <div className={`pt-5 ${styles.secondSliderIndicatior}`}>
            <div className="d-flex align-items-center">
              <button onClick={() => secondSliderRef?.current?.slickPrev()} className={styles.controllBtn2}>
                <FaChevronRight style={{ color: '#5eb1e8', fontSize: "20px" }} />
              </button>
              {windowWidth > 1300 &&
                <h5 style={{ fontFamily: 'Endzone Sans Bold', color: '#5eb1e8' }}>View All</h5>
              }
            </div>
          </div>




        </div>
      </div>

      <div className={`row ${styles.coummunitySection}`}>
        {windowWidth > 1300 &&
          <div className={`col-md-2 p-0`}>

          </div>
        }
        <div className={`${windowWidth > 1300 ? "col-md-10" : "col-md-12"} pl-0 pr-0 `}>
          <div className="row">
            <div className={`${windowWidth > 1200 ? "col-md-5" : "col-md-12"}`}>
              <div className={styles.coummunitySecond}>
                <h2>Community</h2>
                <p>Whether it's promoting new youth and high school<br />
                  football safety standards, encouraging active,<br />
                  health living, supporting players' philanthropic<br />
                  efforts, or promoting character education training<br />
                  and programming for young athletes and students<br />
                  alike, the NFL Foundation's impact extends well<br />
                  beyond the game</p>
                <br />

                <p>To learn more about how each club is making a<br /> difference in its community - on and off the field -<br /> visit their sites by clicking on the logos or visit the<br /> NFL’s community page</p>

                <p>View our 2023 Social Responsibility Annual Report</p>
              </div>
            </div>


            <div className={`${windowWidth > 1200 ? "col-md-7" : "col-md-12"}`}>
              <div style={{ paddingBlock: '30px' }}></div>
              <div style={{ display: 'flex', alignItems: 'flex-start', paddingBottom: '20px', paddingRight: '100px', borderBottom: '1px solid #EEEEEE' }} className={styles.mobileFlex}>
                <div>
                  <Image src={NflA} />
                </div>
                <div className="row" >
                  <div className="col-md-2 col-2">
                    <Image src={nflBrand1} className={styles.BrandImage} />
                  </div>
                  <div className="col-md-2  col-2">
                    <Image src={nflBrand1} className={styles.BrandImage} />
                  </div>
                  <div className="col-md-2  col-2">
                    <Image src={nflBrand1} className={styles.BrandImage} />
                  </div>
                  <div className="col-md-2  col-2">
                    <Image src={nflBrand1} className={styles.BrandImage} />
                  </div>
                  <div className="col-md-2  col-2">
                    <Image src={nflBrand1} className={styles.BrandImage} />
                  </div>
                  <div className="col-md-2  col-2">
                    <Image src={nflBrand1} className={styles.BrandImage} />
                  </div>
                  <div className="col-md-2  col-2">
                    <Image src={nflBrand1} className={styles.BrandImage} />
                  </div>
                  <div className="col-md-2  col-2">
                    <Image src={nflBrand1} className={styles.BrandImage} />
                  </div>
                  <div className="col-md-2 col-2">
                    <Image src={nflBrand1} className={styles.BrandImage} />
                  </div>
                  <div className="col-md-2 col-2">
                    <Image src={nflBrand1} className={styles.BrandImage} />
                  </div>
                  <div className="col-md-2 col-2">
                    <Image src={nflBrand1} className={styles.BrandImage} />
                  </div>
                  <div className="col-md-2 col-2">
                    <Image src={nflBrand1} className={styles.BrandImage} />
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', paddingTop: '30px', paddingRight: '100px' }} className={styles.mobileFlexCenter}>
                <div>
                  <Image src={NflN} />
                </div>
                <div className="row">
                  <div className="col-md-2 col-2">
                    <Image src={nflBrand1} className={styles.BrandImage} />
                  </div>
                  <div className="col-md-2 col-2">
                    <Image src={nflBrand1} className={styles.BrandImage} />
                  </div>
                  <div className="col-md-2 col-2">
                    <Image src={nflBrand1} className={styles.BrandImage} />
                  </div>
                  <div className="col-md-2 col-2">
                    <Image src={nflBrand1} className={styles.BrandImage} />
                  </div>
                  <div className="col-md-2 col-2">
                    <Image src={nflBrand1} className={styles.BrandImage} />
                  </div>
                  <div className="col-md-2 col-2">
                    <Image src={nflBrand1} className={styles.BrandImage} />
                  </div>
                  <div className="col-md-2 col-2">
                    <Image src={nflBrand1} className={styles.BrandImage} />
                  </div>
                  <div className="col-md-2 col-2">
                    <Image src={nflBrand1} className={styles.BrandImage} />
                  </div>
                  <div className="col-md-2 col-2">
                    <Image src={nflBrand1} className={styles.BrandImage} />
                  </div>
                  <div className="col-md-2 col-2">
                    <Image src={nflBrand1} className={styles.BrandImage} />
                  </div>
                  <div className="col-md-2 col-2">
                    <Image src={nflBrand1} className={styles.BrandImage} />
                  </div>
                  <div className="col-md-2 col-2">
                    <Image src={nflBrand1} className={styles.BrandImage} />
                  </div>
                </div>
              </div>
              <div style={{ paddingBlock: '100px' }}></div>
            </div>
          </div>
        </div>
      </div>

      <div className={`row ${styles.footerSection}`}>
        <div className={`col-md-2 p-0`} style={{ background: 'white' }}>

        </div>

        <div className={`col-md-10 pl-0 pr-0 position-relative`}>
          <div className="row">
            {windowWidth > 1200 &&
              <div className={`${styles.footerLogo}`}>
                <Image src={FooterLogo} className={styles.footerLogoImage} />
              </div>
            }

            {windowWidth > 1200 &&
              <div className={`col-md-4`}>
              </div>
            }
            <div className={`${windowWidth > 1200 ? 'col-md-8' : 'col-md-12'} ${styles.footerDescription}`}>
              <div className="row h-100">
                <div className="col-md-9 d-flex align-items-center flex-column justify-content-center" >
                  <p>
                    © 2024 National Football League Foundation. NFL and the NFL shield design <br />
                    are registered trademarks of the National Football League. The team names, <br />
                    logos and uniform designs are registered trademarks of the teams indicated. <br />
                    All other NFL-related trademarks are trademarks of the National Football <br />
                    League. NFL footage © NFL Productions LLC.
                  </p>
                  <p>To view the NFL Foundation website privacy policy, please click here. Website<br /> terms and conditions are available here. Update Cookie Settings.</p>
                </div>
                <div className="col-md-3 d-flex flex-column justify-content-center">
                  <h6>
                    <strong>For more information<br />about the NFL please<br />visit these links:</strong>
                  </h6>
                  <div style={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
                    <a href="#" className={styles.footerLink}><strong>NFL.com</strong></a>
                    <a href="#" className={styles.footerLink}><strong>NFL.com/auction</strong></a>
                    <a href="#" className={styles.footerLink}><strong>Community.nfl.com</strong></a>
                    <a href="#" className={styles.footerLink}><strong>PlaySmartPlaySafe.com</strong></a>
                    <a href="#" className={styles.footerLink}><strong>NFLPlayercare.com</strong></a>
                    <a href="#" className={styles.footerLink}><strong>Operations.nfl.com</strong></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
