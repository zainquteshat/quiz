import MenuBookIcon from "@material-ui/icons/MenuBook";
import PoolIcon from "@material-ui/icons/Pool";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import BrushIcon from "@material-ui/icons/Brush";
import VideocamIcon from "@material-ui/icons/Videocam";
import HourglassEmptyIcon from "@material-ui/icons/HourglassEmpty";

import Category from "../../components/Category/Category";
import classes from "./Categories.module.scss";

const Categories = () => {
  return (
    // TODO: map through the categories array
    <div className={classes.Categories}>
      <Category
        title="General Knowledge"
        category_id="9"
        icon={<MenuBookIcon className={classes.Icon} />}
      />
      <Category
        title="Sports"
        category_id="21"
        icon={<PoolIcon className={classes.Icon} />}
      />
      <Category
        title="Celebrities"
        category_id="26"
        icon={<CameraAltIcon className={classes.Icon} />}
      />
      <Category
        title="Art"
        category_id="25"
        icon={<BrushIcon className={classes.Icon} />}
      />
      <Category
        title="Film"
        category_id="10"
        icon={<VideocamIcon className={classes.Icon} />}
      />
      <Category
        title="History"
        category_id="23"
        icon={<HourglassEmptyIcon className={classes.Icon} />}
      />
    </div>
  );
};
export default Categories;
