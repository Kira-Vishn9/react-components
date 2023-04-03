import React from 'react';
import './myform.css';
import { ICardData } from '../../../interface/interface';
import MyCart from '../cart/MyCard';
import { useForm } from 'react-hook-form';

function MyForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ICardData>({
    defaultValues: {
      textInput: '',
      dateInput: '',
      selectInput: '',
      checkboxInput: '',
      radioInput: '',
      file: '',
    },
  });

  const [cardData, setCardData] = React.useState<Array<{ key: number; props: ICardData }>>([]);
  const [, setFormSubmitted] = React.useState(false);

  const onSubmit = (data: ICardData) => {
    const file = data.file;
    if (file instanceof FileList && file.length > 0) {
      const fileItem = file.item(0);
      const imageUrl = URL.createObjectURL(fileItem as File);
      setCardData((prevData) => [
        ...prevData,
        { key: Date.now(), props: { ...data, file: imageUrl } },
      ]);
    } else {
      setCardData((prevData) => [...prevData, { key: Date.now(), props: data }]);
    }
    reset();
    setFormSubmitted(true);
    alert('New Card init');
  };

  return (
    <form className="wrapForm" onSubmit={handleSubmit(onSubmit)}>
      <div className="mainForm">
        <div className={errors.textInput ? 'error' : ''}>
          <input
            placeholder="Write something"
            type="text"
            {...register('textInput', { required: true })}
          />
        </div>
        <div className={errors.dateInput ? 'error' : ''}>
          <input type="date" {...register('dateInput', { required: true })} />
        </div>
        <select defaultValue="Choose..." {...register('selectInput', { required: true })}>
          <option value="Plagiarism">Plagiarism</option>
          <option value="Origin">Origin</option>
        </select>
        <div className={errors.checkboxInput ? 'error' : ''}>
          <input
            type="checkbox"
            {...register('checkboxInput', { required: false })}
            defaultChecked={false}
          />
        </div>
        I give permission to publish this photo on this site
        <div className={errors.radioInput ? 'error' : ''}>
          <input type="radio" value="woman" {...register('radioInput', { required: true })} />
        </div>
        I am woman
        <div className={errors.radioInput ? 'error' : ''}>
          <input type="radio" value="superman" {...register('radioInput', { required: true })} />
        </div>
        I am SuperMan
        <div className={errors.file ? 'error' : ''}>
          <input type="file" {...register('file')} />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </div>
      <div className="placeForCard">
        <section>
          {cardData.map((data) => (
            <MyCart key={data.props.file} {...data} />
          ))}
        </section>
      </div>
    </form>
  );
}

export default MyForm;
