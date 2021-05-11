import BaseTransform from "./BaseTransform";
import { Images } from "../Themes";

export default class CustomerTransform extends BaseTransform {
  fields = {
    _id: "",
    email: "",
    username: "",
    avatar: "",
    theme: "dark",
  };

  avatarSource = Images.placeholder;

  constructor(params = {}) {
    super(params);
    this.appendFields(params);
    this.avatarSource =
      this.avatar && this.avatar.length > 0
        ? { uri: this.avatar }
        : this.avatarSource;
  }
}
