export const upload = async (files) => {
  const cloud_name = "dpeing6dx";
  const upload_preset = "gsaju5lv";

  const formData = new FormData();
  formData.append("upload_preset", upload_preset);
  formData.append("file", files[0]);

  const options = {
    method: "POST",
    body: formData,
  };

  return fetch(
    `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
    options
  )
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
