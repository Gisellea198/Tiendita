import { useEffect } from "react";
import { useFormik } from "formik";
import { upload } from "../helpers/upload";
import { useDispatch } from "react-redux";
import actionProfile from "../action/actionUser";
import { buildUserDto } from "../user/UserDto";
import Modals from "../action/actionModal";

const useCustomFormik = (type, user) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {},
  });

  useEffect(() => {
    if (user) {
      formik.setValues({ ...user });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  formik.handleSubmit = () => {
    switch (type) {
      case "updateProfile":
        const formValues = buildUserDto(formik.values);
        dispatch(actionProfile.updateProfileUser(user._id, formValues));
        dispatch(Modals.hideModal());
        break;
      default:
        break;
    }
  };

  const handleInputChange = ({ target }) => {
    formik.setValues({
      ...formik.values,
      [target.name]: target.value,
    });
  };

  const handleInputChangeFile = (e, id) => {
    const file = e.target.files[0];
    upload(file)
      .then((response) => {
        document.getElementById(id).value = response;
        formik.setValues({ ...formik.values, [id]: response });
      })
      .catch((error) => {
        throw error;
      });
  };

  return [formik, formik.values, handleInputChange, handleInputChangeFile];
};
export { useCustomFormik };
