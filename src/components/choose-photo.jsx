import thumbnail from './../assets/thumbnail.png';
import './../styles/choose-photo.css'

export default function ChoosePhoto({photo, onChange, isDisabled = false}) {

  return (
    <div className="choose-photo">
      <label htmlFor="photo">
        {!isDisabled && <span className='choose-image-button'>Add photo</span>}
        <input type="file" accept="image/*" id="photo" onChange={onChange} disabled={isDisabled}/>
      </label>
      <div className="preview">
        <img src={photo ? URL.createObjectURL(photo) : thumbnail} alt="thumnail" />
      </div>
    </div>
  );
}

