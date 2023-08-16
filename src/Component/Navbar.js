import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div className="flex justify-between px-10 items-center shadow shadow-slate-300 h-[70px] sticky top-0 bg-white ">
      <div>
        <Link to="/">
          <span>Logo</span>
        </Link>
        <Link to="/menu">
          <span className="ml-3 font-bold">Menu</span>
        </Link>
        <Link to="/cart">
          <span className="ml-3 font-bold">Cart</span>
        </Link>
        <span className="ml-3 font-bold">Gift</span>
      </div>
      <div>
        <Link>
          <span className="mr-3">Find a store</span>
        </Link>
        {props.userName.userName ? (
          <span> {`halo ${props.userName.userName}`} </span>
        ) : (
          <>
            <Link to="/sign">
              <span>
                <button className="bg-white text-black px-3 py-1 rounded-full border border-slate-900 mr-3">
                  Sign in
                </button>
              </span>
            </Link>

            <Link to="/register">
              <span>
                <button className="bg-black text-white px-3 py-1 rounded-full">
                  Join now
                </button>
              </span>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
