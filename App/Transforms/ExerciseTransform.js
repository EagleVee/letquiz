import BaseTransform from "./BaseTransform";
import { Images } from "../Themes";

export default class ExerciseTransform extends BaseTransform {
  fields = {
    id: 0,
    exercise_title: "",
    exercise_duration: 0,
    exercise_unit: "reps",
    is_completed: false,
    rest_time: 0,
    post: {
      cover_image_s3_url_large: "",
      cover_video_s3_url_large: "",
    },
  };

  videoSource = null;
  thumbnailSource = Images.noImage;

  constructor(params) {
    super(params);
    this.appendFields(params);
    this.videoSource = this.post?.cover_video_s3_url_large
      ? { uri: this.post?.cover_video_s3_url_large }
      : this.videoSource;
    this.thumbnailSource = this.post?.cover_image_s3_url_large
      ? { uri: this.post?.cover_image_s3_url_large }
      : this.thumbnailSource;
  }
}
