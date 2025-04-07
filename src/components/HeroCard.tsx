interface HeroCardProps {
    title: string;
    paragraph: string;
    card2?: boolean;
    src?: string;
  }
  
  const HeroCard: React.FC<HeroCardProps> = ({ title, paragraph, src, card2 }) => {
    return (
      <div className={`bg-white shadow-lg ${card2 ? 'hover:bg-yellow-500' : 'hover:bg-green-600'} w-full sm:w-11/12 md:w-[600px] h-52 rounded-xl group transition-colors duration-300`}>
        <div className={`h-2 ${card2 ? 'bg-yellow-500' : 'bg-green-600'} rounded-t-xl`}></div>
        <div className="flex p-7 items-center justify-between">
          <div className="w-1/3">
            <img 
              className="group-hover:invert w-full h-full object-contain"
              src={src} 
              alt="Image" 
            />
          </div>
          <div className="w-2/3">
            <h1 className={`${card2 ? 'text-yellow-500' : 'text-green-600'} text-2xl group-hover:text-white font-semibold mb-3`}>
              {title}
            </h1>
            <p className="text-gray-400 group-hover:text-white">
              {paragraph}
            </p>
          </div>
        </div>
      </div>
    )
  }
  
  export default HeroCard
  