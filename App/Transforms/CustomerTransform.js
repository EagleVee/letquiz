import NoImage from "Assets/Images/Background/NoImage.png";
import BaseTransform from "./BaseTransform";

const genderMap = ["Gender.Male", "Gender.Female", "Gender.Other"];

export default class CustomerTransform extends BaseTransform {
  fields = {
    id: 0,
    title: "",
    email: "",
    fullname: "",
    avatar: "",
    dob: "",
    default_theme: "dark",
    default_language: "vi",
    height: null,
    weight: null,
    gender: 0,
    genderI18n: genderMap[0],
  };

  avatarSource = NoImage;

  constructor(params = {}) {
    super(params);
    this.appendFields(params);
    this.genderI18n = genderMap[this.gender]
      ? genderMap[this.gender]
      : this.genderI18n;
    this.avatarSource =
      this.avatar && this.avatar.length > 0
        ? { uri: this.avatar }
        : this.avatarSource;
  }
}
