import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Header = () => {
  return (
    <header className="w-[80%] max-w-5xl border-2 border-crust bg-surface-0 rounded-xl p-4 mx-auto my-8 drop-shadow-solid-crust relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-4 gradient-to-r-custom rounded-t-lg border-b-2 border-crust shadow-md" />
      <div className="relative flex items-center justify-between px-8 py-6">
        <h1 className="text-2xl md:text-3xl font-bold gradient-to-r-custom text-transparent bg-clip-text drop-shadow-solid-crust">
          Jeppuu&apos;s Project Hub 💫
        </h1>
        <Avatar className="ring-2 ring-lavender drop-shadow-solid-crust scale-110">
          <AvatarImage src="https://github.com/Jeppuu.png" alt="Jeppuu" />
          <AvatarFallback className="font-bold text-lg bg-peach/30 text-sapphire">
            J
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};

export default Header;
