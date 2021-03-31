import images from "../Themes/Images";
import BaseTransform from "./BaseTransform";

export default class UserProfileTransform extends BaseTransform {
  fields = {
    id: 0,
    title: "",
    avatar: null,
  };
  constructor(params = {}) {
    super(params);
    this.appendFields(params);
    this.avatarSource = this.avatar ? { uri: this.avatar } : images.placeholder;
  }
}
