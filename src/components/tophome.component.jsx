import Particles from "./Particles.component";

const TopHome = () => {
  return (
    <div className="relative overflow-hidden pt-10 bg-gradient-to-b from-[#1b193a] to-[#3b108c]  ">
      <Particles />
      <div className="text-7xl text-white font-extrabold py-40 px-20 space-y-4 max-w-7xl mx-auto">
        <div>EMPOWERING</div>
        <div>ENTREPRENEURS</div>
        <div className="space-y-4 text-transparent bg-clip-text bg-gradient-to-r from-[#6551f3] to-[#21dad7] z-10 relative">
          <div>TO ACHIEVE</div>
          <div>SUCCESS IN WEB3</div>
        </div>
      </div>
    </div>
  );
};

export default TopHome;

// initial gradient end
// from-[#1b193a] to-[#3b108c]

// text gradient
// from-[#6551f3] to-[#21dad7]
