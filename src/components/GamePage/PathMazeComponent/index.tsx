import Path from "../PathComponent";


const PathMaze = () => {
  return (
    <div>
      {/* ? dont go to option 3 */}
      <Path className="w-[70px] top-[610px] left-[115px] " />
      {/* ? dont go to option 1 */}
      <Path className="w-[50px] top-[610px] left-[195px]" />
      {/* ? dont go to option 2 */}
      <Path className="w-[50px] top-[610px] left-[250px]" />

      {/* ? go to option 1 */}
      <div>
        <Path className="w-[100px] top-[540px] left-[145px] rotate-90" />
        <Path className="w-[120px] top-[480px] left-[60px]" />
      </div>

      {/* ? go to option 2 */}
      <div>
        <Path className="w-[70px] top-[560px] left-[220px] rotate-90" />
        <Path className="w-[30px] top-[520px] left-[270px]" />
      </div>

      {/* ? go to option 3 */}
      <Path className="w-[50px] top-[640px] left-[85px] rotate-90 " />
      <Path className="w-[60px] top-[680px] left-[40px] " />
      <Path className="w-[50px] top-[720px] left-[10px] rotate-90 " />

      {/* ? got to option 4 */}
      <Path className="w-[115px] top-[675px] left-[250px] rotate-90 " />
      <Path className="w-[20px] top-[740px] left-[320px]" />
    </div>
  );
};

export default PathMaze;
