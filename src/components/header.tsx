import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Header = () => {
  return (
    <header className="w-[80%] border-4 border-yellow rounded-xl p-4 mx-auto my-8 shadow shadow-rosewater/30">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-rosewater via-sapphire to-peach text-transparent bg-clip-text">
          Jeppuu&apos;s Project Hub
        </h1>
        <Avatar className="ring-2 ring-peach/80 ">
          <AvatarImage src="https://github.com/Jeppuu.png" alt="Jeppuu" />
          <AvatarFallback>J</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};

export default Header;
