import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "./features/mailSlice";

import "./SendMail.css";
import { db } from "./firebase";
import firebase from "firebase";

const SendMail = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {
    console.log(formData);
    db.collection("emails").add({
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    dispatch(closeSendMessage());
  };

  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <CloseIcon
          className="sendMail__close"
          onClick={() => dispatch(closeSendMessage())}
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          name="to"
          id="sendMailTo"
          placeholder="To"
          // required
          {...register("to", { required: true })}
        />
        {errors.to && (
          <p className="sendMail__error">
            To is required<sup>*</sup>
          </p>
        )}
        <input
          type="text"
          name="subject"
          id="sendMailSubject"
          placeholder="Subject"
          {...register("subject", { required: true })}
          // required
        />
        {errors.subject && (
          <p className="sendMail__error">
            Subject is required<sup>*</sup>
          </p>
        )}
        <input
          type="text"
          name="message"
          id="sendMailMessage"
          placeholder="Message..."
          className="sendMail__message"
          // required
          {...register("message", { required: true })}
        />
        {errors.message && (
          <p className="sendMail__error">
            Message is required<sup>*</sup>
          </p>
        )}

        <div className="sendMail__options">
          <Button
            className="sendMail__send"
            color="primary"
            variant="contained"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SendMail;
