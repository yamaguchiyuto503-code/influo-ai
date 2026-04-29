export default function Logo() {
  return (
    <div className="flex items-center gap-2.5 group cursor-pointer">
      <img
        src="/logo.svg"
        alt="influo ai"
        className="h-8 w-auto object-contain"
        onError={(e) => {
          e.currentTarget.style.display = 'none';
        }}
      />
      <span className="text-[24px] font-['Outfit'] font-black tracking-tight text-[#2D2D35]">
        influo <span className="text-[#FF5E44]">ai</span>
      </span>
    </div>
  );
}
