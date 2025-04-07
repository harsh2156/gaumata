import { useEffect, useRef, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const VISIBLE_CARDS = 4;

const Carousel = () => {
    const originalCards = [
        { id: 1, title: "Card 1", desc: "Areete's management tools automating processes such as heat detection, milking, and treatment, leading to increased efficiency and minimized manual labor requirements." },
        { id: 2, title: "Card 2", desc: "Areete's management tools automating processes such as heat detection, milking, and treatment, leading to increased efficiency and minimized manual labor requirements." },
        { id: 3, title: "Card 3", desc: "Areete's management tools automating processes such as heat detection, milking, and treatment, leading to increased efficiency and minimized manual labor requirements." },
        { id: 4, title: "Card 4", desc: "Areete's management tools automating processes such as heat detection, milking, and treatment, leading to increased efficiency and minimized manual labor requirements." },
        { id: 5, title: "Card 5", desc: "Areete's management tools automating processes such as heat detection, milking, and treatment, leading to increased efficiency and minimized manual labor requirements." },
        { id: 6, title: "Card 6", desc: "Areete's management tools automating processes such as heat detection, milking, and treatment, leading to increased efficiency and minimized manual labor requirements." },
        { id: 7, title: "Card 7", desc: "Areete's management tools automating processes such as heat detection, milking, and treatment, leading to increased efficiency and minimized manual labor requirements." },
        { id: 8, title: "Card 8", desc: "Areete's management tools automating processes such as heat detection, milking, and treatment, leading to increased efficiency and minimized manual labor requirements." },
    ];

    const groupCount = Math.ceil(originalCards.length / VISIBLE_CARDS);
    const duplicatedCards = [...originalCards, ...originalCards.slice(0, VISIBLE_CARDS)];
    const [currentGroup, setCurrentGroup] = useState(0);
    const [isAnimating, setIsAnimating] = useState(true);
    const intervalRef = useRef<NodeJS.Timer | null>(null);

    const totalGroups = Math.ceil(duplicatedCards.length / VISIBLE_CARDS);

    const startAutoSlide = () => {
        intervalRef.current = setInterval(() => {
            setCurrentGroup((prev) => prev + 1);
        }, 3000);
    };

    const stopAutoSlide = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
    };

    useEffect(() => {
        startAutoSlide();
        return () => stopAutoSlide();
    }, []);

    useEffect(() => {
        if (currentGroup === groupCount) {
            // Fake the reset to first group without animation
            setTimeout(() => {
                setIsAnimating(false);
                setCurrentGroup(0);
            }, 500); // match transition
        } else {
            setIsAnimating(true);
        }
    }, [currentGroup]);

    const nextGroup = () => {
        stopAutoSlide();
        setCurrentGroup((prev) => prev + 1);
        startAutoSlide();
    };

    const prevGroup = () => {
        stopAutoSlide();
        if (currentGroup === 0) {
            setIsAnimating(false);
            setCurrentGroup(groupCount - 1);
            setTimeout(() => {
                setIsAnimating(true);
            }, 0);
        } else {
            setCurrentGroup((prev) => prev - 1);
        }
        startAutoSlide();
    };

    return (
        <div className="w-full max-w-6xl mx-auto relative">
        {/* Buttons will stay visible because this wrapper has no overflow-hidden */}
      
        <div className="overflow-hidden">
          <div
            className={`flex transition-transform duration-500 ease-in-out ${
              !isAnimating ? "transition-none" : ""
            }`}
            style={{
              width: `${(duplicatedCards.length / VISIBLE_CARDS) * 100}%`,
              transform: `translateX(-${(100 / totalGroups) * currentGroup}%)`,
            }}
          >
            {duplicatedCards.map((card, index) => (
              <CarouselCard
                key={index}
                index={index}
                title={card.title}
                desc={card.desc}
              />
            ))}
          </div>
        </div>
      
        {/* Navigation Buttons */}
        <button
          onClick={prevGroup}
          className=" cursor-pointer absolute top-1/2 -translate-y-1/2 -left-14 bg-gray-400 p-1 rounded-full shadow hover:bg-gray-100"
        >
          <HiChevronLeft color="text-gray-300" size={32} />
        </button>
        <button
          onClick={nextGroup}
          className=" cursor-pointer absolute top-1/2 -translate-y-1/2 -right-14 bg-gray-400 p-1 rounded-full shadow hover:bg-gray-100"
        >
          <HiChevronRight color="text-gray-300" size={32} />
        </button>
      </div>
      
    );
};

interface CarouselCardProps {
    index: number;
    title: string;
    desc: string;
}

const CarouselCard: React.FC<CarouselCardProps> = ({index, title, desc }) => {
    return (
        <div className="w-72 h-96 flex-shrink-0 px-2 py-4"> {/* 1/4 = 25% width for 4 cards per view */}
            <div className={`${index % 2 === 0 ? "bg-yellow-500" : "bg-green-500"} rounded-2xl shadow-lg p-6 h-full`}>
                <div className="flex justify-center items-center w-14 h-14 mb-7">
                    <img src="/icon1.svg" alt="icon" width={"100%"} height={"100%"}/>
                </div>
                <h2 className="text-xl font-semibold mb-2">{title}</h2>
                <p className="text-gray-800">{desc}</p>
            </div>
        </div>
    );
};

export default Carousel;
