import MenuBookIcon from "@material-ui/icons/MenuBook";
import PoolIcon from "@material-ui/icons/Pool";
import PetsIcon from "@material-ui/icons/Pets";
import DirectionsCarIcon from "@material-ui/icons/DirectionsCar";
import VideocamIcon from "@material-ui/icons/Videocam";
import MusicNoteIcon from "@material-ui/icons/MusicNote";

import Category from "../../components/Category/Category";
import classes from "./Categories.module.scss";

const Categories = () => {
  return (
    <div>
      <div className={classes.Categories}>
        <Category title={"General Knowledge"} icon={<MenuBookIcon />} />
        <Category title={"Sports"} icon={<PoolIcon />} />
        <Category title={"Animals"} icon={<PetsIcon />} />
        <Category title={"Vehicles"} icon={<DirectionsCarIcon />} />
        <Category title={"Film"} icon={<VideocamIcon />} />
        <Category title={"Music"} icon={<MusicNoteIcon />} />
      </div>
    </div>
  );
};
export default Categories;
