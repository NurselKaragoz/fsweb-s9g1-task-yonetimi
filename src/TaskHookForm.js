import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function TaskHookForm({ kisiler, submitFn }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    submitFn({ ...data, status: "yapılacak" });
  };

  const Success = () => {
    if (register) {
      toast("Yeni Göreviniz Eklendi !");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="title" className="input-label">
          Başlık
        </label>
        <input
          className="input-text"
          type="text"
          id="title"
          placeholder="Title"
          {...register("title", {
            required: "Başlık alanı boş bırakılamaz !",
            minLength: {
              value: 3,
              message: "Başlık en az 3 karakter içermelidir",
            },
          })}
        />
        {errors.title && <p className="input-error">{errors.title.message}</p>}
      </div>
      <div className="form-line">
        <label htmlFor="description" className="input-label">
          Açıklama :
        </label>
        <input
          className="input-textarea"
          type="text"
          id="description"
          placeholder="Açıklama"
          {...register("description", {
            required: "Mutlaka Açıklama Yazmalısınız!",
            minLength: {
              value: 10,
              message: "Açıklama en az 10 karakter içermelidir",
            },
          })}
        />
        {errors.description && (
          <p className="input-error">{errors.description.message}</p>
        )}
      </div>
      <div className="form-line">
        <label className="input-label">İnsanlar </label>
        {kisiler.map((kisi, i) => (
          <div key={i}>
            <input
              className="input-checkbox"
              value={kisi}
              type="checkbox"
              {...register("people", {
                required: "En az bir kişi seçmelisiniz !",
                validate: {
                  maxThree: (value) =>
                    value.length <= 3 || "En fazla 3 kişi seçebilirsiniz!",
                },
              })}
            />
            {kisi}
          </div>
        ))}
        {errors.people && (
          <p className="input-error">{errors.people.message}</p>
        )}
      </div>
      <div>
        <input
          type="submit"
          className="submit-button"
          value="Görevi Ekle"
          onClick={Success}
        />
      </div>
    </form>
  );
}

// export default function TaskHookForm() {
//   return (
//     <div>Formunuzu react-hook-form kullanarak burada oluşturun. TaskForm dosyasındaki HTML yapısını vs app.css içerisindeki classları kullanabilirsiniz.</div>
//   )
