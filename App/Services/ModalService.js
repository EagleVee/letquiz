import { Modal } from "@ant-design/react-native";

export default class ModalService {
  static showOptionModal(
    title = "Xác nhận",
    content = "",
    okCallBack = () => {},
    cancelCallback = () => {},
  ) {
    Modal.alert(
      title,
      content,
      [
        {
          text: "Hủy",
          onPress: cancelCallback,
          style: "cancel",
        },
        { text: "OK", onPress: okCallBack },
      ],
      false,
    );
  }

  static showAlertModal(title, content, callback = () => {}) {
    Modal.alert(title, content, [{ text: "OK", onPress: callback }], false);
  }

  static showUnapprovedModal(callback = () => {}) {
    Modal.alert(
      "Lỗi",
      "Bạn cần được chứng thực để có thể thực hiện hành động này",
      [{ text: "OK", onPress: callback }],
    );
  }

  static showUnauthenticatedModal(
    okCallback = () => {},
    cancelCallback = () => {},
  ) {
    Modal.alert("Thông báo!", "Bạn cần đăng nhập để tiếp tục", [
      { text: "Hủy", onPress: cancelCallback, style: "cancel" },
      { text: "Đăng nhập", onPress: okCallback },
    ]);
  }

  static showErrorModal(message, callback = () => {}) {
    const displayMessage = message
      ? message
      : "Đã có lỗi xảy ra, vui lòng thử lại!";
    Modal.alert(
      "Lỗi",
      displayMessage,
      [{ text: "OK", onPress: callback }],
      false,
    );
  }

  static showSuccessModal(message, callback = () => {}) {
    const displayMessage = message
      ? message
      : "Bạn đã thực hiện hành động thành công!";
    Modal.alert(
      "Thành công",
      displayMessage,
      [{ text: "OK", onPress: callback }],
      false,
    );
  }

  static showNotificationModal(message, callback = () => {}) {
    const displayMessage = message
      ? message
      : "Bạn đã thực hiện hành động thành công!";
    Modal.alert(
      "Thông báo",
      displayMessage,
      [{ text: "OK", onPress: callback }],
      false,
    );
  }

  static showAPIFailedModal(response, callback = () => {}) {
    const displayMessage =
      response && response.message
        ? response.message
        : "Đã có lỗi xảy ra, vui lòng thử lại!";
    Modal.alert(
      "Lỗi",
      displayMessage,
      [{ text: "OK", onPress: callback }],
      false,
    );
  }
}
