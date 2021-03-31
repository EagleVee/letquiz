import BaseTransform from "./BaseTransform";
import { Images } from "../Themes";
import TransformHelper from "../Utils/TransformHelper";
import { ACHIEVEMENT_TYPE_ACHIEVEMENT } from "../Config/Trainer";

export default class TrainerTransform extends BaseTransform {
  fields = {
    id: 0,
    fullname: "",
    description: "",
    display_name: "",
    avatar: "",
    avatar_s3_url_middle: "",
    subscriber_count: 0,
    facebook_avatar_url: "",
    introduction_post: {
      post_content: "",
      trailer_video_s3_url: "",
      thumbnail_image_s3_url_large: "",
      post_categories: [],
      cover_video_s3_url: "",
      cover_image_s3_url_large: "",
    },
    achievements: [],
    facebook_url: null,
    instagram_url: null,
    youtube_url: null,
    tiktok_url: null,
    website: null,
  };

  banners = [];
  field = "calisthenics";
  fieldIcon = null;
  fieldTitle = "";
  validCategories = [];
  avatarSource = Images.placeholder;
  thumbnailSource = Images.noImage;
  videoSource = null;
  avatarURL = "";
  transformedAchievements = [];
  socialConnections = {};

  constructor(params = {}) {
    super(params);
    this.appendFields(params);
    this.avatarURL =
      this.avatar_s3_url_middle?.length > 0
        ? this.avatar_s3_url_middle
        : this.facebook_avatar_url?.length > 0
        ? this.facebook_avatar_url
        : this.avatarURL;
    this.avatarSource =
      this.avatarURL && this.avatarURL.length > 0
        ? { uri: this.avatarURL }
        : this.avatarSource;
    this.description = this.introduction_post.post_content || "";
    this.thumbnailSource =
      this.introduction_post?.thumbnail_image_s3_url_large?.length > 0
        ? { uri: this.introduction_post.thumbnail_image_s3_url_large }
        : this.thumbnailSource;
    this.videoSource =
      this.introduction_post?.trailer_video_s3_url?.length > 0
        ? { uri: this.introduction_post.trailer_video_s3_url }
        : this.videoSource;
    this.validCategories = this.introduction_post?.post_categories
      ? this.introduction_post.post_categories.map(e => {
          if (
            e.active_status === true &&
            e.category &&
            e.category.active_status === true
          ) {
            return e.category;
          }
        })
      : this.validCategories;
    this.transformedCategories = TransformHelper.transformData(
      this.validCategories,
      CategoryTransform,
    );
    this.transformedAchievements = TransformHelper.transformData(
      this.achievements,
      AchievementTransform,
      true,
    ).filter(e => e.active_status === true);
    this.socialConnections = this.getSocialConnections();
    this.banners = this.getBanners();
  }

  getSocialConnections() {
    let result = {};
    if (this.facebook_url) {
      result.facebook = this.facebook_url;
    }
    if (this.instagram_url) {
      result.instagram = this.facebook_url;
    }
    if (this.youtube_url) {
      result.youtube = this.youtube_url;
    }
    if (this.tiktok_url) {
      result.tiktok = this.tiktok_url;
    }
    // if (this.website) {
    //   result.website = this.website;
    // }

    return result;
  }

  getBanners() {
    const results = [];
    if (this.introduction_post) {
      const {
        trailer_video_s3_url,
        thumbnail_image_s3_url_large,
        cover_video_s3_url,
        cover_image_s3_url_large,
      } = this.introduction_post;

      if (trailer_video_s3_url?.length > 0) {
        results.push({
          type: "video",
          source: { uri: trailer_video_s3_url },
          thumbnailSource:
            thumbnail_image_s3_url_large?.length > 0
              ? { uri: thumbnail_image_s3_url_large }
              : null,
        });
      }

      if (cover_video_s3_url?.length > 0) {
        results.push({
          type: "video",
          source: { uri: trailer_video_s3_url },
          thumbnailSource: null,
        });
      }

      if (cover_image_s3_url_large?.length > 0) {
        results.push({
          type: "image",
          source: { uri: cover_image_s3_url_large },
        });
      }
    }
    return results;
  }
}

class CategoryTransform extends BaseTransform {
  fields = {
    id: 2,
    category_title: "Boxing",
    category_key: "boxing",
    category_icon: "",
    order_position: 1,
    extra_data: null,
    active_status: true,
  };

  constructor(params = {}) {
    super(params);
    this.appendFields(params);
  }
}

class AchievementTransform extends BaseTransform {
  fields = {
    achievement_description: "",
    achievement_title: "",
    achievement_type: ACHIEVEMENT_TYPE_ACHIEVEMENT,
    active_status: false,
    id: 0,
    trainer_id: 0,
  };

  constructor(params = {}) {
    super(params);
    this.appendFields(params);
  }
}
