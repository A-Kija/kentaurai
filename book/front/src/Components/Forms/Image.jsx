import {SERVER_IMAGES_URL} from '../../Constants/urls';

export default function Image({ handleImage, imageName, imageInput, image, clearImage, rem, name, errors = {} }) {
    
    const imgPath = image?.length > 40 ?  '' : SERVER_IMAGES_URL;

    return (
        <>
            <div className="error-text"><span className={errors[name] ? 'show' : ''}>{errors[name] ?? ''}</span></div>
            <label className="img-label" htmlFor={name}>Pridėti nuotrauką: {imageName}</label>
            <input className={errors[name] ? 'error' : ''} id={name} onChange={handleImage} ref={imageInput} type="file" name={name} />
            <div className="up-img">
                {
                    image
                        ?
                        <>
                            <img src={imgPath + image} alt="uploaded" />
                            <span className="cb-svg remove" onClick={clearImage}>{rem}</span>
                        </>
                        :
                        null
                }
            </div>
        </>
    );
}