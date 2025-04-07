import GalleryItem from "../components/GalleryItem"
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa"
import GalleryImageOne from "../assets/gallery-image-one.svg"
import GalleryImageTwo from "../assets/gallery-image-two.svg"
import GalleryImageThree from "../assets/gallery-image-three.svg"
import GalleryImageFour from "../assets/gallery-image-four.svg"
import GalleryImageFive from "../assets/gallery-image-five.svg"
import GalleryImageSix from "../assets/gallery-image-six.svg"
import GalleryImageSeven from "../assets/gallery-image-seven.svg"
import GalleryImageEight from "../assets/gallery-image-eight.svg"
import GalleryImageNine from "../assets/gallery-image-nine.svg"
import GalleryImageTen from "../assets/gallery-image-ten.svg"
import GalleryImageEleven from "../assets/gallery-image-eleven.svg"
import GalleryImageThirteen from "../assets/gallery-image-thirteen.svg"
import GalleryImageFourteen from "../assets/gallery-image-forteen.svg"
import GalleryImageSixteen from "../assets/gallery-image-sixteen.svg"
import GalleryImageSeventeen from "../assets/gallery-image-seventeen.svg"
import GalleryImageEighteen from "../assets/gallery-image-eighteen.svg"
import GalleryImageNineteen from "../assets/gallery-image-nineteen.svg"
import GalleryBanner from "../assets/gallery-banner.webp"

export default function Gallery() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative">
        <div
          className="h-60 sm:h-80 lg:h-96 bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${GalleryBanner})`,
          }}
        >
          <h1 className="text-white text-4xl sm:text-6xl lg:text-7xl font-bold text-center px-4">
            Gallery
          </h1>
        </div>
      </div>

      {/* Introduction */}
      <div className="container mx-auto px-4 py-8">
        <p className="text-center text-base sm:text-lg mb-12">
          Welcome to our gallery, where every image tells a story. Explore our curated collection showcasing the beauty,
          innovation, and craftsmanship behind our products. From stunning visuals to captivating moments captured in
          time, immerse yourself in the world of our brand and experience the essence of what we have to offer. Discover
          inspiration, quality, and passion in every click.
        </p>

        {/* Gallery Items */}
        <div className="space-y-12">
          <GalleryItem
            images={[
              { src: GalleryImageOne, alt: "PM Modi at AI Summit" },
              { src: GalleryImageTwo, alt: "PM Modi at AI Summit Video Conference" },
            ]}
            caption={
              <div>
                <h3 className="font-bold text-lg sm:text-xl mb-1">
                  Global Partnership Artificial Intelligence Summit, New Delhi, 12 to 14 Dec 2023
                </h3>
                <p className="text-sm sm:text-base">
                  In conversation with our Honourable Prime Minister of India, Shri Narendra Modi
                </p>
              </div>
            }
          />

          <GalleryItem
            images={[
              { src: GalleryImageThree, alt: "Republic Day Tableau" },
              { src: GalleryImageFour, alt: "Republic Day Tableau Close-up" },
            ]}
            caption={
              <div>
                <h3 className="font-bold text-lg sm:text-xl mb-1">
                  On Tableau of 75th Republic Day - Kartavya Path, New Delhi, 26 Jan 24
                </h3>
              </div>
            }
          />

          <GalleryItem
            images={[{ src: GalleryImageFive, alt: "G20 Summit Meeting" }]}
            caption={
              <div>
                <h3 className="font-bold text-lg sm:text-xl mb-1">G20 Summit, Bengaluru, 17 Aug 2023</h3>
                <p className="text-sm sm:text-base">
                  Rajeev Chandrasekhar, Minister of State for Electronics and
                  <br />
                  Information Technology of India
                </p>
              </div>
            }
          />

          <GalleryItem
            images={[
              { src: GalleryImageSix, alt: "BELDP Event" },
              { src: GalleryImageSeven, alt: "BELDP Team" },
            ]}
            caption={
              <div>
                <div className="flex flex-wrap justify-center items-center space-x-4 mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm">Follow us on:</span>
                    <a href="#" className="text-blue-700">
                      <FaLinkedin />
                    </a>
                    <a href="#" className="text-pink-600">
                      <FaInstagram />
                    </a>
                    <a href="#" className="text-blue-600">
                      <FaFacebook />
                    </a>
                    <a href="#" className="text-blue-400">
                      <FaTwitter />
                    </a>
                  </div>
                  <a href="https://www.meitystartuphub.in/g20-dia/" className="text-red-600 hover:underline text-sm">
                    www.meitystartuphub.in/g20-dia/
                  </a>
                </div>
                <h3 className="font-bold text-lg sm:text-xl">BELDP, Pune, 21 Aug 2023</h3>
              </div>
            }
          />

          <GalleryItem
            images={[
              { src: GalleryImageEight, alt: "Krishik Exhibition Handshake" },
              { src: GalleryImageNine, alt: "Krishik Exhibition Group Photo" },
            ]}
            caption={
              <div>
                <h3 className="font-bold text-lg sm:text-xl">
                  Krishik exhibition, Baramati, Jan 2023 with Honourable Deputy Chief Minister of Maharashtra, Mr. Ajit
                  Pawar & Honourable MLA, Mr. Rohit Pawar
                </h3>
              </div>
            }
          />

          <GalleryItem
            images={[
              { src: GalleryImageTen, alt: "Centre of Excellence Booth" },
              { src: GalleryImageEleven, alt: "Centre of Excellence Demonstration" },
            ]}
            caption={
              <div>
                <h3 className="font-bold text-lg sm:text-xl">
                  Centre of excellence inauguration, ADT Baramati, 11 March 2023 with Honourable Minister of Road
                  Transport & Highways of India, Mr. Nitin Gadkari
                </h3>
              </div>
            }
          />

          <GalleryItem
            images={[
              { src: GalleryImageThirteen, alt: "Meeting with Sharad Pawar" },
              { src: GalleryImageFourteen, alt: "Demonstration to Sharad Pawar" },
            ]}
            caption={
              <div>
                <h3 className="font-bold text-lg sm:text-xl">
                  Meeting with Mr. Sharad Pawar,
                  <br />
                  Honourable member of Parliament, Rajya Sabha
                  <br />
                  Science and Technology Park, Pune, 23 Jan 2023
                </h3>
              </div>
            }
          />

          <GalleryItem
            images={[{ src: GalleryImageSixteen, alt: "Meeting with Sharad Pawar at ADT" }]}
            caption={
              <div>
                <h3 className="font-bold text-lg sm:text-xl">
                  Meeting with Mr. Sharad Pawar at ADT Baramati Meeting, 28 Feb 2023
                </h3>
              </div>
            }
          />

          <GalleryItem
            images={[{ src: GalleryImageSeventeen, alt: "AABI Torch Award Event" }]}
            caption={
              <div>
                <h3 className="font-bold text-lg sm:text-xl">AABI Torch Award - Thailand, 31 October 2023</h3>
              </div>
            }
          />

          <GalleryItem
            images={[
              { src: GalleryImageEighteen, alt: "AABI Torch Award Ceremony" },
              { src: GalleryImageNineteen, alt: "AABI Torch Award Recipients" },
            ]}
            caption={
              <div>
                <h3 className="font-bold text-lg sm:text-xl">
                  AABI Torch Award Ceremony, Thailand, 31 October 2023
                </h3>
              </div>
            }
          />
        </div>
      </div>
    </div>
  )
}
