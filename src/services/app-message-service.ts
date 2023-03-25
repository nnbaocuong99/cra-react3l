import notification from "antd/lib/notification";
import { BehaviorSubject, Observable, Subject } from "rxjs";

notification.config({
  placement: "bottomRight",
});

export enum messageType {
  SUCCESS,
  WARNING,
  ERROR,
}

export interface IMessage {
  title?: string;
  description?: string;
  type?: messageType;
}

export class AppMessageService {
  success$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false); // success subject for app message
  error$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false); // error subject for app message
  message$: Subject<IMessage> = new Subject(); // message subject for app message

  _success: () => Observable<boolean> = () =>
    this.success$ as Observable<boolean>; // expose get success$ Observable
  _error: () => Observable<boolean> = () => this.error$ as Observable<boolean>; // expose get error$ as Observable
  setSuccess: () => void = () => {
    this.success$.next(true);
  };
  setError: () => void = () => {
    this.error$.next(true);
  };

  setMessage: (message: IMessage) => void = (message: IMessage) => {
    this.message$.next(message);
  };

  messageFactory(content: IMessage) {
    const { type, description, title } = content;
    if (type === messageType.SUCCESS) {
      return notification.success({
        message: title,
        description,
      });
    }
    if (type === messageType.WARNING) {
      return notification.warn({
        message: title,
        description,
      });
    }
    if (type === messageType.ERROR) {
      return notification.error({
        message: title,
        description,
      });
    }
  }

  handleNotify(message: IMessage) {
    return (value: boolean) => {
      if (value) {
        this.messageFactory(message);
      }
    };
  }

  useCRUDMessage() {
    const notifyUpdateItemSuccess = (description?: string) => {
      return notification.success({
        message: "Cập nhật thành công",
        description,
      });
    }; // updateSuccess method

    const notifyUpdateItemError = (description?: string) => {
      return notification.error({
        message: "Cập nhật có lỗi",
        description,
      });
    }; // updateSuccess method

    const notifyBadRequest = (description?: string) => {
      return notification.error({
        message: "Lỗi dữ liệu",
        description,
      });
    }; // notifyBadRequest method (400)

    const notifyUnAuthorize = (description?: string) => {
      return notification.error({
        message: "Lỗi phân quyền",
        description,
      });
    }; // notifyUnAuthorize method (401)

    const notifyServerError = (description?: string) => {
      return notification.error({
        message: "Lỗi hệ thống",
        description,
      });
    }; // notifyServerError method (502, 500)

    const notifyBEError = (description?: string) => {
      return notification.error({
        message: "Lỗi máy chủ",
        description,
      });
    }; // notifyBEError method (420)

    const notifyIdleError = (description?: string) => {
      return notification.error({
        message: "Lỗi gateway",
        description,
      });
    }; // notifyIdleError method (504)

    return {
      notifyUpdateItemSuccess,
      notifyUpdateItemError,
      notifyBadRequest,
      notifyUnAuthorize,
      notifyServerError,
      notifyBEError,
      notifyIdleError,
    };
  }
}

const appMessageService = new AppMessageService();
export default appMessageService;
