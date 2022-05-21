import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddDoctor = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // __________load treatment name______
  useEffect(() => {
    fetch("https://doctors-portal100.herokuapp.com/treatment")
      .then((res) => res.json())
      .then((treatment) => setServices(treatment));
  }, []);

  // ________get value use react hook form_________
  const onSubmit = async (data) => {
    const { name, email, speciality } = data;
    const image = data.avatar[0];
    const imgbbApiKey = "03686f238722f934a59c3d00457ccf73";
    const formData = new FormData();
    formData.append("image", image);

    // console.log(name, email, speciality, image);

    // ______upload image in imagbb______
    setIsLoading(true);
    fetch(`https://api.imgbb.com/1/upload?key=${imgbbApiKey}`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          const doctor = {
            name: name,
            email: email,
            speciality: speciality,
            img: data?.data?.image?.url,
          };

          // ___________add a new doctor_________
          fetch("https://doctors-portal100.herokuapp.com/addDoctor", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                setIsLoading(false);
                toast.success(`Doctor ${name} successfully`);
              }
            });
        }
      });
  };

  return (
    <div className="bg-accent text-fuchsia-100 text-left m-4 md:p-6 md:m-6 rounded-lg">
      <h1 className="text-3xl font-bold text-orange-300 text-center">
        Add New Doctor
      </h1>
      {/* ________form section__________ */}
      <form onSubmit={handleSubmit(onSubmit)} className="grid md:w-2/3 mx-auto">
        <label htmlFor="name">Name</label>
        <input
          className="text-accent border-2 rounded-lg p-2"
          type="name"
          {...register("name", {
            required: {
              value: true,
              message: "Name is required",
            },
          })}
          name="name"
          id="name"
        />
        {/* Show error meassage for name__________ */}
        <label className="mb-3">
          {errors.name?.type === "required" && (
            <span className="text-red-500 text-sm">{errors.name.message}</span>
          )}
        </label>
        {/* _______name field end__________  */}

        {/* ____email field start_____  */}
        <label htmlFor="email">Email</label>
        <input
          className="text-accent border-2 rounded-lg p-2"
          type="email"
          {...register("email", {
            required: {
              value: true,
              message: "Email is required",
            },
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,

              message: "Provide a valid email",
            },
          })}
          name="email"
          id="email"
        />
        {/* Show error meassage for email___________ */}
        <label className="mb-3">
          {errors.email?.type === "required" && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
          {errors.email?.type === "pattern" && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
        </label>
        {/* _____email field end______  */}

        {/* _______speciality field start_________  */}
        <label htmlFor="speciality">Speciality</label>
        <select
          className="border-2 rounded-lg p-2 text-accent font-medium"
          {...register("speciality", {
            required: {
              value: true,
              message: "Speciality is required",
            },
          })}
          name="speciality"
          id="speciality"
        >
          {services.map((service) => (
            <option key={service._id} value={service.name}>
              {service.name}
            </option>
          ))}
        </select>

        {/* Show error meassage for speciality____ */}
        <label className="mb-3">
          {errors.speciality?.type === "required" && (
            <span className="text-red-500 text-sm">
              {errors.speciality.message}
            </span>
          )}
        </label>
        {/* _______speciality field end_________  */}

        {/* _________ image________ */}
        <label htmlFor="avatar">Photo</label>
        <input
          className="border-2 rounded-lg p-2"
          type="file"
          {...register("avatar", {
            required: {
              value: true,
              message: "Photo is required",
            },
          })}
          name="avatar"
          id="avatar"
        />
        {/* Show error meassage for avatar*/}
        <label className="mb-3">
          {errors.avatar?.type === "required" && (
            <span className="text-red-500 text-sm">
              {errors.avatar.message}
            </span>
          )}
        </label>

        {/* _____submit btn_____ */}
        <input
          className={`${
            isLoading
              ? "btn loading btn-error font-bold text-white"
              : "btn btn-secondary font-bold text-white"
          }`}
          type="submit"
          value={isLoading ? "Loading......" : "Add Doctor"}
        />
      </form>
    </div>
  );
};

export default AddDoctor;
