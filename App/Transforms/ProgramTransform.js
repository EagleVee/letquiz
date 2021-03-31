import TrainerTransform from "./TrainerTransform";
import { ProgramLevelsText } from "Config/Program";
import { Images } from "Themes";
import BaseTransform from "./BaseTransform";
import { getValueFromSelector } from "../Utils/type";
import TransformHelper from "../Utils/TransformHelper";

export default class ProgramTransform extends BaseTransform {
  fields = {
    id: 0,
    program_title: "How YOU can do handstand push up",
    program_duration: 12,
    program_duration_unit: "weeks",
    post: {
      thumbnail_image_s3_url_middle: "",
    },
    isLocked: false,
    percentage_progress: 0,
    is_completed: false,
    program_pricing_type: false,
    program_level: 0,
    program_trainer: {},
    equipments: [],
  };

  displayLevel = "";
  thumbnailSource = Images.noImage;
  transformedTrainer = new TrainerTransform();
  isSubscribed = false;
  isPaid = false;

  constructor(params = {}) {
    super(params);
    this.appendFields(params);
    this.displayLevel = getValueFromSelector(
      this.program_level,
      ProgramLevelsText,
    );
    this.thumbnailSource =
      this.post?.thumbnail_image_s3_url_middle?.length > 0
        ? { uri: this.post.thumbnail_image_s3_url_middle }
        : this.thumbnailSource;
    this.program_duration_unit =
      this.program_duration_unit.length > 0
        ? this.program_duration_unit
        : "weeks";
    this.transformedTrainer = TransformHelper.transformData(
      this.program_trainer,
      TrainerTransform,
    );
    this.isPaid = this.program_pricing_type === true;
  }
}
