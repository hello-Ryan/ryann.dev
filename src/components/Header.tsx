export interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <div className="p-9">
      <nav className="flex text-white gap-4 text-lg justify-center">
        <a >aboutMe</a>
        <a>work</a>
        <a>experience</a>
        <a>getInTouch</a>
      </nav>
    </div>
  );
};

export default Header;
