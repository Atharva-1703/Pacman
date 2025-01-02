
import PacHouse from "../pacHouse";
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
        <PacHouse houseClass={'-scale-x-100 top-[470px]'}/>
      </div>

      {/* ? go to option 2 */}
      <div>
        <Path className="w-[70px] top-[560px] left-[220px] rotate-90" />
        <Path className="w-[30px] top-[520px] left-[270px]" />
        <PacHouse houseClass={'top-[479px] right-0'}/>
      </div>

      {/* ? go to option 3 */}
      <div>
      <Path className="w-[50px] top-[640px] left-[85px] rotate-90 " />
      <Path className="w-[60px] top-[680px] left-[40px] " />
      <Path className="w-[50px] top-[720px] left-[10px] rotate-90 " />
      <PacHouse houseClass={'-scale-x-100 top-[750px] left-[-10px'}/>
      </div>

      {/* ? got to option 4 */}
      <div>
      <Path className="w-[115px] top-[675px] left-[250px] rotate-90 " />
      <Path className="w-[20px] top-[740px] left-[320px]" />
        <PacHouse houseClass={'top-[750px] right-0'}/>
      </div>



    </div>
  );
};

export default PathMaze;
