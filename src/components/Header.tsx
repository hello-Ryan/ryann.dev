export interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <div className="p-9">
      <nav className="flex text-white gap-6 text-lg justify-center">
        <a >about me</a>
        <a>work</a>
        <a>experience</a>
        <a>get in touch</a>
      </nav>
    </div>
  );
};

export default Header;
