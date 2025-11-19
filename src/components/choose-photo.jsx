import thumbnail from './../assets/thumbnail.png';
import './../styles/choose-photo.css'

export default function ChoosePhoto({photo, onChange}) {

  return (
    <>
      <label htmlFor="photo">
        Choose image to upload
        <input type="file" accept="image/*" id="photo" onChange={onChange} />
      </label>
      <div className="preview">
        <img src={photo ? URL.createObjectURL(photo) : thumbnail} alt="thumnail" />
      </div>
    </>
  );
}
