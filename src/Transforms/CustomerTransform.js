import BaseTransform from "./BaseTransform";
import { Images } from "../Themes";

export default class CustomerTransform extends BaseTransform {
  fields = {
    id: 0,
    email: "dreamow@gmail.com",
    username: "Duy",
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
